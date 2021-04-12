import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import axios from 'axios'
import { baseUrl } from '../components/BaseUrl'

const ProfileInfo = styled.div`
  padding: 15px;
  position: relative;

  > img {
    width: 100%;
    border-radius: 5px;
  }

  > div {
    position: absolute;
    bottom: 0;
    margin-bottom: 15px;
    margin: 10px;
    color: white;

    > h1 {
      font-size: 24px;

      > span {
        font-size: 16px;
        font-weight: 300;
      }
    }
  }
`

const Buttons = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center; 
  padding-bottom: 20px;

  > button {
    background-color: #D8DCD6;
    border-radius: 50px;
    width: 40px;
    height: 40px;
    font-size: 30px;
    :focus {
      outline: none;
    }
  }
  
  > button:first-child {
    color: #000133;
    :hover {
      background-color: #000133;
    }
    border: 1px solid #000133;
  }
  
  > button:last-child {
    color: #FC86AA;
    display: flex;
    align-items: center;
    :hover {
      background-color: #FC86AA;
    }
    border: 1px solid #FC86AA;
  }

  > button {
    :hover {
      cursor: pointer;
      color: white;
    }
  }
`

// export default function Profile (props) {
//   const profileMock = {
//     id: "qxUrxMGvODWZa4ZASbfwx",
//     age: 26,
//     name: "Carol Danvers",
//     photo: "https://images.outgo.com.br/clients/1/events/2923/Anitta-Perfil-4-1.png",
//     bio: "Gosto de voar e de gatos. Procuro relações que respeitem minha independência."
//   }

//   return (
//     <div>
//       <Header changePage={props.changePage} page={props.page}/>
//       <ProfileInfo>
//         <img src={profileMock.photo} alt={profileMock.name} />
//         <div>
//           <h1>{profileMock.name}, <span>{profileMock.age}</span></h1>
//           <p>{profileMock.bio}</p>
//         </div>
//       </ProfileInfo>
//       <Buttons>
//         <button>x</button>
//         <button>❤</button>
//       </Buttons>
//     </div> 
//   )
// }

export default function Profile (props) {
  const [profileToChoose, setProfileToChoose] = useState()

const getProfileToChoose = () => {
  axios
  .get(`${baseUrl}person`)
  .then((res) => setProfileToChoose(res.data.profile))
  .catch((err) => console.log(err))
  }

  useEffect(() => {
    getProfileToChoose()
  }, [])

  const buttonMatches = (match) => {
    const body = {
      id: profileToChoose.id,
      choice: match
    }

    axios
    .post (`${baseUrl}choose-person`, body)
    .then(() => getProfileToChoose())
    .catch((err) => console.log(err))
  }

  return (
    <div>
      <Header changePage={props.changePage} page={props.page}/>
      {profileToChoose &&<>
      <ProfileInfo>
        <img src={profileToChoose.photo} alt={profileToChoose.name} />
        <div>
          <h1>{profileToChoose.name} {profileToChoose.age}</h1>
          <p>{profileToChoose.bio}</p>
        </div>
      </ProfileInfo>
      <Buttons>
        <button onClick = {() => buttonMatches(false)}>x</button>
        <button onClick = {() => buttonMatches(true)}>❤</button>
      </Buttons>
      </>}
    </div> 
  )
}
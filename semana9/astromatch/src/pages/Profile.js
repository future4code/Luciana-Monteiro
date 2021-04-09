import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header'

const ProfileInfo = styled.div`
  padding: 15px;
  position: relative;


  > img {
    width: 100%;
    border-radius: 5px;
  }

  }
  > div {
    position: absolute;
    bottom: 0;
    margin-bottom: 15px;
    margin-left: 10px;
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
    background-color: white;
    border-radius: 50px;
    :focus {
      outline: none;
    }
  }
  
  > button:first-child {
    color: red;
    :hover {
      background-color: red;
    }
    border: 1px solid red;
  }
  
  > button:last-child {
    color: green;
    :hover {
      background-color: green;
    }
    border: 1px solid green;
  }

  > button {
    :hover {
      cursor: pointer;
      color: white;
    }
  }
`

export default function Profile (props) {
  const profileMock = {
    id: "qxUrxMGvODWZa4ZASbfwx",
    age: 26,
    name: "Carol Danvers",
    photo: "https://s1.r29static.com/bin/entry/7e8/340x408,85/2138124/image.webp",
    bio: "Gosto de voar e de gatos. Procuro relações que respeitem minha independência."
  }


  return (
    <div>
      <Header changePage={props.changePage} page={props.page}/>
      <ProfileInfo>
        <img src={profileMock.photo} alt={profileMock.name} />
        <div>
          <h1>{profileMock.name}, <span>{profileMock.age}</span></h1>
          <p>{profileMock.bio}</p>
        </div>
      </ProfileInfo>
      <Buttons>
        <button>X</button>
        <button>O</button>
      </Buttons>
    </div> 
  )
}
import { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router"
import axios from 'axios' 
import CountrySelector from '../components/countrySelector/CountrySelector'
import { BaseUrl } from '../components/baseUrl/BaseUrl'

function ApplicationFormPage() {
  const [tripList, setTripList] = useState([])
  const [selectTrip, setSelectTrip] = useState('')
  const [name, setName] = useState('')
  const [age, setAge] = useState({})
  const [applicationText, setApplicationText] = useState('')
  const [profession, setProfession] = useState('')
  const [country, setCountry] = useState('')
  const params = useParams()
  const history = useHistory()

  const handleSelectTrip = (e) => {
    setSelectTrip(e.target.value)
  }
  const handleName = (e) => {
    setName(e.target.value)
  }
  const handleAge = (e) => {
    setAge(e.target.value)
  }
  const handleApplicationText = (e) => {
    setApplicationText(e.target.value)
  }
  const handleProfession = (e) => {
    setProfession(e.target.value)
  }
  const handleCountry = (e) => {
    setCountry(e.label)
  }

useEffect(() => {
  getTrips()
}, [])

  const getTrips = ()=> {
    axios
      .get(`${BaseUrl}/trips`)
      .then((res)=>{
        setTripList(res.data.trips)
        console.log(res.data)
  })
  .catch((err)=>{
      console.log(err)
  })
  }
  const allTrips = tripList.map((trip)=>{console.log("Inscrição", trip)
    return(
      <option key={trip.id} value={trip.id}>
        {trip.name}
      </option>

    )
  })
  
  const applicationTrip = (event) => {
    event.preventDefault()
    const body = {
      name: name,
      age: age,
      applicationText: applicationText,
      profession: profession,
      country: country
  }
  
    axios
    .post(`${BaseUrl}/trips/${params.id}/apply`, body, {
    })
    .then((res) => {
      console.log(res.data)
      alert('🚀 Você se inscreveu com sucesso. Prepare-se, você vai voar!')
      history.push('/')
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  return (
    <div className="Application">
      <h1>ApplicationFormPage</h1>
      <form onSubmit={applicationTrip}>
        <select value={selectTrip} onChange={handleSelectTrip} required >{allTrips}</select>
        <input value={name} onChange={handleName} placeholder="Name" type ='string' pattern={"(.*[a-z]){2}"} required></input>
        <input value={age} onChange={handleAge} placeholder="Idade" type ='number' min = {18} required ></input>
        <input value={applicationText} onChange={handleApplicationText} placeholder="Texto de Candidatura " pattern ={'^.{50,}$'} type ='string' required></input>
        <input value={profession} onChange={handleProfession} placeholder="Profissão " pattern={"(.*[a-z]){10}"} type ='string' required></input>
        <CountrySelector handleCountry= {handleCountry}/>
      <button type = "submit" >Enviar</button>
      </form>
      <button onClick={history.goBack}>Voltar</button>
    </div>
  )
}

export default ApplicationFormPage


import React,{useState} from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { BaseUrl } from '../components/baseUrl/BaseUrl'
import { useProtectedPage } from "../components/useProtectedPage"



function CreateTripPage () {
  useProtectedPage()
  const [name, setName] = useState('')
  const [planet, setPlanet] = useState('')
  const [date, setDate] = useState('')
  const [description, setDescription] = useState('')
  const [durationInDay, setDurationInDay] = useState(0)
  const history = useHistory()

  const handleName = (e) => {
    setName(e.target.value)
  }
  const handlePlanet= (e) => {
    setPlanet(e.target.value)
  }
  const handleDate= (e) => {
    setDate(e.target.value)
  }
  const handleDescription= (e) => {
    setDescription(e.target.value)
  }
  const handleDurationInDay= (e) => {
    setDurationInDay(e.target.value)
  }

  const create = (event) =>{
  const token = window.localStorage.getItem('token')
    event.preventDefault()

  const body = {
    name: name,
    planet: planet,
    date: date,
    description: description,
    durationInDays: durationInDay
  }

    axios
    .post(`${BaseUrl}/trips/`, body, {
      headers: {
        auth: token
      }
    })
    .then((res)=>{
      console.log(res.data)
      window.localStorage.setItem('token', res.data.token)
      alert ("Viagem Criada com sucesso!")
    })
    .catch((err)=>{
      console.log(err)
    })
  }

    return (
      <div className = "CreateTrip">
        <h1>Create trip page</h1>
        <form form onSubmit={create}>
          <input value={name} onChange={handleName} placeholder="Nome" type = 'string' pattern={"(.*[a-z]){2}"} required />
            <select value={planet} onChange={handlePlanet} required>
              <option value = ""></option>
              <option value = "Jupiter">Jupiter</option>
              <option value = "Marte">Marte</option>
              <option value = "Mercurio">Mercúrio</option>
              <option value = "Netuno">Netuno</option>
              <option value = "Plutao">Plutão</option>
              <option value = "Saturno">Saturno</option>
              <option value = "Terra">Terra</option>
              <option value = "Urano">Urano</option>
              <option value = "Venus">Venus</option>
            </select>
          <input value={date} onChange={handleDate} type ='date' required/>
          <input value={description} onChange={handleDescription} placeholder = "Descrição" pattern ={'^.{30,}$'} type ='string' required />
          <input value={durationInDay} onChange={handleDurationInDay} placeholder = "Duração da viagem" type = 'number' min={50} required />
          <button onClick={create}>Criar Viagem</button>
          <button onClick={history.goBack}>Voltar</button>
        </form>
    </div>
  );
}

export default CreateTripPage;

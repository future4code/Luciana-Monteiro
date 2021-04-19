import { useHistory } from "react-router-dom"
import axios from 'axios'
import { BaseUrl } from '../components/baseUrl/BaseUrl'
import { useState, useEffect } from 'react'
import { useProtectedPage } from "../components/useProtectedPage"

function AdminHomePage() {
  useProtectedPage()
  const history = useHistory()
  const [trips, setTrips] = useState ([])

  const goToTripDetails = (tripId) => {
    history.push(`/admin/trips/${tripId}`)
  }

  useEffect(() => { 
    axios
      .get(`${BaseUrl}/trips`)
      .then((res) => {
        setTrips(res.data.trips)
      })
      .catch((err) => {
        alert('Houve um erro inesperado')
      })
  }, [])

  const goToCreateTrip = () => {
    history.push(`/admin/trips/create`)
  }

  const deleteTrip = (id) => {
    if(window.confirm("Tem certeza que quer deletar essa viagem?")){
    const token = window.localStorage.getItem('token') 
    axios
    .delete(`${BaseUrl}/trips/${id}`,
    {   
      headers:{
        auth:token
      }
    })
    .then(() => {
      trips()
    })
    .catch((err) => {
      console.log(err)
    })
    }
}

  return (
    <div key={trips.id}>
      <h1>AdminHomePage</h1>
      <button onClick={goToCreateTrip}>Criar Viagem</button>
      <button onClick={history.goBack}>Voltar</button>      
      {trips.map((trip) => {
        return(
          <div>
            <button key={trip.id} onClick={() => goToTripDetails(trip.id)}>
              <p>
                {trip.name}
              </p>
            </button>
            <button onClick = {()=>deleteTrip(trip.id)}>Apagar</button>
          </div>
        )
      }) }
    </div>
  )
}

export default AdminHomePage;
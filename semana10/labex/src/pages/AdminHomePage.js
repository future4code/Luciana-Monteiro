import { useHistory } from "react-router"
import axios from 'axios'
import { BaseUrl } from '../components/baseUrl/BaseUrl'
import { useState, useEffect } from 'react'

function AdminHomePage() {
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

  return (
    <div>
      <h1>AdminHomePage</h1>
      <button>Criar Viagem</button>
      <button onClick={history.goBack}>Voltar</button>      
      {trips.map((trip) => {
        return(
          <div key={trip.id} onClick={() => goToTripDetails(trip.id)}>
            <p>
              {trip.name}
              <span>X</span>
            </p>
          </div>
        )
      }) }
    </div>
  );
}

export default AdminHomePage
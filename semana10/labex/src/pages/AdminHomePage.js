import { useHistory, useParams } from "react-router-dom"
import axios from 'axios'
import { BaseUrl } from '../components/baseUrl/BaseUrl'
import { useState, useEffect } from 'react'
import { useProtectedPage } from "../components/useProtectedPage"

function AdminHomePage() {
  useProtectedPage()
  const history = useHistory()
  const [trips, setTrips] = useState ([])
  const params = useParams()

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

  // const deleteTrips = () => {
  //   const token = window.localStorage.getItem('token')
    
  //   axios 
  //     .del(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/luciana-monteiro-cruz/trips/${id}`, {

        
  //       headers: {
  //         auth: token
  //       }
  //     })
    
  //     .then((res) => {
  //       deleteTrips(res.data.trip)
  //       // console.log(res.data.trip)
  //     })
  //     .catch((err) => {
  //       alert('Houve um erro inesperado')
  //     })
  // }

  return (
  <div>
      <h1>AdminHomePage</h1>
      <button>Criar Viagem</button>
      <button onClick={history.goBack}>Voltar</button>      
      {trips.map((trip) => {
        return(
          <div>
            <button key={trip.id} onClick={() => goToTripDetails(trip.id)}>
              <p>
                {trip.name}
                
                  {/* <button onClick={() => deleteTrips(trips.id)}>X</button> */}
                
              </p>
            </button>
          </div>
        )
      }) }
    </div>
  );
}

export default AdminHomePage;
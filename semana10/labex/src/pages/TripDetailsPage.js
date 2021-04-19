import { BaseUrl } from "../components/baseUrl/BaseUrl"
import axios from 'axios'
import { useHistory, useParams } from "react-router"
import { useEffect, useState } from "react"
import { useProtectedPage } from "../components/useProtectedPage"

function TripDetailsPage() {
  useProtectedPage()
  const [trip, setTrip] = useState({})
  const params = useParams() 
  const history = useHistory()

  const getTripDetails = () => {
  const token = window.localStorage.getItem('token')

    axios 
    .get(`${BaseUrl}/trip/${params.id}`, {
      headers: {
        auth: token
      }
    })

    .then((res) => {
      setTrip(res.data.trip)
      console.log(res.data.trip)
    })
    .catch((err) => {
      alert('Você não está logado')
    })
  }

  useEffect(() => {
    getTripDetails()
  }, [])

  const decideCandidate = (tripId, candidateId, approved) => {
  const body = {
    approve: approved
  }
  const token = window.localStorage.getItem('token')

    axios
    .put(`${BaseUrl}/trips/${tripId}/candidates/${candidateId}/decide`, body,
    {
      headers: {
        auth: token
      }
    })
    .then((res) => {
      alert('A decisão foi tomada') 
      getTripDetails()
    })
    .catch((err) => {
      alert('Houve um erro inesperado')
    })
  }

  return (
    <div>
      {trip && trip.name && 
      <>
        <div>
          <h1>{trip.name}</h1>
          <p>Descrição:{trip.description}</p>
          <p>Planeta:{trip.planet}</p>
          <p>Nome:{trip.name}</p>
          <p>Duração:{trip.durationInDays}</p>
          <p>Data:{trip.date}</p>
        </div>
        <div>
          <button onClick={history.goBack}>Voltar</button>
          <div>
            <h2>Candidatos Pendentes</h2>
            {trip.candidates.map((candidate) => {
              return(
                <div>
                  <p>Nome:{candidate.name}</p>
                  <p>Profissão:{candidate.profession}</p>
                  <p>Idade:{candidate.age}</p>
                  <p>País:{candidate.country}</p>
                  <p>Texto de candidatura:{candidate.applicationText}</p>
                  <div>
                    <button onClick={() => {decideCandidate(trip.id, candidate.id, true)}}>Aprovar</button>
                    <button onClick={() => {decideCandidate(trip.id, candidate.id, false)}}>Reprovar</button>
                  </div>
                </div>
              )
            })}
            <h2>Candidatos Aprovados</h2>
            {trip.approved.map((approved) => {
              return(
                <div>
                  <p>Nome:{approved.name}</p>
                  <p>Profissão:{approved.profession}</p>
                  <p>Idade:{approved.age}</p>
                  <p>País:{approved.country}</p>
                  <p>Texto de candidatura:{approved.applicationText}</p>
                  
                </div>
              )
            })}
          </div>
        </div>
      </>}
    </div>
  )
}

export default TripDetailsPage
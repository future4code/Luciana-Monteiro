import { useState } from "react";
import { useHistory } from "react-router";
import Header from '../components/Header'
import { BaseUrl } from '../components/baseUrl/BaseUrl'
import axios from 'axios'
import { useEffect } from "react";

function ListTripsPage (props) {
  const [tripList, setTripList] = useState([])
  const history = useHistory()

  const goToTripsApplication = () => {
    history.push('/trips/application')
  }

  useEffect(() => {
    getTrips(props.trips)
  }, [props.trips])

  const getTrips = () => {
    axios
    .get(`${BaseUrl}/trips`)
    .then((res) => {
      setTripList(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  const allTrips = tripList.trips && tripList.trips.map((trip) => {

    return(
      <div key={trip.name}>
        <p>{trip.name}</p>
        <p> Descrição:{trip.description}</p>
        <p> Planeta de Destino:{trip.planet}</p>
        <p> Duração:{trip.durationInDays}</p>
        <p> Data de Embarque:{trip.date}</p>
      </div>
    )
  })

  return (
    <div>
        <Header />
        <h1>Lista de Viagens</h1>
        <div>      
          <button onClick={goToTripsApplication}>Inscreva-se</button>
          <button onClick={history.goBack}>Voltar</button>
        </div>
          {allTrips}  
    </div>
  )
}

export default ListTripsPage;
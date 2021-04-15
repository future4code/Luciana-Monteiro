import { useHistory } from "react-router";


function ListTripsPage () {
  const history = useHistory()
  
  const goToTripsApplication = () => {
    history.push('/trips/application')
  }

  return (
    <div>
      <h1>Home - ListTripsPage</h1>
      <button onClick={goToTripsApplication}>Inscreva-se</button>
    </div>
  );
}

export default ListTripsPage;
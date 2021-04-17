import { useHistory } from "react-router";
import { useProtectedPage } from "../components/useProtectedPage";

function ListTripsPage () {
  useProtectedPage()
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
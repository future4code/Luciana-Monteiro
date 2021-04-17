import { useHistory } from "react-router-dom";
import { useProtectedPage } from "../components/useProtectedPage"


function CreateTripPage() {
  useProtectedPage()
  const history = useHistory()

  return (
    <div>
      <h1>CreateTripPage</h1>
    </div>
  );
}

export default CreateTripPage
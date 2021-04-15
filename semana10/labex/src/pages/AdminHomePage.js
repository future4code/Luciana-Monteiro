import { useHistory } from "react-router";


function AdminHomePage() {
  const history = useHistory()
  
  const goToTripsDetail = () => {
    history.push('/admin/trips/:id')
  }

  return (
    <div>
      <h1>AdminHomePage</h1>
    </div>
  );
}

export default AdminHomePage;
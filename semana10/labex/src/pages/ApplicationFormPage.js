import { useHistory } from "react-router" 

function ApplicationFormPage() {
  const history = useHistory()
  
  const goToAboutPage = () => {
    history.push('/')
  }  

  return (
    <div>
      <h1>ApplicationFormPage</h1>
      <button onClick={goToAboutPage}>Voltar</button>
    </div>
  );
}

export default ApplicationFormPage;

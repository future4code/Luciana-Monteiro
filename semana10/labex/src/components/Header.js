import { useHistory } from "react-router"

function Header () {
  const history = useHistory()

  const goToHomePage = () => {
    history.push('/')
  }

  const goToLoginPage = () => {
    history.push('/login')
  }

  return(
    <div>
      <button onClick={goToHomePage}>Home</button> 
      <button onClick={goToLoginPage}>Área administrativa</button>
    </div>
  )
}

export default Header
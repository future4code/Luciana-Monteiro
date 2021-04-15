import axios from 'axios'
import { useState } from 'react'
import { BaseUrl } from '../components/baseUrl/BaseUrl'
import { useHistory } from "react-router";


function LoginPage() {
  const history = useHistory()
  
  const goToAdminHome = () => {
    history.push('/admin/trips/list')
  }  

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const handleEmail = (event) => {
    setEmail(event.target.value) 
  }
  const handlePassword = (event) => {
    setPassword(event.target.value)
  }
  const login = async () => {
    const body = {
      email: email,
      password: password,
    }
    const response = await axios
    .post(`${BaseUrl}/login, body`)
    console.log(response)
  }


  return (
    <div>
      <h1>LoginPage</h1>
      <input placeholder='e-mail' value={email} onChange={handleEmail}/>
      <input placeholder='senha' value={password} onChange={handlePassword}/>
      <button onClick={login, goToAdminHome}>Login</button>
    </div>
  );
}

export default LoginPage;
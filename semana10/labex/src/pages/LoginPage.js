import axios from 'axios'
import { useState } from 'react'
import { BaseUrl } from '../components/baseUrl/BaseUrl'
import { useHistory } from "react-router-dom";

function LoginPage() {
  const history = useHistory()  

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
    const response = await 
    axios
    .post(`${BaseUrl}/login`, body)
    .then((res) => {
      console.log(res.data)
      window.localStorage.setItem('token', res.data.token)
      history.push('/admin/trips/list')
    })
    .catch((err) => {
      console.log(err)
    })
  }


  return (
    <div>
      <h1>LoginPage</h1>
      <input placeholder='e-mail' value={email} onChange={handleEmail}/>
      <input placeholder='senha' value={password} onChange={handlePassword}/> 
      <button onClick={login}>Login</button>
    </div>
  );
}

export default LoginPage
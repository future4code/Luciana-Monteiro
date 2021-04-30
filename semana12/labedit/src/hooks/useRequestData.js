import axios from "axios"
import { useEffect, useState } from "react"


const useRequestData = (initialData, url) => {
  const [data, setData] = useState(initialData)

  useEffect(() => {
    axios
    .get(url, {
      headers: {
        authorization: localStorage.getItem("token")
      }
    })
    .then((res) => {
      setData(res.data)
    })
    .catch((err) => {
      console.log(err)
      alert("Ocorreu um erro, tente novamente")
    })
  }, [url])

  return (data)
}

export default useRequestData
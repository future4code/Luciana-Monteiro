// import React, { useState } from 'react'
// import { GlobalStateContext } from "./GlobalStateContext"

// const GlobalState = (props) => {
//   const token = localStorage.getItem("token")
//   const [rightButtonText, setRightButtonText] = useState(token ? "Logout" : "Login")

//   return(
//     <GlobalStateContext.Provider>
//       {props.children}
//     </GlobalStateContext.Provider>
//   )
// }

// export default GlobalState
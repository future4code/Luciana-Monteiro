import React, { useState } from "react";
import theme from "./constants/theme";
import Router from "./routes/Router"
import { ThemeProvider } from "@material-ui/core/styles"
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
// import GlobalState from "./global/GlobalState";

const App = () => {
  const token = localStorage.getItem("token")
  const [rightButtonText, setRightButtonText] = useState (token ? "Logout" : "Login")

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header rightButtonText={rightButtonText} setRightButtonText={setRightButtonText} />
      {/* <GlobalState> */}
        <Router setRightButtonText={setRightButtonText} />
      {/* </GlobalState> */}
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

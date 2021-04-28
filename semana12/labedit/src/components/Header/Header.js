import React, { useState } from 'react'
import AppBar from '@material-ui/core/AppBar'
import { StyledToolbar } from './styled'
import Button from '@material-ui/core/Button'
import { goToFeedPage, goToLoginPage } from '../../routes/coordinator'
import { useHistory } from 'react-router-dom'

const Header = () => {
  const history = useHistory()
  const token = localStorage.getItem("token")
  const [rightButtonText, setRightButtonText] = useState(token ? "Logout" : "Login")
  const logout = () => {
    localStorage.removeItem("token")
  }
  const rightButtonAction = () => {
    if (token) {
      logout()
      setRightButtonText("Login")
      goToLoginPage(history)
    } else {
      goToLoginPage(history)
    }
  }
  return (
      <AppBar position="static">
        <StyledToolbar>
          <Button onClick={() => goToFeedPage(history)} color="inherit">LabEddit</Button>
          <Button onClick={rightButtonAction} color="inherit">{rightButtonText}</Button>
        </StyledToolbar>
      </AppBar>
  );
}

export default Header
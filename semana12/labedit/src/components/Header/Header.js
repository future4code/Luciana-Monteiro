import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import { StyledToolbar } from './styled'
import Button from '@material-ui/core/Button'
import { goToPostPage, goToLoginPage } from '../../routes/coordinator'
import { useHistory } from 'react-router-dom'

const Header = ({rightButtonText, setRightButtonText}) => {
  const token = localStorage.getItem("token")
  const history = useHistory()

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
          <Button onClick={() => goToPostPage(history)} color="inherit">LabEddit</Button>
          <Button onClick={rightButtonAction} color="inherit">{rightButtonText}</Button>
        </StyledToolbar>
      </AppBar>
  );
}

export default Header
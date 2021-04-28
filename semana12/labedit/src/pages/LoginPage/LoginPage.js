import React from "react"
import { ScreenContainer, SignUpButtonContainer } from './styled'
import Button from '@material-ui/core/Button'
import LoginForm from "./LoginForm"
import { useHistory } from "react-router"
import { goToSignUpPage } from '../../routes/coordinator'

const LoginPage = () => {
  const history = useHistory()
  return (
    <ScreenContainer>
      <LoginForm />
      <SignUpButtonContainer>
      <Button 
        onClick={() => goToSignUpPage(history)}
        type={"submit"}
          variant={"text"}
          color={"primary"}
          margin={"normal"}
          fullWidth
          >
            Cadastre-se!
      </Button>
      </SignUpButtonContainer>
    </ScreenContainer>
  )
}

export default LoginPage
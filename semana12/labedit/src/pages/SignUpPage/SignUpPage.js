import React from "react"
import SignUpForm from "./SignUpForm"
import { ScreenContainer } from './styled'

const SignUpPage = ({setRightButtonText}) => {
  return (
    <ScreenContainer>
      <SignUpForm setRightButtonText={setRightButtonText} />     
    </ScreenContainer>
  )
}

export default SignUpPage

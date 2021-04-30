import React from "react";
import { InputsContainer, SignUpFormContainer } from "./styled";
import TextField from "@material-ui/core/TextField";
import useForm from "../../hooks/useForm";
import Button from "@material-ui/core/Button";
import { useHistory } from 'react-router-dom'
import useUnprotectedPage from "../../hooks/useUnprotectedPage";
import { signUp } from "../../services/user";


const SignUpForm = ({setRightButtonText}) => {
  useUnprotectedPage()
  const history = useHistory()
  const [form, onChange, clear] = useForm({ name: "", email: "", password: "" });

  const onSubmitForm = (event) => {
    event.preventDefault();
    signUp(form, clear, history, setRightButtonText)
  };

  return (
    <form onSubmit={onSubmitForm}>
      <SignUpFormContainer>
        <h1>Cadastre-se!</h1>
        <InputsContainer>
        <TextField
            name={"username"}
            value={form.username}
            onChange={onChange}
            label={"Nome"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required
            autoFocus
          />
          <TextField
            name={"email"}
            value={form.email}
            onChange={onChange}
            label={"E-mail"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required
            type={"email"}
          />
          <TextField
            name={"password"}
            value={form.password}
            onChange={onChange}
            label={"Senha"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required
            type={"password"}
          />
        </InputsContainer>
          <Button
            type={"submit"}
            fullWidth
            variant={"contained"}
            color={"primary"}
          >
            Fazer Cadastro!
          </Button>
        
      </SignUpFormContainer>
    </form>  
  );
};

export default SignUpForm;
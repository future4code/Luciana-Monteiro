import { TextField } from "@material-ui/core"
import { useHistory } from "react-router"
import useForm from '../../hooks/useForm'
import { AddPostFormContainer, InputsContainer } from "./styled"

const AddPostForm = () => {
  const history = useHistory()
  const [form, onChange, clear] = useForm({title: "", text: ""})

  const onSubmitForm = (event) => {
    event.preventDefault()
    console.log(form)
  }

  return (
    <form onSubmit={onSubmitForm}>
      <AddPostFormContainer>
        <InputsContainer>
          <TextField 
            name={"title"}
            value={form.title}
            onChange={onChange}
            label={'Título'}
            variant={'outline'}
            fullWidth
            required
            autoFocus
            margin={'normal'}
          />
          <TextField 
            name={"text"}
            value={form.text}
            onChange={onChange}
            label={'Texto'}
            variant={'outline'}
            fullWidth
            required
            autoFocus
            margin={'normal'}
          />
        </InputsContainer>
        <Button
        color={'primary'}
        variant={'contained'}
        type={'submit'}
        fullWidth
        >
          {islLoading ? <CircularProgress color={'inherit'} size={24} /> : <>Adicionar Post</>}
        </Button>
      </AddPostFormContainer>

    </form>
  )
}
export const goToLoginPage = (history) => {
  history.push("/login")
}

  export const goToSignUpPage = (history) => {
    history.push("/cadastro")
  }

  export const goToPostPage = (history) => {
    history.push("/")
  }

  export const goToPostDetailPage = (history, id) => {
    history.push(`/detalhes/${id}`)
  }
export const goToLoginPage = (history) => {
  history.push("/login")
}

  export const goToSignUpPage = (history) => {
    history.push("/pagina-de-cadastro")
  }

  export const goToFeedPage = (history) => {
    history.push("/")
  }

  export const goToPostPage = (history, id) => {
    history.push("/pagina-de-posts/${id}")
  }
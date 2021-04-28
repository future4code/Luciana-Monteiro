import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom";
import FeedPage from "../pages/FeedPage/FeedPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import PostPage from "../pages/PostPage/PostPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Header from "../components/Header/Header";

const Router = () => {
  return(
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/login">
          <LoginPage />          
        </Route>
        <Route exact path="/pagina-de-cadastro">
          <SignUpPage />          
        </Route>
        <Route exact path="/">
          <FeedPage />          
        </Route>
        <Route>
          <PostPage />          
        </Route>
        <Route exact path="/pagina-de-posts/:id">
          <ErrorPage />          
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Router
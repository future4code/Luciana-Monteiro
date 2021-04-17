import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ListTripsPage from '../pages/ListTripsPage'
import LoginPage from '../pages/LoginPage'
import ApplicationFormPage from '../pages/ApplicationFormPage'
import AdminHomePage from '../pages/AdminHomePage'
import CreateTripPage from '../pages/CreateTripPage'
import TripDetailsPage from '../pages/TripDetailsPage'
import ErrorPage from '../pages/ErrorPage'

  const Router = () => {
  return(
    <BrowserRouter>
      <Switch>

        <Route exact path='/' component={ListTripsPage} />
        <Route exact path='/login' component={LoginPage} />
        <Route exact path='/trips/application' component={ApplicationFormPage} />
        <Route exact path='/admin/trips/list' component={AdminHomePage} />
        <Route exact path='/admin/trips/create' component={CreateTripPage} />
        <Route exact path='/admin/trips/:id' component={TripDetailsPage} />
        <Route component={ErrorPage} />

      </Switch>
    </BrowserRouter>
  )
}

export default Router
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ApplicationFormPage from './pages/ApplicationFormPage';
import ListTripsPage from './pages/ListTripsPage';
import LoginPage from './pages/LoginPage';
import AdminHomePage from './pages/AdminHomePage';
import TripDetailPage from './pages/TripDetailsPage';
import CreateTripPage from './pages/CreateTripPage';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <div>
    <BrowserRouter>
      <Switch>

        <Route exact path='/' component={ListTripsPage} />
        <Route exact path='/login' component={LoginPage} />
        <Route exact path='/trips/application' component={ApplicationFormPage} />
        <Route exact path='/admin/trips/list' component={AdminHomePage} />
        <Route exact path='/admin/trips/create' component={CreateTripPage} />
        <Route exact path='/admin/trips/:id' component={TripDetailPage} />
        <Route component={ErrorPage} />

      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;

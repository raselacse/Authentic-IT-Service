import React, { createContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/LandingPage/Home/Home';
import Login from '../src/components/Login/Login';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import NotFound from './components/NotFound/NotFound';
import Admin from './components/Admin/Admin/Admin';
import AddService from './components/Admin/AddService/AddService';
import ManageService from './components/Admin/ManageService/ManageService';
import User from './components/User/User/User';
import Book from './components/User/Book/Book';
import BookingList from './components/User/BookingList/BookingList';
import AddTestimonial from './components/User/AddTestimonial/AddTestimonial';
import MakeAdmin from './components/Admin/MakeAdmin/MakeAdmin';
import AdminBookingList from './components/Admin/AdminBookingList/AdminBookingList';
import MenuBar from './components/Shared/MenuBar/MenuBar';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <MenuBar/>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/home'>
            <Home />
          </Route>
          <Route path='/admin'>
            <Admin/>
          </Route>
          <Route path='/add-service'>
            <AddService/>
          </Route>
          <Route path='/manage-service'>
            <ManageService/>
          </Route>
          <Route path="/make-admin">
            <MakeAdmin/>
          </Route>
          <Route path='/book-list'>
            <AdminBookingList/>
          </Route>
          <Route path='/user/:_id'>
            <User/>
          </Route>
          <Route path='/book'>
            <Book/>
          </Route>
          <Route path='/booking-list'>
            <BookingList/>
          </Route>
          <Route path='/review'>
            <AddTestimonial/>
          </Route>
          <Route path='/login'>
            <Login/>
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;

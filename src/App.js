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
          <PrivateRoute path='/admin'>
            <Admin/>
          </PrivateRoute>
          <PrivateRoute path='/add-service'>
            <AddService/>
          </PrivateRoute>
          <PrivateRoute path='/manage-service'>
            <ManageService/>
          </PrivateRoute>
          <PrivateRoute path="/make-admin">
            <MakeAdmin/>
          </PrivateRoute>
          <PrivateRoute path='/book-list'>
            <AdminBookingList/>
          </PrivateRoute>
          <PrivateRoute path='/user/:_id'>
            <User/>
          </PrivateRoute>
          <PrivateRoute path='/book'>
            <Book/>
          </PrivateRoute>
          <PrivateRoute path='/booking-list'>
            <BookingList/>
          </PrivateRoute>
          <PrivateRoute path='/review'>
            <AddTestimonial/>
          </PrivateRoute>
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

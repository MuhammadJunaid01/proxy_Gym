import logo from "./logo.svg";
import "./App.css";
import Navigation from "./pages/Namvigation/Navigation";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Routes,
} from "react-router-dom";

import MainBanner from "./pages/mainbanner/MainBanner";
import Home from "./pages/home/Home";
import Booking from "./pages/booking/Booking";
import Login from "./pages/login/Login";
import AuthProvider from "./hooks/AuthContext/AuthProvider";
import About from "./pages/about/About";
import PrivateRoute from "./privateRoute/PrivateRoute";

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Navigation></Navigation>
          <MainBanner></MainBanner>
          <Switch>
            <Route exact path="/boking/:id">
              <Booking></Booking>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/about">
              <About></About>
            </PrivateRoute>

            <Route exact path="/">
              <Home></Home>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

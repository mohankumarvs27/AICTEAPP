import React from "react";
import Signup from "./Components/Authentication/Signup";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Login from "./Components/Authentication/Login";
import PrivateRoute from "./Components/Authentication/PrivateRoute";
import ForgotPassword from "./Components/Authentication/ForgotPassword";
import UpdateProfile from "./Components/Authentication/UpdateProfile";
import Home from "./Pages/Home";
import About from "./Pages/Menu/About/About";
import Newsroom from "./Pages/Menu/Newsroom/Newsroom";
import Bureaus from "./Pages/Menu/Bureaus/Bureaus";
import Initiatives from "./Pages/Menu/Initiatives/Initiatives";
import Schemes from "./Pages/Menu/Schemes/Schemes";
import Education from "./Pages/Menu/Education/Education";
import Opportunities from "./Pages/Menu/Opportunities/Opportunities";
import Bulletins from "./Pages/Menu/Bulletins/Bulletins";
import Statistics from "./Pages/Menu/Statistics/Statistics";
//import Nav from "./Layout/Navbar/Index"
import Navbar from "./Layout/Appbar/Navbar";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <AuthProvider>
          <Switch>
            <PrivateRoute exact path="/" component={Dashboard} />
            <PrivateRoute path="/update-profile" component={UpdateProfile} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/forgot-password" component={ForgotPassword} />
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/news" component={Newsroom} />
            <Route path="/bureaus" component={Bureaus} />
            <Route path="/initiatives" component={Initiatives} />
            <Route path="/schemes" component={Schemes} />
            <Route path="/education" component={Education} />
            <Route path="/opportunities" component={Opportunities} />
            <Route path="/bulletins" component={Bulletins} />
            <Route path="/statistics" component={Statistics} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;

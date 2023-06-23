// import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomeScreens from "./Screens/HomeScreens";
import PrivatyPolicyScreens from "./Screens/PrivatyPolicyScreens";
import SigninScreen from "./Screens/SigninScreen";
import TermsScreen from "./Screens/TermsScreen";
import StudentScreen from "./Screens/StudentScreen";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomeScreens} />
          <Route path="/login" component={SigninScreen}></Route>
          <Route path="/privacy" component={PrivatyPolicyScreens}></Route>
          <Route path="/term" component={TermsScreen}></Route>
          <Route path="/student" component={StudentScreen}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

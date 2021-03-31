import React from "react";
import "./App.css";
import Layout from "./components/Layout/layout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GateKeeper from "./components/GateKeeper/GateKeeper";
import { VisoterRecord } from "./components/GateKeeper/VisoterRecord/VisoterRecord";
import {Dashboard} from "./components/Dashboard/Dashboard";
import Supervisor from "./components/Supervisor/Supervisor";
import Administrator from "./components/Admin/Admin";
import Reports from "./components/Reports/Reports";

function App() {
  return (
    <div className="app">
      
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/AddVisitorsInfo" component={GateKeeper} />
            <Route exact path="/gatekeeper" component={VisoterRecord} />
            <Route exact path="/supervisor" component={Supervisor} />
            <Route exact path="/admin" component={Administrator} />
            <Route exact path="/reports" component={Reports} />
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;

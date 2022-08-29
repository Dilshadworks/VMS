import React from "react";
import "./App.css";
import Layout from "./components/Layout/layout";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import GateKeeper from "./components/GateKeeper/GateKeeper";
import { VisoterRecord } from "./components/GateKeeper/VisoterRecord/VisoterRecord";
import { Dashboard } from "./components/Dashboard/Dashboard";
import Supervisor from "./components/Supervisor/Supervisor";
import Administrator from "./components/Admin/Admin";
import Reports from "./components/Reports/Reports";
import Auth from "./components/Auth/Auth";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/auth" component={Auth} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/AddVisitorsInfo" component={GateKeeper} />
            <Route path="/gatekeeper" component={VisoterRecord} />
            <Route path="/supervisor" component={Supervisor} />
            <Route path="/admin" component={Administrator} />
            <Route path="/reports" component={Reports} />
            {/* <Redirect to={{ pathname: "/auth" }} /> */}
          </Switch>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;

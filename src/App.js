import React from "react";
import "./App.css";
import Layout from "./components/Layout/layout";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import GateKeeper from "./components/GateKeeper/GateKeeper";
import { VisoterRecord } from "./components/GateKeeper/VisoterRecord/VisoterRecord";
import { Dashboard } from "./components/Dashboard/Dashboard";
import Supervisor from "./components/Supervisor/Supervisor";
import Administrator from "./components/Admin/Admin";
import Reports from "./components/Reports/Reports";
// import { Counter } from "./features/counter/Counter";

function App() {
  return (
    <div className="app">
      {/* <Counter /> */}
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/AddVisitorsInfo" component={GateKeeper} />
            <Route exact path="/gatekeeper" component={VisoterRecord} />
            <Route exact path="/supervisor" component={Supervisor} />
            <Route exact path="/admin" component={Administrator} />
            <Route exact path="/reports" component={Reports} />
            <Redirect to={{ pathname: "/dashboard" }} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;

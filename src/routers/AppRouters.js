import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePages from "../pages/HomePages";
import LoginPage from "../pages/LoginPage";
import IndustryPage from "../pages/IndustryPage";
import CompanyPage from "../pages/CompanyPage";
import JobsPage from "../pages/JobsPage";
import ContactPage from "../pages/ContactPage";
import NotFoundPage from "../pages/NotFoundPage";
import WorksPage from "../pages/WorksPage";
import CreateWork from "../pages/CreateWork";
import Header from "../Header";
import UpdateWorkPage from "../pages/UpdateWorkPage";

export default function appRouters() {
  const userToken = localStorage.getItem("token");

  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/Industry" component={IndustryPage} />
        {!userToken && <Route path="/login" component={LoginPage} />}
        <Route path="/Company" component={CompanyPage} />
        <Route path="/Jobs" component={JobsPage} />
        <Route path="/Contact" component={ContactPage} />
        {userToken && (
          <Route path="/Updateworks/:id" component={UpdateWorkPage} />
        )}
        {userToken && <Route path="/works" component={WorksPage} />}
        <Route path="/CreateWorks" component={CreateWork} />
        <Route exact path="/" component={HomePages} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
}

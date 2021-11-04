import './App.css';
import CreatePet from './views/CreatePet';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ListPets from './views/ListPets';
import DetailsPet from './views/DetailsPet';
import EditPet from './views/EditPet';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
              <ListPets></ListPets>
          </Route>

          <Route exact path="/pets/new">
            <CreatePet></CreatePet>
          </Route>

          <Route exact path="/pets/:id">
            <DetailsPet></DetailsPet>
          </Route>

          <Route exact path="/pets/:id/edit">
            <EditPet></EditPet>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;

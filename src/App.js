import './App.css';
import {RecipeForm} from "./components/RecipeForm";
import {CardList} from "./components/CardList";
import { useSelector } from "react-redux";
import { Instructions } from "./components/Instructions";


function App() {
  const popup = useSelector(state => state.popup);

  return (
    <div className="App" >
      {popup.show ? <Instructions instructions={popup.data} /> : null}
      <RecipeForm />
      <CardList />
    </div>
  );
}

export default App;


// TODO: 
// Make detailed recipe view component
// Do proper styling
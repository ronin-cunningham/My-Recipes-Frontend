import './App.css';
import {RecipeForm} from "./components/RecipeForm";
import {CardList} from "./components/CardList";


function App() {
  return (
    <div className="App" >
      <RecipeForm />
      <CardList />
    </div>
  );
}

export default App;


// TODO: 
// Make detailed recipe view component
// Do proper styling
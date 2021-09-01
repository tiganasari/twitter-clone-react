import './App.css';
import Nav from './components/Nav';
import Tweet from './components/Tweet';


function App() {
  //write javascript here
  //props allow to pass data between components


  return (
    <div className="App">
     <h1>Hello Twitter</h1> 
      <div className="home">
      <Nav />
      <Tweet />
      </div>
   
    </div>
  );
}

export default App;

import './App.css';
import Header from './components/Header.js';
import Nav from './components/Nav.js';
import data from './db.json';
import Article from './components/Article.js';

function App(props) 
{
  let db = data.people;
  return (
    <div className="App">
      <Header />
      <Nav navigation={props.navigation}/>
      <Article db={db} />
    </div>
  );
}

export default App;

import './App.css';
import MentorsPage from './Mentors/MentorsPage'
import bakery from './assets/App/bakery.png'
import grass from './assets/App/grass.png'
import hackillinois from './assets/App/hackillinois.png'
import tree from './assets/App/tree.png'

function App() {

  return (
    <div className="App" id="app-css">
      <header className="header" id="top-banner" role="banner">
        <img className="img_hackillinois" src={hackillinois} alt="HackIllinois Logo"/>
      </header>
      <img className="img_grass" src={grass} alt="Grass in Background"/>
      <img className="img_bakery" src={bakery} alt="Bakery Shop in Background"/>
      <img className="img_tree" src={tree} alt="Apple Tree in Background"/>
      <MentorsPage />
    </div>
  );
}

export default App;

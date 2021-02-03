import './App.css';
import './css/main.css';
import Table from './Table';

function App() {
  const characters = [
    {
      name: 'Charlie Hieu',
      job: 'Janitor',
    },
    {
      name: 'Mac',
      job: 'Bouncer',
    },
    {
      name: 'Dee',
      job: 'Aspring actress',
    },
    {
      name: 'Dennis',
      job: 'Bartender',
    }
  ]

  return (
    <div className="App">
      <h1 className="site-heading">Hello, React!</h1>
      <div className="container">
        <Table characterData={characters} />
      </div>
    </div>
  );
}

export default App;

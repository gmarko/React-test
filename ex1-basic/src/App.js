import './App.css';
import Chats from './Chats';
import Hotels from './Hotels';
import Netflix from './Netflix/Netflix';
import Spoiler from './Spoiler';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Netflix />
        <Hotels />
        <Chats />
        <p>
          Este es un texto con spoilers. Si no quieres que te arruinen el final, no hagas click.
          La peor parte es cuando <Spoiler>Snape mata a Dumbledore</Spoiler>.
          Aunque también me impactó mucho cuando <Spoiler>Neo es el elegido</Spoiler>.
        </p>
      </header>
    </div>
  );
}

export default App;

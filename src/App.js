import {Col} from 'antd'
import Searcher from './components/Searcher';
import './App.css';
import PokemonList from './components/PokemonList';

function App() {
  return (
    <div className="App">
      <Col span={8} offset={8}>
        <Searcher/>
        
        <PokemonList/>
      </Col>
    </div>
  );
}

export default App;

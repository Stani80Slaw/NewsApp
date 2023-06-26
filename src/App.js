import Conteiner from 'react-bootstrap/Container';
import './App.scss';
import Header from './Header';
import Body from './Body';
import ErrorModal from './ErrorModal';

function App() {
  return (
    <Conteiner >
      <Header/>
      <Body/>
      <ErrorModal/>
    </Conteiner>
  );
}

export default App;

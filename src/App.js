import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer.js';

const App = () => {
  return (
    <>
        <NavBar />
        <ItemListContainer greeting='Hola, soy Ramiro Trabanco y estoy aprendiendo React.js'/>
    </>
  );
}

export default App;

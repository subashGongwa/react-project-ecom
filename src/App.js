
import './App.css';
import Login from './pages/Login';
import Header from './Compoments/Header';
import Footer from './Compoments/Footer';
import {Container} from 'react-bootstrap';

function App() {
  return (
    <div className="App">

      <Header />
      <main>
      <Container>
        <h1>this is heading</h1>
      </Container>
      </main>
      <Footer />
    
    </div>
  );
}

export default App;

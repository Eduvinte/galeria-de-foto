import './App.css';
import Cardi from './components/Cardi'
import Header from './components/Header'
import Footer from './components/Footer'
import foto1 from './img/foto.jpg'
import foto2 from './img/foto2.jpg'
import foto3 from './img/foto3.jpg'
import foto4 from './img/foto4.jpg'


function App() {
  return (
    <div className="App">
      <Header titulo='Galeria de imagenes con React'  />
          <Cardi 
            src={foto1}
            titulo='Regalo de navidad'
            desc='Un regalo de navidad ilustrando un card con React'
          />
            <Cardi 
            src={foto2}
            titulo='Regalo de navidad'
            desc='Un regalo de navidad ilustrando un card con React'
          />
            <Cardi 
            src={foto3}
            titulo='Regalo de navidad'
            desc='Un regalo de navidad ilustrando un card con React'
          />
            <Cardi 
            src={foto4}
            titulo='Regalo de navidad'
            desc='Un regalo de navidad ilustrando un card con React'
          />
          <Footer 
            desc='Galeria de fotos Desafio Latam @ 2022'
          />
    </div>
  );
}

export default App;

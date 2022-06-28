
import './App.css';
import Card from './components/Card';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const containerStyle={display:'flex',justifyContent:'flex-end'};
  return (
    <>
     <Navbar></Navbar>
    {/* <div className="container"> */}
<div style={containerStyle}>

<Card logo="./assets/cocacola_logo.png"
      nombre="coca cola"
      descripcion="Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, beatae magnam!"
      img="./assets/cocacola.png"
      color="red"
/>
<Card logo="./assets/sprite_logo.png"
      nombre="sprite"
      descripcion="Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, beatae magnam!"
      img="./assets/sprite.png"
      color="green"
/>


    </div>

    <Footer></Footer>
    </>
    
  );
}

export default App;

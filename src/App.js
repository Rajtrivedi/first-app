 
import './Appa.css';
import ButtonForm from './components/ButtonForm';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
 
function App() {
 
  return (
  <>
   <Navbar title="New Search" About="About Us"/>
 {/* <Navbar title="New Search" About="About Us"/> */}
<div className="container my-3"> 
<TextForm heading="Enter Your Text" placeholder="Enter Content"/>
</div>
{/* <ButtonForm Name="Submit"/> */}
</>
  );
  
}

export default App;

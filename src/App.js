
// import './App.css';

// import Heading from "./Heading";

// import img9 from './img9.jpg';

// import Card from "./Card";

// import Btn from "./Btn";

// import ModeToggler from './ModeToggler';

// import React from 'react';
// import Fruits from './Fruits';
// import FruitsCounter from './FruitsCounter';

// import Homepage from './components/Homepage';
// import About from './components/About';
// import Contact from './components/Contact'

// import { Routes, Route,Link } from 'react-router-dom';

// import ReactPlayer from 'react-player';

// function Logo(props){
//     const userPic = <img src ={img9} />;
//     return userPic;
// }

// function App() {
    // function handleClick() {
    //     let randomNum = Math.floor(Math.random() * 3) + 1
    //     console.log(randomNum)
    //     let userInput = prompt('type a number');
    //     alert(`Computer number: ${randomNum}, Your guess: ${userInput}`)
    //   }
      
    //   const [fruits] = React.useState([
    //     {fruitName: 'apple', id: 1},
    //     {fruitName: 'apple', id: 2},
    //     {fruitName: 'plum', id: 3},
    //   ]);
       

    //   const vidUrl = "https://youtube.com/shorts/gv1KhWphLEc";

    //   const bird1 = new Audio(
    //     "https://upload.wikimedia.org/wikipedia/commons/9/9b/Hydroprogne_caspia_-_Caspian_Tern_XC432679.mp3"
    //   );
    
    //   const bird2 = new Audio(
    //     "https://upload.wikimedia.org/wikipedia/commons/b/b5/Hydroprogne_caspia_-_Caspian_Tern_XC432881.mp3"
    //   );
    
    //   function toggle1() {
    //     if (bird1.paused) {
    //       bird1.play();
    //     } else {
    //       bird1.pause();
    //     }
    //   };
    
    //   function toggle2() {
    //     if (bird2.paused) {
    //       bird2.play();
    //     } else {
    //       bird2.pause();
    //     }
    //   };
    
    // return (
    //     <div className="App">

    //       <nav>
    //   <Link to="/" className="nav-item">Homepage</Link>
    //   <Link to="/about" className="nav-item">About Little Lemon</Link>
    //   <Link to="/contact" className="nav-item">Contact</Link>	  
    // </nav>
    //   <Routes> 
    //     <Route path="/" element={<Homepage />}></Route>
    //     <Route path="/about" element={<About />}></Route>
    //     <Route path="/contact" element={<Contact />}></Route>
    //   </Routes>



    //         <Heading firstName="Nikhil" />
    //         <Heading firstName = "Boobies" />

    //         <Logo/>
            
    //         <h1>Task: Add three Card elements</h1>
    //         <Card h2 ="First Card's h2"  h3="First card's h3" />
    //         <Card h2="Second Card's h2" h3="Second card's h3" />
    //         <Card h2 ="Third Card's h2"  h3="Third card's h3" />

    //         <Btn />

    //         <ModeToggler />

    //         <div>
    //             <h1>Task: Add a button and handle a click event</h1>
    //                 <button onClick={handleClick}>
    //                     Guess the number between 1 and 3.
    //                 </button>
    //          </div>
             
    //          <h1>Where should the state go?</h1>
    //           <Fruits fruits = {fruits}/>
    //           <FruitsCounter fruits ={fruits}/>

    //           <h1> React Player example </h1>
    //           <ReactPlayer 
    //           url={vidUrl}
    //           playing={false}
    //           volume={0.5} 
    //           />

    //           <div>
    //             <p><b> SOUNDS BUTTON </b></p>
    //               <button onClick={toggle1}>Caspian Tern 1</button>
    //               <button onClick={toggle2}>Caspian Tern 2</button>
    //           </div>
               
               
      //   </div>
      // );
     
// };

// export default App;


import {
  useState,
  useRef
} from "react"; 
import './App.css'

function App() { 
  const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  const [result, setResult] = useState(0); 
 
  function plus(e) { 
    e.preventDefault(); 
    setResult((result) => result + Number(inputRef.current.value)); 
  }; 
 
  function minus(e) { 
  	e.preventDefault(); 
    setResult((result) => result - Number(inputRef.current.value)); 
  };
 
  function times(e) { 
    e.preventDefault(); 
    setResult((result) => result * Number(inputRef.current.value));  
  }; 
 
  function divide(e) { 
    e.preventDefault(); 
    setResult((result) => result / Number(inputRef.current.value));  
  };
 
  function resetInput(e) { 
    e.preventDefault(); 
  inputRef.current.value = "";  
  }; 
 
  function resetResult(e) { 
  	e.preventDefault(); 
  setResult(0); 
  }; 
 
  return ( 
    <div className="App"> 
      <div> 
        <h1>Simplest Working Calculator</h1> 
      </div> 
      <form> 
        <p ref={resultRef}> 
          {result} 
        </p> 
        <input
          pattern="[0-9]" 
          ref={inputRef} 
          type="number" 
          placeholder="Type a number" 
        /> 
        <button onClick={plus}>add</button> 
        <button onClick={minus}>subtract</button>
        <button onClick={times}>multiply</button>
        <button onClick={divide}>divide</button>
        <button onClick={resetInput}>clear input</button>
        <button onClick={resetResult}>reset result</button>
        
      </form> 
    </div> 
  ); 
};
 
export default App; 


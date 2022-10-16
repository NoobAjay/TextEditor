import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React , { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
  
} from "react-router-dom";

// import {Route ,Routes} from 'react-router-dom';


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert=(message ,type)=>{
    setAlert({
        msg : message,
        type : type

    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () =>{
    if(mode === 'light'){
    setMode ('dark');
    document.body.style.backgroundColor='grey';
    showAlert("Dark mode has been enabled ", "success");
    document.title='TextUtil - Dark Mode';
    // setInterval(()=>{
    //   document.title = 'TextUtil is Amazing Mode';
    // },2000);
    // setInterval(()=>{
    //   document.title = ' Install TextUtil Now';
    // },1500);

  }
  else{
    setMode ('light');
    document.body.style.backgroundColor='white';
    showAlert("Light mode has been enabled ", "success");
    document.title='TextUtil - Light Mode';
  }
}
 return (
    <>
{/* 
<Navbar title="Textutils" aboutText="About TextUtils"/> */}
{/* <Navbar /> */}

<Router>

<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-3">
<Routes> 
  <Route element={ <About mode={mode} />} path="/About"/>   
            <Route element={<TextForm heading="Try TextUtils - Word Counter, Character Counter, Remove Extra spaces " showAlert={showAlert} mode={mode}/>} path="/"/>
        </Routes>
        </div>
        
        </Router>
    </>
  );
}

export default App;

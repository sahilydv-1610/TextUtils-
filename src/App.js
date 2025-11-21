import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light'); 
  const [alert, setAlert] = useState(null); 

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  // THEME HANDLER FOR RADIO BUTTONS
  const setTheme = (newMode) => {
    setMode(newMode);

    if (newMode === 'light') {
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light Mode has been enabled", "success");
    }

    if (newMode === 'dark') {
      document.body.style.backgroundColor = 'rgba(4, 39, 73, 1)';
      document.body.style.color = 'white';
      showAlert("Dark Mode has been enabled", "success");
    }

    if (newMode === 'red') {
      document.body.style.backgroundColor = '#490000ff'; 
      document.body.style.color = 'white';
      showAlert("Red Mode has been enabled", "success");
    }

    if (newMode === 'blue'){
      document.body.style.backgroundColor = '#7664dfff';
      document.body.style.color = 'yellow';
      showAlert("Blue Mode has been enabled", "success");
    }
  };

  return (
    <>
      <Navbar 
        title="TextUtils" 
        aboutText="About" 
        mode={mode} 
        setTheme={setTheme}
      />
      <hr/>

      <Alert alert={alert} />

      <div className="container my-3">
        <TextForm 
          showAlert={showAlert} 
          heading="Enter the text to analyze" 
          mode={mode} 
        />
      </div>
    </>
  );
}

export default App;

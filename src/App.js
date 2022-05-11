import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {useState} from 'react';

function App(props) {
  const [mode, setMode] = useState('light');
  const [btnText, setBtnText] = useState('Enable Dark Mode');
  const [alert,setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const toggleMode = () =>{
    if(mode==='light'){
      setMode('dark');
      setBtnText('Enable Light Mode');
      document.body.style.backgroundColor ='black';
      document.body.style.color ='#e6e6e6';
      showAlert('Dark Mode has been enabled', 'success')
    }else{
      setMode('light');
      setBtnText('Enable Dark Mode');
      document.body.style.backgroundColor ='white';
      document.body.style.color ='#262626';
      showAlert('Light Mode has been enabled', 'success')
    }
  }

  const commonProps = {title: 'AnyText', mode:mode, btnText:btnText, toggleMode:toggleMode};
  return (
  <>
    {/**Navigation component contains commonProps object passed as a prop where it contains 
     * name of the application, what mode(dark/light) we have enabled on the application and a function to change the 
     * mode of the application */}
    <Navbar commonProps ={commonProps}/>
    <Alert alert={alert}/>
    <div className="container">
      <TextForm showAlert={showAlert} heading="Enter your text below"/>
    </div> 

  </>
  );
}

export default App;

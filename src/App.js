import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
const commonProps = {title: 'AnyText'};
function App(props) {
  return (
  <>
    {/**Navigation component contains nothing but the name of the application, sent object as the prop */}
    <Navbar commonProps =  {commonProps}/>
    <div className="container">
      <TextForm  heading="Enter your text below"/>
    </div>  
  </>
  );
}

export default App;

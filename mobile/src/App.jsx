import logo from './logo.svg';
import './App.css';

function App() {
  const mobile=["Android","Blackberry","iPhone","Windows Phone"]
  const manufacture=["samsung","HTC","Micromax","Apple"]
  return (
    <div className="App">
      
      <b>MOBILE OPERATING SYSTEM</b>
      <ul>
        {mobile.map((el)=>{
          return <li>
            {el}
          </li>
        })}
      </ul>

      <div className="App">
     <b>  MOBILE Manufactures</b>
      <ul>
        { manufacture.map((ele)=>{
          return <li>
            {ele}
          </li>
        })}
      </ul>
    
      </div>
    </div>
  );
}

export default App;

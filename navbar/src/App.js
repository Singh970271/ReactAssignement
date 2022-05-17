import './App.css';

function App() {
  const links= ["services", "project", "About"]
  return (
    <div className="App">
    
      <h3>LOGOBAKERY</h3>
       <div className="middle">
          {
            links.map((e)=>{
              return <Links link={e}/>
            })
          }
       </div>
       <button className="btn">contacts</button>
      
    </div>
  );
}
function Links(props){
  return <p className="links">{props.link}</p>
}

export default App;

import './App.css';

function Helloworld(props) {
  return (
    <div id='hello'>
      <h3>{props.subtitle}</h3>
      {props.mytext}
    </div>
  )
}

function App() {
  return (
    <div>
      This is my component: 
      <Helloworld mytext="Hola Eli" subtitle="Lorem ipsum" /> 
      <Helloworld mytext="hola mundo" subtitle="component two"/> 
      <Helloworld mytext="hello!" subtitle="component three" /> 
    </div>
  );
}

export default App;

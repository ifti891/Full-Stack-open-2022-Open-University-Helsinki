import logo from './logo.svg';
import './App.css';


function App() {

const name = 'Xijinping'
const age = 90;
  return (
    <div className="App">
      <h1>
        Greetings
      </h1>
      <h3><Hello name={name} age={age-30}/></h3>
      <h4><Hello name="Saya" age={age - 70}/></h4>
      <h5><Hello name="Orachimaru" age={age* 2.5}/></h5>
      <h6><Hello name="Hashirama" age={age}/></h6>

        {/* <br /> */}
        {/* <Figth /> */}
        {/* <Hello name="Fighter one" /> */}
        {/* <Figth name="fighter two" /> */}
    </div>
  );
}


const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

// const Figth = () => {
//   return (
//     <div>
//       <h3>
//         Fight me i will win 100%
//       </h3>
//     </div>
//   )
// }


export default App;

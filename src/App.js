import './App.css';
import logo from './messlogo.jpg';


function App() {
  return (
    <div className="App">
      <img src={logo} className="logo"/>
      <h1 className="MessBuddy">Mess Buddy</h1>
      

      <form className="InputContainer">
        <input className="InputField" placeholder='First Name'></input>
        <input className="InputField" placeholder='Last Name'></input>
        <input className="InputField" placeholder='Your Email'></input>
        <input type ="password" className="InputField" placeholder='Password'></input>
        <button className="RegisterNow">Register Now</button>
      </form>
      <p className = "Message">Already have an account?<span className="login">Log in</span></p>
    </div>
  );
}

export default App;

import logo from "./logo.jpg";
import "./App.css";
import { getFullYear, getFooterCopy } from "./utils";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <h1>School dashboard</h1>
        </div>
      </header>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <body className="App-body">
        <h>Login to access the full dashboard</h>
        <br></br>
        <label for="email">Enter your email:</label>
        <input type="email" id="email" name="email"></input>
        <label for="pwd">Password:</label>
        <input type="password" id="pwd" name="pwd"></input>

        <button type="button">OK</button>
      </body>
      <footer className="App-footer">
        <h>
          {" "}
          Copyright{getFullYear()} - {getFooterCopy()}
        </h>
      </footer>
    </div>
  );
}

export default App;

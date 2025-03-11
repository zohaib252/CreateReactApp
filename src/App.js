import React from "react";
import "./App.css";
import "./Header";
import "./Footer";


function App() {
  return (
    <div>
      <h1>Hello React!!!!!!!!</h1>
      {Footer()}
    </div>
  );
}

function Footer() {
  return React.createElement("footer", null, "we are currently open!");
}

export default App;
export default Footer;


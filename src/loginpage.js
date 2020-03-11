import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'


class loginpage extends React.Component {
  changepage = () => {
    var emails = document.getElementById("email").value;
    console.log(emails)
    var passwords = document.getElementById("password").value;
    console.log(passwords)
      if (emails === " " || passwords === " ") {
      alert(" enter data again")
    }
    else {
      if ((emails === "harsh82339@gmail.com" || passwords === "12345"))
        this.props.history.push("/home");
      else
        alert("invalid email or password")
    }
  };
   render() {
    return (
      <div className="App">
        <div className="loginform">
          <h3>LOGIN</h3><label>
            EMAIL:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" placeholder="enter you username" id="email" />
          </label>
          <br></br>
          <label>
            PASSWORD:<input type="password" placeholder="enter password" id="password" />
          </label>
          <br></br>
          <input type="submit" value="login" onClick={this.changepage}></input>
        </div>
      </div>
    )
  }
}

export default loginpage;

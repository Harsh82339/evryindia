import React from 'react';
import { Route } from 'react-router-dom';
import loginpage from './loginpage';
import home from './homepage';


const App = () => <div>
  <Route path="/" exact component={loginpage} />
  <Route path="/home" exact component={home} />

</div>;


export default App;
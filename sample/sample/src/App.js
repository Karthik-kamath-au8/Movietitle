import React from "react";
import BlogPosts from './component/BlogPosts';
import SignIn from './component/auth/SignIn';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Register from './component/auth/Register';



function  App (){
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path="/" component={BlogPosts}/>

        <Route exact path="/register" component={Register}/>

        <Route exact path="/signin" component={SignIn}/>

      </Switch>
    </div>
    </BrowserRouter>
    
  );
}


export default App;

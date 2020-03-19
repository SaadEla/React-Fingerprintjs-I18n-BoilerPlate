
import React, {Component } from 'react';
import  Fingerprint2 from 'fingerprintjs2';
import { BrowserRouter,Route, Switch } from 'react-router-dom';
import internationalization from './internationalization';
import fingerprint from './fingerprint';


class App extends Component  {
state = {
  device : ''
}
  render(){
    

    return (
      <BrowserRouter>
        <div className="App">
          <a href='/fingerprint'><li >fingerprint</li></a>
          <a href='/i18n'><li >i18n</li></a>
          <br/><br/><br/><br/>
          <Switch>
            <Route exact path='/fingerprint' component={fingerprint}/> 
            <Route exact path='/i18n' component={internationalization}/> 
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

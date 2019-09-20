import React, { Component } from 'react';
// import Home from './container/home'
import { Route, Switch } from 'react-router-dom'
import Cart from './container/cart'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          {/* <Route path='/' exact component={Home} /> */}
          {/* <Route path='/detail-product' component={DetailProduct} /> */}
          <Route path='/cart' component={Cart} />
        </Switch>
      </div>
    );
  }
}


export default App;

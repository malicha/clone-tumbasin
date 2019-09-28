import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Cart from './container/cart'
import DetailProduct from './container/detail-product'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path='/detail-product' component={DetailProduct} />
          <Route path='/cart' component={Cart} />
        </Switch>
      </div>
    );
  }
}


export default App;

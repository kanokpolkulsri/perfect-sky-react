import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Fd2 from './Fd2'
import Fd2Cn from './Fd2Cn'

class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <Switch>

          <Route exact path='/fd' component={Fd2} />
          <Route exact path='/fdcn' component={Fd2Cn} />
          
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App

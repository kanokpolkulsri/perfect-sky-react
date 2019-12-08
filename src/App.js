import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Fd2 from './Fd2'
import Fd2Cn from './Fd2Cn'

class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <Switch>
            <Route path='/' component={Fd2} exact />
            {/* <Route path='/fd2' component={Fd2} exact /> */}
            {/* <Route path='/fd2/th' component={Fd2} exact /> */}
            <Route path='/cn' component={Fd2Cn} exact />
          </Switch>
      </BrowserRouter>
    )
  }
}

export default App

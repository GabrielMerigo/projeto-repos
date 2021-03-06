import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Main from '../src/pages/Main/Main'
import Repositorio from '../src/pages/Repositorio/Repositorio'

export default function Routes(){
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/Repositorio/:repositorio" component={Repositorio} />
      </Switch>
    </BrowserRouter>
  )
}
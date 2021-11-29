import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ItemsIndex from './ItemsIndex'

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
				<Route exact path="/" component={ItemsIndex} />
			</Switch>
    </BrowserRouter>
  )
}

export default App

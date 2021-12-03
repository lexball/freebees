import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ItemsIndex from './ItemsIndex'
import ItemShow from './ItemShow'
import ItemForm from './ItemForm'

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
				<Route exact path="/" component={ItemsIndex} />
        <Route exact path="/items/new" component={ItemForm} />
        <Route exact path="/items/:id" component={ItemShow} />
			</Switch>
    </BrowserRouter>
  )
}

export default App

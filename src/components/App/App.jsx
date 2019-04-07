import React from 'react'
import StartScreen from '../StartScreen'
import DraftScreen from '../DraftScreen'
import history from '../../data/history'
import { Router, Switch, Route } from 'react-router-dom'
import '../../gulp/dist/main.css'

const App = () => {
  return (

    	<Router history={history}>
      <React.Fragment>
        <Switch>
          <Route exact path='/' component={StartScreen} />
          <Route exact path='/draft-screen' component={DraftScreen} />
        </Switch>
      </React.Fragment>
    </Router>

  )
}

export default App

import './App.css'
import {Route, Switch} from 'react-router-dom'

import Home from './components/Home'

import TeamMatches from './components/TeamMatches'

const App = () => (
  <div>
    <switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/team-matches/:id" component={TeamMatches} />
    </switch>
  </div>
)

export default App

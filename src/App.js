import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.scss'
import Home from './pages/js/Home'
import Login from './pages/js/Login'
import Register from './pages/js/Register'


const App = () => (
    <div className="App">
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
            </Switch>
        </Router>
    </div>
)

export default App
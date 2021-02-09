import React from 'react'
import LiveScore from '../components/LiveScore'
import GridLayout from './GridLayout'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
export default function MainLayout() {
    return (
        <div>
         <Switch>
          <Route exact path="/" component={GridLayout} />
          <Route exact path="/score" component={LiveScore} />
        </Switch>
        </div>
    )
}

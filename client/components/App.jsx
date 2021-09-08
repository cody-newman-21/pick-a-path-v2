import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import StoryBoard from './StoryBoard'

function App () {
  return (
    <div className="container">
      <Route exact path="/">
        <Redirect to="/1" />
      </Route>
      <Route path="/:id" component={StoryBoard} />
    </div>
  )
}

export default App

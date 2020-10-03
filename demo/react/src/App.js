import React from 'react'
import { Button } from 'react-ui'
const App = () => (
  <div>
    <Button
      title='hello btn'
      onClick={() => console.log('clicked')}
      color='danger'
      outline
    />
  </div>
)

export default App

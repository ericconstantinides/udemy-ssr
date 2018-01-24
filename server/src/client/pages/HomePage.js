import React from 'react'

const HomePage = () => {
  return (
    <div>
      <div>
        I'm the HomePage Component Yay
      </div>
      <button onClick={() => console.log('hi there')}>Press me</button>
    </div>
  )
}

export default {
  component: HomePage
}

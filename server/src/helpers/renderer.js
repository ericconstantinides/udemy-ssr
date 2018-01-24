import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
// renderRoutes takes an array of routes and turns it into JSX
import { renderRoutes } from 'react-router-config'
import Routes from '../client/Routes'

export default (req, store) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        <div>{renderRoutes(Routes)}</div>
      </StaticRouter>
    </Provider>
  )
  // this is where all the magic begins:
  return `
    <html>
      <head></head>
      <body>
        <div id='root'>${content}</div>
        <script src="bundle.js"></script>
      </body>
    </html>
  `
}

import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
// renderRoutes takes an array of routes and turns it into JSX
import { renderRoutes } from 'react-router-config'
// Serialize JavaScript to a superset of JSON that includes regular expressions, dates and functions. Also, kills naughty <script> tags injections (XSS)
import serialize from 'serialize-javascript'
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
        <script>
          // share the love with the client:
          window.INITIAL_STATE = ${serialize(store.getState())}
        </script>
        <script src="bundle.js"></script>
      </body>
    </html>
  `
}

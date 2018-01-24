import 'babel-polyfill'
import express from 'express'
import { matchRoutes } from 'react-router-config'
import Routes from './client/Routes'
import renderer from './helpers/renderer'
import createStore from './helpers/createStore'

const app = express()

// Make the public directory available for your browser to fully access as root:
app.use(express.static('public'))

// make the function an async function
app.get('*', async (req, res) => {
  const store = createStore()
  // logic to init and load data into store:

  const promises = matchRoutes(Routes, req.path).map(({ route }) => {
    // load all the loadData functions we have (all return promises):
    return route.loadData ? route.loadData(store) : null
  })

  // await for all the promises to finish before rendering:
  await Promise.all(promises)
  res.send(renderer(req, store))
})

app.listen(3000, () => {
  console.log('Listening on port 3000')
})

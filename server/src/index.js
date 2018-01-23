import express from 'express'
import renderer from './helpers/renderer'

const app = express()

// Make the public directory available for your browser to fully access as root:
app.use(express.static('public'))

app.get('*', (req, res) => {
  res.send(renderer(req))
})

app.listen(3000, () => {
  console.log('Listening on port 3000')
})

import cors from 'cors'
import express from 'express'

const app = express()
app.use(express.json())
app.use(cors())

app.listen(4000, () => {
  console.log('Server listening on port 4000')
})

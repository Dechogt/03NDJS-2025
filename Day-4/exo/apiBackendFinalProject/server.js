import express from 'express'
import mongoose from 'mongoose'
import userRoutes from './routes/router.js' 
import dotenv from 'dotenv'

dotenv.config()
const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("Connecté à MongoDB"))
.catch(err => console.error("Erreur de connexion à MongoDB:", err))

app.use('/users', userRoutes)

app.get('/', (req, res) => {
  res.send("Bienvenue sur l'API !")
})

app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`)
});
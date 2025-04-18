import express from 'express'
import mongoose from 'mongoose'
import userRoutes from './routes/router.js' 

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

mongoose.connect("mongodb://localhost:27017/authAPI")
.then(() => console.log("Connecté à MongoDB"))
.catch(err => console.error("Erreur de connexion à MongoDB:", err))

app.use('/users', userRoutes)

app.get('/', (req, res) => {
  res.send("Bienvenue sur l'API !")
})

app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`)
});
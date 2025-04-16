import mongoose from 'mongoose'

mongoose
    .connect("mongodb://localhost:27017/ma_first_db")
    .then(() => console.log("Connecté !"))
    .catch((err) => console.error("Erreur de connexion: ", 
err))
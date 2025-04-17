import mongoose from 'mongoose'

mongoose
    .connect("mongodb://localhost:27017/ma_first_db")
    .then(() => console.log("Connecté !"))
    .catch((err) => console.error("Erreur de connexion: ", 
err))

 connectDB = async () => {
   try {  
     await mongoose.connect("mongodb://localhost:27017/ma_first_db");
     console.log("MongoDB Connected");
   } catch (err) {
     console.error("MongoDB Connection Error: ", err);
     process.exit(1); // Exit process with failure
   }}
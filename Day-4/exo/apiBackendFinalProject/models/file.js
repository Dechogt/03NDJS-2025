import { Schema, model } from "mongoose"

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    match: [/^[\w.-]+@[\w-]+\.[a-zA-Z]{2,}$/, "Email non valide !"]
  },

  password: {
    type: String,
    required: true,
    minlength: [8, 'Le mot de passe doit contenir au moins 8 caractères!'],
    maxlength: [64, 'Le mot de passe doit contenir au maximum 64 caractères!'],
    match: [/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, "Le mot de passe doit inclure des lettres et des chiffres!"]
  },

  //j'avais imbriqué cette propriété dans le password
  isAdmin: {
    type: Boolean,
    default: false,
  }
})

//export default mongoose.model('User', userSchema)
export const User = model("User", userSchema)
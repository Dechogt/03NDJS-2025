import { Schema, model } from 'mongoose'

const userSchema = new Schema({
    email: {
      type: String,
      require: true,
      unique: true,
        trim: true,
        lowercase: true,
        match: [/^[\w.-]+@[\w-]+\.[a-zA-Z]{2,}$/, 'Email non valide !']
    },

    password: String,
    isAdmin: {
      type: Boolean,
      default: false,
    },
    
  });
  
  export const User = model("User", userSchema)
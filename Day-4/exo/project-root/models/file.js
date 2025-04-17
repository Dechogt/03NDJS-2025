import { Schema, model } from 'mongoose';

const userSchema = new Schema({
    email: {
      type: String,
      require: true,
      unique: true,
        trim: true,
        lowercase: true,
        validate: {
          validator: function (v) {
            return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v);
          },
          message: (props) => `${props.value} is not a valid email!`,
        },
    },

    password: String,
    isAdmin: {
      type: Boolean,
      default: false,
    },
    
  });
  
  export const User = model("User", userSchema);
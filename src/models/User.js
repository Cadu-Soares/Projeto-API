const mongoose = require ('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      index: {
        unique: true,
      }
    },
    password: {
      type: String,
      required: true,
      select: false,  //Quando buscar usuários a senha não apareça     
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  });

  const User = mongoose.model('User', userSchema);

  module.exports = User;
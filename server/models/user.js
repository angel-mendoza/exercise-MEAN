import mongoose from 'mongoose'
import uniqueValidatro from 'mongoose-unique-validator'

const UserSchema = mongoose.Schema({
  first_name:{
    type: String,
    lowercase: true,
    require: true
  },
  last_name:{
    type: String,
    lowercase: true,
    require: true
  },
  age:{
    type: Number,
    require: true,
    min: 18,
    max: 65
  },
  username:{
    type: String,
    require: true
  },
  email:{
    type: String,
    require: true,
    unique: true,
    index: true
  },
  password:{
    type: String,
    require: true
  },
  create_date: {
    type: Date,
    default: Date.now
  }
})

UserSchema.plugin(uniqueValidatro)

export default mongoose.model('User', UserSchema)

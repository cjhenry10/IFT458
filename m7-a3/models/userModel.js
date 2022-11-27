const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    fullName: {
        type: String,
        trim: true,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    passwordConfirm: {
        type: String,
        required: [true, 'Please confirm your password'],
        // validate will only work on save or creating the user
        validate:{
            validator: function(pwd){
              return pwd === this.password;
            },
            message: " the password confirmation did not match"
        }
      },
    created: {
        type: Date,
        default: Date.now
    }
});

UserSchema.methods.comparePassword = function (password) {
    return bcrypt.compareSync(password, this.password);
}

UserSchema.pre('save', async function(next){
    if(!this.isModified('password')){
      return next;
    }
    // if new and modified
    // npm install bcryptjs
    this.password = await bcrypt.hash(this.password, 12); // how intensive the CPU will be
    this.passwordConfirm = undefined; // we dop not want to store in database
    next();
  });

const User = mongoose.model('User', UserSchema);

module.exports = User;
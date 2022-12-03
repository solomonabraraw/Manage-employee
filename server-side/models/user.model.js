const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    Name: {
      type: String,
      
    },
    Date_of_birth: {
      type: String,
    
    
    }, 
    Gender: {
      type: String,
      
     
    },
    Salary: {
      type: Number,
      
     
    },    
   
  },
  {
    timestamp: true,
  }
);

const User = mongoose.model('User', userSchema);
module.exports = User;

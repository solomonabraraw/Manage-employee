const router = require('express').Router();
let User = require('../models/user.model');
var bodyParser = require('body-parser');  
// Create application/x-www-form-urlencoded parser  
var urlencodedParser = bodyParser.urlencoded({ extended: false })  
router.get('/Employee/list',(req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.post('/Employee',(req, res) => {
  const username = req.body;

  const newUser = new User(username);
  newUser
    .save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Eroor: ' + err));
});

router.delete('/Employee/inactive/:id', function(req, res, next) {
  /// Here --^
  User.findByIdAndRemove({_id: req.params.id}).then(() => res.json('User deleted!'))
  .catch(err => res.status(400).json('Eroor: ' + err));
});
router.put('/Employee/update/:id', (req, res) => {
  const Employee = req.body;
  const Employeeupdate = new User(Employee);
  User.updateOne({_id: req.params.id}, Employeeupdate).then(
    () => {
      res.status(201).json({
        message: 'Thing updated successfully!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
});
// if(!aa){
// } else{
//   aa.remove({ _id: id})
//   res.send('movie deleted')
// }
//res.status(200).json(aa)



module.exports = router;

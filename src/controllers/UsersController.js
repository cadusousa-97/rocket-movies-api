const AppError = require("../utils/AppError");

class UsersController {
  //index


  //show


  //create
  create(request, response) {
  const { name, email, phone} = request.body;

  if (!name){
    throw new AppError("Name is required!")
  }
  response.status(201).json({name, email, phone});
  }

  //update


  //delete

}

module.exports = UsersController;
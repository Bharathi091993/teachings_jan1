const User = require('../models/User');

class UserService {
    getUsers() {
      return User.find({})
      .select({name:1,__v1:-1})
      .sort({name:-1})
      .limit(2);
    }

    saveUser(formData) {
        const user = new User(formData);
        return user.save();
    }
}

module.exports = UserService;
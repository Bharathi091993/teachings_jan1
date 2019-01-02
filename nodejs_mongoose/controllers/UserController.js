const userService = require("../services/UserService");
const userServiceIns = new userService();

class User {
  constructor(router) {
    router.get("/user", this.getUsers);
    router.post("/user", this.saveUser);
    router.delete("/user/:id", this.deleteById);
  }

  async getUsers(req, res) {
    const users = await userServiceIns.getUsers();
    res.json({ users });
  }

  async saveUser(req, res) {
    const name = req.body.name;
    const user = await userServiceIns.saveUser({ name });
    res.json({user});
  }

  deleteById(req, res) {
    const id = req.params.id;
    res.json({ data: `User ID to delete  is ${id}` });
  }
}

module.exports = User;

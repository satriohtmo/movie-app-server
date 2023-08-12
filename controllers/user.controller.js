const { comparePassword } = require("../helpers/bcrypt");
const { generateToken } = require("../helpers/jwt");
const { User } = require("../models");

class UserController {
  static async register(req, res, next) {
    try {
      const { name, email, password } = req.body;
      const newUser = await User.create({
        name,
        email,
        password,
      });
      res.status(201).json({ messsage: `user with id ${newUser.id} created` });
    } catch (err) {
      next(err);
    }
  }

  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ where: { email } });
      if (!user) {
        throw { name: "Unauthorized" };
      }
      const isValidPassword = comparePassword(password, user.password);
      if (!isValidPassword) {
        throw { name: "Unauthorized" };
      }
      const payload = { id: user.id };
      const token = generateToken(payload);
      res.status(200).json({
        statusCode: 200,
        id: user.id,
        access_token: token,
        email: user.email,
      });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = UserController;

import { RequestHandler } from "express";

/**
 * Register (sign up) a user.
 *
 * @param {Request} req request
 * @param {Response} res response
 */
const register: RequestHandler = (req, res) => {
  try {
    const { username, password, confirmPassword } = req.body;

    // TODO db connection
    // TODO validation
    // TODO stateless auth (JWT)

    !(username && password && confirmPassword)
      ? res.status(401).send("Missing credentials.")
      : res
          .status(200)
          .json({ message: `${username} successfully registered` });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

/**
 * Login a user.
 *
 * @param {Request} req request
 * @param {Response} res response
 */
const login: RequestHandler = (req, res) => {
  try {
    const { username, password } = req.body;

    // TODO db connection
    // TODO validation
    // TODO stateless auth (JWT)

    !(username && password)
      ? res.status(401).send("Missing credentials.")
      : res.status(200).json({ message: `${username} successfully logged in` });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

export default { register, login };

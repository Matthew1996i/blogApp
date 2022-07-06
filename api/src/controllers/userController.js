const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const path = require('path');
const lowdb = require('lowdb');
const randomstring = require('randomstring');

const authConfig = require('../config/auth.json');

const saltRounds = 10;

function generateToken(params = {}) {
  return jwt.sign(params, authConfig.secret, {
    expiresIn: 86400,
  });
}

module.exports = {
  async createUser(req, res) {
    const { name, email, password } = req.body;
    const db = lowdb(path.resolve(__dirname, '../databases/users.json'));

    (await db).defaults({
      usuarios: [],
    }).write();

    if (
      !name
      || !email
      || !password
      || password === ' '
      || password === undefined
      || password === null) return res.status(400).json({ message: 'Fields cannot be equal to empty or undefined' });

    const checkUser = (await db).get('usuarios')
      .find({ email })
      .write();

    if (checkUser) return res.status(200).json({ message: 'There is already a user for this email' });

    const salt = bcrypt.genSaltSync(saltRounds);
    const hashPassword = bcrypt.hashSync(password, salt);

    const dataUser = {
      id: randomstring.generate(),
      name,
      email,
      password: hashPassword,
      emailverify: 0,
    };

    await db.get('usuarios').push({ ...dataUser }).write();

    return res.status(200).json({ message: 'User created!' });
  },

  async UserLogin(req, res) {
    const { email, password } = req.body;
    const db = lowdb(path.resolve(__dirname, '../databases/users.json'));

    (await db).defaults({
      usuarios: [],
    }).write();

    const checkUser = (await db).get('usuarios')
      .find({ email })
      .write();

    if (!checkUser) return res.status(200).json({ message: 'User not found' });

    const istrue = bcrypt.compareSync(password, checkUser.password);

    if (!istrue) return res.status(200).json({ message: 'Incorrect password or email' });

    const token = generateToken({
      uuid: checkUser.id,
      email: checkUser.email,
      name: checkUser.name,
    });

    return res.status(200).json({ token });
  },
};

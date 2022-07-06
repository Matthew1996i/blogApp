const lowdb = require('lowdb');
const randomstring = require('randomstring');
const path = require('path');

module.exports = {
  async index(_req, res) {
    const db = lowdb(path.resolve(__dirname, '../databases/publications.json'));
    const publications = (await db).get('publications').write();

    return res.status(200).json({
      publications,
      status: 'ok',
    });
  },

  async createPublication(req, res) {
    const { uuid, name, email } = req.data;
    const { publication } = req.body;
    const now = new Date();

    const db = lowdb(path.resolve(__dirname, '../databases/publications.json'));

    now.setHours(now.getHours() - 3);
    now.toLocaleString('pt-Br', { timeZone: 'America/Sao_Paulo' });

    const dataPublication = {
      id: randomstring.generate(),
      authorId: uuid,
      author: name,
      authorEmail: email,
      created_at: now,
      message: publication,
    };

    if (
      !dataPublication
      || !name
      || !email
      || !publication
      || publication === ' '
      || publication === undefined
      || publication === null) return res.status(400).json({ message: 'Fields cannot be equal to empty or undefined' });

    (await db).defaults({
      publications: [],
    }).write();

    (await db).get('publications').push({ ...dataPublication }).write();

    return res.status(200).json({
      message: 'Publication successful!',
      status: 'ok',
    });
  },
};

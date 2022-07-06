const { Router } = require('express');
const { publicationsController } = require('../controllers');
const authMiddleware = require('../middlewares/auth');

const publicationsRouter = Router();

publicationsRouter.post('/publication/read', authMiddleware, publicationsController.index);
publicationsRouter.post('/publication/create', authMiddleware, publicationsController.createPublication);

module.exports = publicationsRouter;

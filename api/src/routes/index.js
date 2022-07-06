const rootRouter = require('./rootRouter');
const userRouter = require('./userRouter');
const publicationsRouter = require('./publicationsRouter');

module.exports = [userRouter, rootRouter, publicationsRouter];

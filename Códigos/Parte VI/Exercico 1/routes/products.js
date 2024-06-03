const productRouter = require('express').Router();
const controller = require('../controllers/products');
const authMiddleware = require('../middlewares/auth/auth');

productRouter.get('/', authMiddleware, controller.getAll);
productRouter.get('/:id', authMiddleware, controller.getById);
productRouter.post('/', authMiddleware, controller.create);
productRouter.put('/:id', authMiddleware, controller.update);
productRouter.delete('/:id', authMiddleware, controller.delete);

module.exports = productRouter;
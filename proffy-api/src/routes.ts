import express from 'express';
import ClassController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';


const routes = express.Router();

const classController = new ClassController();
const conectionsController = new ConnectionsController();

routes.post('/classes', classController.create);
routes.get('/classes', classController.index);

routes.get('/connections', conectionsController.index);
routes.post('/connections', conectionsController.create);

export default routes;
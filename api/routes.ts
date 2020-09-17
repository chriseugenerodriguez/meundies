import { Router } from 'express';

// ROUTES
import CalculationRoutes from './routes/calculations.routes';
import errorHandler from './misc/error-handler';

// ROUTER
export const routes = Router();

// REFERENCE
routes.use('/calculations', CalculationRoutes);

// ERROR
routes.use(errorHandler);

export default routes;

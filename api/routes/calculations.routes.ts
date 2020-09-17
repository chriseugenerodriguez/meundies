import {
  Router,
  } from 'express';
  
  import CalculationsAPI from '../functions/calculations.functions';
  
  const routes = Router();
  
  routes.route('/bishop/:startNumber/:endNumber').get(CalculationsAPI.getBishops);
  
  export default routes;
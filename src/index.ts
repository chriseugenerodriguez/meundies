import express, { Request, Response, Application } from 'express';

// ROUTES
import { routes } from '../api/routes';

// UTILS
import APIPrint from '../api/utils/formatRoutes';

// VARS
const app: Application = express();
const PORT = 4000;
const AR = require('express-list-endpoints');

// ROUTER
app.use('/api', routes);

// MAIN
app.get('/', (req: Request, res: Response) => {
  // output routes on browser
  res.send(APIPrint.outPutRoutes(AR(app)));
});

// LISTEN
app.listen(PORT, () => {
	console.log(`Node server listening on http://localhost:${PORT}`);
});

module.exports = app;
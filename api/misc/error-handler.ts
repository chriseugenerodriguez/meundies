import { Request, Response, NextFunction } from 'express';



export default function errorHandler(err: any, req: Request, res: Response, next: NextFunction) {
	if (!err) {
		return res.sendStatus(500);
	}

	const error = {
		message: err.message || 'Internal Server Error.',
		stack: '',
	};

	res.status((err.response && err.response.status) || 500).json(error);
}

import { Response, Request, Router } from 'express';
import config from './config';
// import { AccountRoutes } from '../account/api/routes';

const router = Router();


// register imported routes
// router.use('/account', AccountRoutes)


router.get('/', (req: Request , res: Response) => {
    res.render('index', { site_title: config.SITE_NAME});
});

export default router;

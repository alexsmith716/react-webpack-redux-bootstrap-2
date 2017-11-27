
import { Router } from 'express';
import * as apiPageController from '../controllers/apiPageController';
const router = new Router();

console.log('>>>>>> apiRoutes > router.route getPageData <<<<<<');


router.route('/data').post(apiPageController.getPageData);

export default router;
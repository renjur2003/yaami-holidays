import { simpleAdminProtect } from '../middleware/simpleAuth.js';

router.route('/')
    .get(getBoats)
    .post(simpleAdminProtect, createBoat);

router.route('/:id')
    .get(getBoatById)
    .delete(simpleAdminProtect, deleteBoat);

export default router;

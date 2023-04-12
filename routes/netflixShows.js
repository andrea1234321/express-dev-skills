import { Router } from 'express'
import * as NetflixShowsCtrl from '../controllers/netflixShows.js'
const router = Router()

// GET localhost:3000/users
router.get('/', NetflixShowsCtrl.index)

export { router }

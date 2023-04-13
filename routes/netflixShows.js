import { Router } from 'express'
import * as netflixShowsCtrl from '../controllers/netflixShows.js'
const router = Router()

// GET localhost:3000/users
router.get('/', netflixShowsCtrl.index)

export { router }

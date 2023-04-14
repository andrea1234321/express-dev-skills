import { Router } from 'express'
import * as netflixShowsCtrl from '../controllers/netflixShows.js'
const router = Router()

// GET localhost:3000/users
router.get('/', netflixShowsCtrl.index)
router.get('/new', netflixShowsCtrl.new)
router.post('/', netflixShowsCtrl.create)
router.delete('/:netflixShowId', netflixShowsCtrl.delete)
router.get('/:netflixShowId', netflixShowsCtrl.show)

export { router }

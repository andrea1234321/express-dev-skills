import { Router } from 'express'
import {netflixShows} from '../data/netflixShows-data.js'

const router = Router()

// GET localhost:3000/users
router.get('/', function(req, res) {
  res.render('netflixShows/index', {
    netflixShows: netflixShows
  })
})

export { router }

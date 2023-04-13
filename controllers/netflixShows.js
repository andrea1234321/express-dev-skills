import { NetflixShow } from "../models/netflixShow.js"

function index(req, res) {
  NetflixShow.find({})
  .then(netflixShows=> {
    res.render('netflixShows/index', {
      netflixShows: netflixShows
    })
  })
  .catch(error=> {
    console.log(error)
    res.redirect('/')
  })
}

export{
  index
}
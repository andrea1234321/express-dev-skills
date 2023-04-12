import { netflixShows } from "../data/netflixShows-data.js"

function index(req, res) {
  res.render('netflixShows/index', {
    netflixShows: netflixShows
  })
}

export{
  index
}
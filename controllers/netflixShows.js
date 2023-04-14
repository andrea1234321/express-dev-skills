import { NetflixShow } from "../models/netflixShow.js"

function index(req, res) {
  NetflixShow.find({})
  .then(netflixShows=> {
    res.render('netflixShows/index', {
      netflixShows: netflixShows,
      time: req.time
    })
  })
  .catch(error=> {
    console.log(error)
    res.redirect('/')
  })
}

function newNetflixShow(req, res){
  res.render('netflixShows/new')
}

function create(req,res){
  // console.log(req)
  // console.log(req.body)
  NetflixShow.create(req.body)
  .then(netflixShow=> {
    res.redirect('/netflixShows')
  })
  .catch(error=> {
    console.log(error)
    res.redirect('/')
  })
}

function show(req,res){
  NetflixShow.findById(req.params.netflixShowId)
  .then(netflixShow=> {
    res.render('netflixShows/show', {
      netflixShow: netflixShow
    })
  })
  .catch(error=> {
    console.log(error)
    res.redirect('/')
  })
}

function deleteShow(req,res){
  NetflixShow.findByIdAndDelete(req.params.netflixShowId)
  .then(netflixShow=> {
    res.redirect('/netflixShows')
  })
  .catch(error=> {
    console.log(error)
    res.redirect('/')
  })
}

export{
  index,
  newNetflixShow as new,
  create,
  show,
  deleteShow as delete
}
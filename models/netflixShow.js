import mongoose from "mongoose"

const Schema= mongoose.Schema

const netflixShowSchema= new Schema({
  show: String,
  stars: Number
})

const NetflixShow= mongoose.model('Netflixshow', netflixShowSchema)

export{
  NetflixShow
}
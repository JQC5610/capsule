# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Memory.delete_all
Song.delete_all


mod1 = Memory.create(
  name: "Module 1", 
  img_url: "data:image/png;base64,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",
  time: "January 27 - February 16",
  author: "jSON"
)

mod2 = Memory.create(
  name: "Module 2",
  img_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Ruby_On_Rails_Logo.svg/1200px-Ruby_On_Rails_Logo.svg.png",
  time: "February 17 - March 8",
  author: "kDog"
)

mod3 = Memory.create(
  name: "Module 3",
  img_url: "https://1.bp.blogspot.com/-pdqcVeIQp64/XDX7TzdRdcI/AAAAAAAAM8E/ZmGuB6caZqIGmEflGHcj3zgXJJrmqRLdgCLcBGAs/w1200-h630-p-k-no-nu/Free%2BCourses%2Bto%2Blearn%2BJavaScript.jpg",
  time: "March 9 - 29",
  author: "Steven"
)

corona = Memory.create(
  name: "COVID19",
  img_url: "https://ichef.bbci.co.uk/news/1024/cpsprodpb/15707/production/_111251878_coronavirus_index_symptoms_976-nc.png",
  time: "Forever",
  author: "jSON"
)

comment1mod1 = Comment.create(
  text: "help",
  memory_id: 1
  )

comment1mod2 = Comment.create(
  text: "imposter",
  memory_id: 2
)

comment1mod3 = Comment.create(
  text: "wtf",
  memory_id: 3
)

comment1corona = Comment.create(
  text: "helpppp",
  memory_id: "4"
)

song1 = Song.create(
  name: "Euphemism",
  artist: "Tash",
  uri: "0sjheOk5jAVsxt9aiAMvGg"
)

song2 = Song.create(
  name: "Could've Been (feat. Bryson Tiller)",
  artist: "H.E.R.",
  uri: "6oEVnWKgPqIEPc53OYDNqG"
)

song3 = Song.create(
  name: "Find Someone Like You",
  artist: "Snoh Aalegra",
  uri: "53SIeTHgXuAOd98hZWV2wD"
)

song4 = Song.create(
  name: "Jasmine",
  artist: "DPR LIVE",
  uri: "2IgbYlOlFpiSFYnsqB39lM"
)

memorysong1 = MemorySong.create(
  name: "Jasmine - DPR LIVE",
  memory_id: 1,
  song_id: 4
)

memorysong2 = MemorySong.create(
  name: "Find Someone Like You - Snoh Aalegra",
  memory_id: 1,
  song_id: 3
)

memorysong3 = MemorySong.create(
  name: "Euphemism - Tash",
  memory_id: 1,
  song_id: 2
)




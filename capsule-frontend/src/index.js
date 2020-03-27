const memoriesUrl = "http://localhost:3000/memories"
const songUrl = "http://localhost:3000/songs"
let songUl = document.querySelector('.library')
let songForm = document.querySelector(".song-form-container")



document.addEventListener('DOMContentLoaded', function(event){

    return getSongs()

})

function getMemories(){
    return fetch(memoriesUrl)
    .then(resp => resp.json())
}




let memoryContainer = document.getElementById('memory-collection')

getMemories()
    .then(json => {
        json.forEach(memory => {
            let memoryCard = document.createElement('div')
            memoryCard.setAttribute('class', 'card')
            memoryCard.dataset.id = memory.id

            memoryCard.innerHTML = renderMemories(memory)
            memoryContainer.append(memoryCard)
            
        })
    })

function renderMemories(memory){
    return `
    <img src="${memory.img_url}" class="memory-avatar"/>
    <p>${memory.name}</p>
    <p>${memory.time}</p>
    <p>${memory.author}</p>
    <button data-memory-id="${memory.id}">Add Song from Library</button>
    <ul><p>Songs</p>
        ${memory.memory_songs.map(memory_song => {
        return `<li> ${memory_song.name} <button class="Delete" data-memory-song-id="${memory_song.id}">Delete</button></li>`
        }).join('')}
    </ul>
    <button data-memory-id="${memory.id}">Add Comment</button>
    <ul><p>Comments</p>
        ${memory.comments.map(comment => {
        return `<li> ${comment.text} <button class="Delete" data--comment-id="${comment.id}">Delete</button></li>`
        }).join('')}
    </ul>`



}

function getSongs(){
    return fetch(songUrl)
    .then(resp => resp.json())
    .then(json => {
        json.forEach(song => renderSongs(song)
        )
    })
}



function renderSongs(song){            
            let songLi = document.createElement('li')
            songLi.setAttribute('class', 'card')
            songLi.dataset.id = song.id

            songLi.innerHTML = `<iframe src="https://open.spotify.com/embed/track/${song.uri}" width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`
            songUl.appendChild(songLi)
}








songForm.addEventListener('submit', function(event){
    event.preventDefault()
    postSong(event.target)

})

function postSong(song_data) {
    fetch(songUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': "application/json"
        },
        body: JSON.stringify({
          "name": song_data.name.value,
          "artist": song_data.artist.value,
          "uri": song_data.uri.value
        })
      })
      .then(resp => resp.json())
      .then((obj_song) => {
        let new_song = renderSongs(obj_song)
        songUl.appendChild(new_song)
      }) 
  
}


// --------------------------------------------- Render Memory ---------------------------------------------------------------------------









    
//----------------------------------------------------Render Songs ----------------------------------------------------------------------









//----------------------------------------------------Form Display -----------------------------------------------------------------------
const li = document.createElement('li')
const ul = document.querySelector("ul")
const memoryForm = document.querySelector("memory-form-container")



function openMemoryForm() {
    document.getElementById("myForm-memory").style.display = "block";
}
function closeMemoryForm() {
    document.getElementById("myForm-memory").style.display = "none";
        // myForm.preventDefault()
}

function openSongForm(){
    document.getElementById('myForm-song').style.display = "block";
}
function closeSongForm(){
    document.getElementById('myForm-song').style.display = "none";
}



//click handler
    //if
//link form data to Playlist

// document.addEventListener('click', function(e){
//     console.log(form)
//     //if 
// })


//using queryselector
//find how to find form
//find by class vs id
//logic in eventListener
const memoriesUrl = "http://localhost:3000/memories"
const songUrl = "http://localhost:3000/songs"



// document.addEventListener('DOMContentLoaded', function(event){
//     getMemories()
// })

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

// --------------------------------------------- Render Memory ---------------------------------------------------------------------------

function getSongs(){
    return fetch(songUrl)
    .then(resp => resp.json())
}



getSongs()
    .then(json => {
        json.forEach(song => {
            let songUl = document.querySelector('.library')
            let songLi = document.createElement('li')
            songLi.setAttribute('class', 'card')
            songLi.dataset.id = song.id

            songLi.innerHTML = renderSongs(song)
            songUl.appendChild(songLi)
            
            
        })
    })

    

function renderSongs(song){
    return `
    ${song.name} - ${song.artist} <button class="Delete" data-song-id="${song.id}">Delete</button>`
}

    
//----------------------------------------------------Render Songs ----------------------------------------------------------------------









//----------------------------------------------------Form Display -----------------------------------------------------------------------
const li = document.createElement('li')
const ul = document.querySelector("ul")
const memoryForm = document.querySelector("memory-form-container")
const songForm = document.querySelector('song-form-container')


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
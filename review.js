//Constructors

function whatIsThis(name){
    console.log(name)
    console.log(this)
  }
  
  const meObj = {
    name: 'Andrew',
    age: 27,
    hasHotWater: false,
    whatIsThis
  }
  
  // whatIsThis.call(meObj, 'Andrew')
  
  // whatIsThis.apply(meObj, ['Ronald McDonald'])
  
  const thisIsMeObj = whatIsThis.bind(meObj)
  
  // thisIsMeObj('X AE a12');
  
  const contextArrow = () => {
    console.log(this)
  }
  
  const obj = {
    property: 'value',
    contextArrow,
    otherObj: {
      functionThing: function(){
        contextArrow();
      }
    },
    normalFunction: function(){
      console.log(this)
      contextArrow()
    },
    declaration: function(){
      const arrow = () => console.log(this)
      arrow()
    }
  }
  
  // obj.declaration()
  
  // contextArrow.call(meObj);
  
  
  
  const songs = [
    {
      id: 10,
      title: 'Bad Guy',
      artist: 'Billie Eilish',
      year: 2019
    },
    {
      id: 63,
      title: `Don't Lie`,
      artist: 'Vampire Weekend',
      year: 2013
    },
    {
      id: 49,
      title: '3WW',
      artist: 'Alt-J',
      year: 2017
    }
  ]
  
  // Write a constructor function called Playlist.  It should accept 4 parameters: title (string), author(string), dateCreated(date), and songs(array).
  // Your constructor should also include a method called play.  This will take in one parameter, a song id. If the song is found, the song object should be returned.  Otherwise, return a notification that the song was not found.
  
  function Playlist(title, author, dateCreated, songs) {
      this.title = title;
      this.author = author;
      this.dateCreated = dateCreated;
      this.songs = songs;
      this.play = function(id){
          const index = this.songs.findIndex(e => e.id === id)
          if (index >= 0) {
              return this.songs[index]
          } else {
              return 'Song not found, please try again'
          }
      }
  }
  
  
  //Now add two prototypes to your Playlist constructor, addToPlaylist and removeFromPlaylist. 
  //addToPlaylist should accept 4 parameters, id(number), title(string), artist(string), and year(number).  It should create a new song object and add it to the songs array.  Return the updated array
  //removeFromPlaylist should accept a single argument, an id(number).  It should remove the corresponding song and return the updated array.
  
  Playlist.prototype.addToPlaylist = function(id, title, artist, year) {
      this.songs.push({
          id,
          title,
          artist,
          year
      })
      return this.songs
  }
  
  Playlist.prototype.removeFromPlaylist = function(id) {
    const index = this.songs.findIndex(e => e.id === id)
    if (index >= 0) {
        this.songs.splice(index, 1);
        return this.songs
    } else {
        return 'Song ID not found, please try again.'
    }
  }
  
  //Create a new playlist using the provided songs array as a base.  Try adding, removing, and 'playing' songs from your playlist.

  const aNewPlaylist = new Playlist('Super Sweet Playlist', 'Jeff', '5/11/2020', songs)

  console.log(aNewPlaylist.play(63))
  console.log(aNewPlaylist.addToPlaylist(99, 'Gravity', 'John Mayer', 2001))
  console.log(aNewPlaylist.removeFromPlaylist(49))
  
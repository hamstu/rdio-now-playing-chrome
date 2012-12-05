/**
 * Grab and update the page title
 */
 function updateTitle()
 {
    var song_title = document.getElementsByClassName("song_title");
    if (song_title && song_title.length > 0) 
    {
      document.title = song_title[0].innerHTML;
    }
 }

 setInterval(updateTitle, 100);



// -------------------------------------
// clock widget w days in japanese kanji
// --------------------------------------
var currenttime = document.getElementById("clocktime");
var currentday = document.getElementById("clockweekday");

function updateClock() {
  if (currenttime == null || currentday == null) { return; } /* debug console err*/
	
  var now = new Date();

  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();

  if (hours < 10) { hours = "0" + hours; }
  if (minutes < 10) { minutes = "0" + minutes; }
  if (seconds < 10) { seconds = "0" + seconds; }

  var youbi = ["日曜日","月曜日","火曜日","水曜日","木曜日","金曜日","土曜日"];
  var shuu = youbi[now.getDay()];

  currenttime.innerHTML = hours + ":" + minutes + ":" + seconds;
  currentday.innerHTML = shuu;
}

updateClock();
setInterval(updateClock, 1000);



// --------------------------------------------------------
// home music box miside . mp3
// ---------------------------------------------------------
var music = document.getElementById("bg-music");
var musicButton = document.getElementById("music-btn");

if (music) {
  music.volume = 0.25;
}

var hajimaruMusic = 0;

/* click (on the page) then it will play. chrome has to register a click first */
if (music && musicButton) {
	document.onclick = function () {
	  if (hajimaruMusic == 0) {
		hajimaruMusic = 1;
		music.play();
		musicButton.innerHTML = "⏸";
	  }
	};

musicButton.onclick = function () {
  if (music.paused) {
    music.play();
    musicButton.innerHTML = "⏸";
  } else {
    music.pause();
    musicButton.innerHTML = "▶";
  }
};
}

/* =================================================================
	=================================================================
	=================================================================
	=================================================================
	=================================================================
	=================================================================
			WEBPAGE 2 - Space JAVASCRIPT code								*/

var spaceJam = document.getElementById("spacemusic_audio");
var spacemusicButton = document.getElementById("spacemusic_btn");

if (spaceJam) {
  spaceJam.volume = 0.15;
}
var startedJam = 0;

/* click (ont the page) then it will play. chrome has to register a click first */
if (spaceJam && spacemusicButton) { /* debug console err*/
	document.onclick = function () {
	  if (startedJam == 0) {
		startedJam = 1;
		spaceJam.play();
	  }
	};

/* buton activation */
spacemusicButton.onclick = function () { /* debug console err*/
  if (spaceJam.paused) {
    spaceJam.play();
    spacemusicButton.innerHTML = "⏸";
  } else {
    spaceJam.pause();
    spacemusicButton.innerHTML = "▶";
  }
};
}


/*============================

Music.html's javascript appears in its own html file due to Webamp 
code being super finicky within the browser as its pulled from online */
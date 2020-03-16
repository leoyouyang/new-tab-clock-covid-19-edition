function NTCshowTime() {
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let session = 'AM';
  session = (h >= 12) ? 'PM' : 'AM';
  h = (h == 0) ? 12 : ((h > 12) ? (h - 12): h);

  if (h < 10)
    h = '0' + h;

  if (m < 10)
    m = '0' + m;

  let time = h + ':' + m + ' ';
  document.getElementById('NTCclock').innerText = time;
  document.getElementById('NTCsession').innerText = session;
  setTimeout(NTCshowTime, 1000);
}

function getQuote() {
  let quotes = ["Wash your hands often.",
                "Put distance between yourself and others.",
                "Don't touch your face.",
                "If your face itches think about something else.",
                "Cover coughs and sneezes.",
                "Clean and disinfect surfaces often.",
                "Stay hydrated.",
                "We are not remote in our passion.",
                "Great art will still be made of this time.",
                "Here comes the sun. It's alright.",
                "It's our turn to shine!"];
  let quoteIndex = Math.floor(Math.random() * 11);
  document.getElementById('NTCquote').innerText = quotes[quoteIndex];
}

function setColors() {
  // myColors: [Blue, Pink, Yellow]
  let myColors = ['#009BDF', '#ED0080', '#FFD93F'];
  let bgColorIndex = Math.floor(Math.random() * 3);
  let clockColorIndex, quoteColor;

  if (bgColorIndex == 0 || bgColorIndex == 1) {
    clockColorIndex = 2;
    quoteColor = 'white';
  }

  else {
    clockColorIndex = 1;
    quoteColor = 'black';
  }

  document.body.style.backgroundColor = myColors[bgColorIndex];
  document.getElementById('NTCclockDisplay').style.color = myColors[clockColorIndex];
  document.getElementById('NTCquote').style.color = quoteColor;
}

NTCshowTime();
getQuote();
setColors();

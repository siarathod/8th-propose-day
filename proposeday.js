var i = 0;
var txt1 =
  "Hi sexy😉  <<               Today is propose day but i don't need to propose you cuz u already mine, per still i want to celebrate this day with you. <<<                So , Please read everything carefully.                                                                           > When I saw you for the first time on 8th march < You seems something Special to me and i can't say it 'pehli nazar ka pyaar' cuz it literally takes whole 5 seconds.  <<                  As the days goes < you get closer to me n i fell deeper and deeper for you. <<                           I don't know the reason why your thoughts always resonates inside my mind,                                                   > Everything about you is always special for me cuz you're very special for me.                     << You know how much I Love food n sleep n irritate you🤣.                    << But now I love more then all this.                                                             >I Love U <handsome💖                 <<<< will you be mine forever until the very end???                                                          <<<<by~mrs.shraddha jay panchal";
var speed = 50  
typeWriter();
function typeWriter() {
  if (i < txt1.length) {
    if (txt1.charAt(i) == "<")
      document.getElementById("text1").innerHTML += "</br>";
    else if (txt1.charAt(i) == ">")
      document.getElementById("text1").innerHTML = "";
    else if (txt1.charAt(i) == "|") {
      $(".bg_heart").css("background-image", "')");
    } else document.getElementById("text1").innerHTML += txt1.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

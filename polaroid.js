// functions

function makePol(x) {
//  for ( var i = 1 ; i <= x ; i++ ) {
  for ( var i = x ; i >= 0 ; i-- ) {            // lets run in reverse
    img = eval("img_"+i);			// use the counter to evaluate the input
    if (img[5] == 'big') {
      big = "style='width:600px; height:600px; margin:auto;'"
      bigpic = "style='height:500px;'"
    } else {
      big = "";
      bigpic = "";
    }
    html = "<a href='./viewer.html?"+ img[0] + ";" + img[1] + ";" + img[2] + ";" + img[3] + "'>";
    html += "<div class='polaroid " + img[4] +"' " +big+ ">";
    html += "<img class='polaroid' src='" + img[0] + "' "+bigpic+" >";
    if (img[2] != '') {
      html += "<div class='price'> &pound;" + img[2] + "</div>";
    } else {
      html += "<div class='price'> &nbsp;" + img[2] + "</div>";
    }
    if (img[1] != '') {
      html += "<div class='title'>" + img[3] + "<br><div class='media'> Artwork on: " + img[1] + "</div></div>";
    } else {
      html += "<div class='title'>" + img[3] + "<br><div class='media'>  " + img[1] + "</div></div>";
    }
    html += "</div></a>"
    document.write(html);
}
}
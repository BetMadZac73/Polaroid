// functions

function makePol(x) {
  for ( var i = 1 ; i <= x ; i++ ) {
    img = eval("img_"+i);			// use the counter to evaluate the input
    html = "<div class='polaroid " + img[4] +"'>";
    html += "<img class='polaroid' src='" + img[0] + "' style = width:100%>";
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
    html += "</div>"
    document.write(html);
}
}
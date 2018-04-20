const rows = $("#map .row");
let paths = [];

for (let i = 0; i < rows.length; i++) {
  let children = rows[i].children;
  if (i==0 || i==1 || i==4 || i==5 || i==8 || i==9) {
    for (let j=0; j<children.length; j++) {
      if (i==0 && j==0) {
        continue;
      } else {
        if (children[j].classList.contains("path")) {
          paths.push(children[j]);
          $(children[j]).addClass("gray");
          $(children[j].children).hide();
        }
      }
    }
  } else {
    for (let j=children.length-1; j>=0; j--) {
      if (children[j].classList.contains("path")) {
        paths.push(children[j]);
        $(children[j]).addClass("gray");
        $(children[j].children).hide();
      }
    }
  }
}

function start() {
  $("#startbtn")[0].innerHTML = "<i class='fas fa-play fa-3x animated headShake infinite'></i>";
  let i = 0;
  let a = setInterval(function() {
    if (i < paths.length) {
      $(paths[i]).removeClass("gray");
      $(paths[i].children).fadeIn();
      i++;
    } else {
      clearInterval(a);
    }
  }, 400);
}

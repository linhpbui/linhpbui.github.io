function onClick(element) {
    document.getElementById("img01").src = element.getElementsByClassName('img00')[0].src;
    document.getElementById("info01").innerHTML = element.getElementsByClassName('info00')[0].innerHTML;
    document.getElementById("modal01").style.display = "block";
    console.log(element.getElementsByClassName('info00'));
  }
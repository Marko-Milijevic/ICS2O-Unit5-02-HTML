document.getElementById('button').addEventListener('click', displayMessage)

function displayMessage () {
  alert("Hello")
}

document.getElementById('button2').addEventListener('click', changeFontStyle)

function changeFontStyle () {
  document.getElementById('paragraph').style.color="red"
  document.getElementById('paragraph').style.fontSize="40px"
  document.getElementById('paragraph').style.fontFamily="Comic Sans MS"
}
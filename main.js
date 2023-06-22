//task 1

let myWindow = window.open('', '', 'width=300,height=300');

setTimeout(function() {
  myWindow.resizeTo(500, 500);
}, 2000);

setTimeout(function() {
  myWindow.moveTo(200, 200);
}, 4000);


setTimeout(function() {
  myWindow.close();
}, 6000);

//task 2

function changeCSS() {
    let paragraph = document.getElementById('text');
    paragraph.style.color = 'orange';
    paragraph.style.fontSize = '20px';
    paragraph.style.fontFamily = 'Comic Sans MS';
  }
  
  let button = document.querySelector('button');
  button.addEventListener('click', changeCSS);

  //task 3

let button1 = document.getElementById('button1');
button1.addEventListener('click', function() {
  document.body.style.backgroundColor = 'blue';
});

let button2 = document.getElementById('button2');
button2.addEventListener('dblclick', function() {
  document.body.style.backgroundColor = 'pink';
});

let button3 = document.getElementById('button3');
button3.addEventListener('mousedown', function() {
  document.body.style.backgroundColor = 'brown';
});
button3.addEventListener('mouseup', function() {
  document.body.style.backgroundColor = 'white';
});


let link = document.getElementById('link');
link.addEventListener('mouseover', function() {
  document.body.style.backgroundColor = 'yellow';
});
link.addEventListener('mouseout', function() {
  document.body.style.backgroundColor = 'white';
});

//task 4

let removeButton = document.getElementById('removeButton');
removeButton.addEventListener('click', function() {
  let dropdown = document.getElementById('dropdown');
  let selectedIndex = dropdown.selectedIndex;
  
  if (selectedIndex !== -1) {
    dropdown.remove(selectedIndex);
  }
});

//task 5

let button = document.getElementById('myButton');

button.addEventListener('click', function() {
  console.log("I was pressed!");
});

button.addEventListener('mouseover', function() {
  console.log("Mouse on me!");
});

button.addEventListener('mouseout', function() {
  console.log("Mouse is not on me!");
});


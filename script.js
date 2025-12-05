let projectOne = document.getElementById('projectone');
let projectTwo = document.getElementById('projecttwo');
let projectThree = document.getElementById('projectthree');

let expandOne = document.getElementById('expandone');
let expandTwo = document.getElementById('expandtwo');
let expandThree = document.getElementById('expandthree');

projectOne.hidden = true;
projectTwo.hidden = true;
projectThree.hidden = true; //hides all the paragraphs

//event handler function - on click of button, unhide the paragraphs
expandOne.onclick = function () {
    projectOne.hidden = !projectOne.hidden;
};

expandTwo.onclick = function () {
    projectTwo.hidden = !projectTwo.hidden;
};

expandThree.onclick = function () {
    projectThree.hidden = !projectThree.hidden;
};
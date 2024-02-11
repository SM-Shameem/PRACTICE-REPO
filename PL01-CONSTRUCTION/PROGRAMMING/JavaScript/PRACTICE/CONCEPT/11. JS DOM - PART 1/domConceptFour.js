// DOM manipulation 

// Event Listener 
const buttonTwo = document.querySelector('.btn-2');
// const message = alert('javascript alert (event-listener)');
const message = function() {
    alert('javascript alert (event-listener)');
};
buttonTwo.addEventListener('click', message);

const boxFive = document.querySelector('.box-5');
const StyleChanger = function() {
    let change;
    this.method = function() {
        if(change == null) {
            change = 1
            boxFive.style.backgroundColor = 'RED';
        }
        else {
            change = null;
            boxFive.style.backgroundColor = 'darkcyan';
        }
    }
}
const styleChanger = new StyleChanger();
boxFive.addEventListener('mouseover', styleChanger.method);
boxFive.addEventListener('mouseout', styleChanger.method);

// ------------------------------------------------------------
const revealBtn = document.querySelector('.reveal-btn');
const hiddenContent = document.querySelector('.hidden-content');

const revealContent = function() {
    if(hiddenContent.classList.contains('reveal-btn'))
        hiddenContent.classList.remove('reveal-btn');
    else hiddenContent.classList.add('reveal-btn');
};

revealBtn.addEventListener('click', revealContent);

// ------------------------------------------------------------
// event propagation (3 PHASES)
// 1. event capturing 
// 2. target 
// 3. event bubbling

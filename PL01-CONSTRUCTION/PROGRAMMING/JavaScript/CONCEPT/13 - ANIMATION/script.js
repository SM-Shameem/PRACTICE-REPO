let xCoord = null;
let yCoord = null;
let xLock = null;
let yLock = null;
let interval = null;
let actionKey = null;

let R = null;
let G = null;
let B = null;

let object = document.getElementById('div-id');
let base = document.getElementById('body-id')

function objectStyle() {
    object.style.backgroundColor = '#444';
    object.style.border = 'outset 2px #666';
    object.style.borderRadius = '10px';
    object.style.width = '100px';
    object.style.padding = '35px 15px';
    object.style.color = '#DDD';
    object.style.fontSize = '18px';
    object.style.fontWeight = 'bold';
    object.style.textAlign = 'center';

    object.style.marginLeft = xCoord + 'px';
    object.style.marginTop = yCoord + 'px';
    object.innerHTML = 'X-Axis: ' + xCoord + '<br>Y-Axis: ' + yCoord;
}

function animation() {
    if(xCoord < (window.innerWidth - 140) && xLock == null) {
        xCoord++;        
        objectStyle();
    } else if (xCoord > 0 && xLock == 1) {
        xCoord--;
        objectStyle();
    }
    else {
        if (xLock == null) {
            xLock = 1;
            if (xLock == 1) backgroundStyle();
        }
        else if (xLock == 1) {
            xLock = null;
            if (xLock == null) backgroundStyle();
        }
    }

    if(yCoord < (window.innerHeight - 125) && yLock == null) {
        yCoord++;        
        objectStyle();
    } else if (yCoord > 0 && yLock == 1) {
        yCoord--;
        objectStyle();
    }
    else {
        if (yLock == null) {
            yLock = 1;
            if (yLock == 1) backgroundStyle();
        }
        else if (yLock == 1) {
            yLock = null;
            if (yLock == null) backgroundStyle();
        }
    }
}

function backgroundStyle() {
    if (interval == null)
        base.style.backgroundColor = '#222';
    else
        if (xLock == 1)
            base.style.backgroundColor = 'rgb(' + R + ',' + G + ',' + B + ')';
        else if (yLock == 1)
            base.style.backgroundColor = 'rgb(' + R + ',' + G + ',' + B + ')';
        else if (xLock == null) 
            base.style.backgroundColor = 'rgb(' + R + ',' + G + ',' + B + ')';
        else if (yLock == null) 
            base.style.backgroundColor = 'rgb(' + R + ',' + G + ',' + B + ')';

    if (R < 250 && G < 250 && B < 250) {
        if (xLock == null) { R += 50; G += 100; B += 150; }
        else if(yLock == null) { R += 150; G += 50; B +=100; }
        else if(xLock == 1) { R -= 50; G -= 50; B -= 50; }
        else if(yLock == 1) { R -= 20; G -= 20; B -= 20; }
    } else {
        R = 0;
        G = 0;
        B = 0;
    }
}

function action() {
    if (actionKey == null) actionKey = 1;
    else if (actionKey == 1) actionKey = null;

    if (actionKey == 1) interval = setInterval(animation, 5);
    else if (actionKey == null) clearInterval(interval);
}
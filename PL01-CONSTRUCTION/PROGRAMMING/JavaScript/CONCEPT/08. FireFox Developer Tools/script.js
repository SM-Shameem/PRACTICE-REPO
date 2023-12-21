document.getElementById('button').onclick = function () {
    let inOne = document.getElementById('inputOne');
    let inTwo = document.getElementById('inputTwo');
    let result = document.getElementById('result');

    if (parseInt(result.innerHTML) != null) {
        result.innerHTML = '';    
    }

    result.innerHTML += (parseInt(inOne.value) + parseInt(inTwo.value));

    if (parseInt(inOne.value) != null || parseInt(inTwo.value) != null) {
        inOne.value = null;
        inTwo.value = null;
    }
}
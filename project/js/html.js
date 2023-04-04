function showHint(){
    const hintElem = document.getElementsByClassName('hint')[0];
    if(hintElem.style.display == 'block'){
        hintElem.style.display = 'none';
    } else {
        hintElem.style.display = 'block';
    }
    
}

function fillDisplay(){
    const input = document.getElementById('userInput').value;
    document.getElementById('output').innerHTML = input;
}
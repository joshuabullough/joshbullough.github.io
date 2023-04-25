function showHint() {
    const hintElems = document.getElementsByClassName('hint');
    for(let hintElem of hintElems){
        if (hintElem.style.display == 'block') {
            hintElem.style.display = 'none';
        } else {
            hintElem.style.display = 'block';
        }
    }    
}
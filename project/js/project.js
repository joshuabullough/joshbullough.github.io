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

$(document).ready(function() {
	$('#searchbar').keypress(function(event){
        if (event.key === 'Enter') {
            search();
        }
    });
});

function search(){
    const searchTerm = $('#searchbar').val();
    console.log(searchTerm)
    open('https://www.google.com/search?q=' + searchTerm, '_blank');
    return
}
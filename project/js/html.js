
$(document).ready(function () {
    (function init() {
        const myTextArea = document.getElementById('userInput');
        editor = CodeMirror.fromTextArea(myTextArea, {
            mode: "xml",
            theme: "dracula",
            styleActiveLine: true,
            lineNumbers: true,
            lineWrapping: true,
            tabSize: 6,
            autoCloseTags: true,
            autoCloseBrackets: true,
            extraKeys: {
                'Ctrl-/': (cm) => {
                    cm.execCommand('toggleComment');
                }
            },
            addons: ['comment', 'selection', 'edit'],
        });

        editor.setSize("100%", "100%");

        editor.on("change", function(cm) {
            const code = cm.getValue();
            fillDisplay(code);
        });
    }());
});

function showHint(){
    const hintElem = document.getElementsByClassName('hint')[0];
    if(hintElem.style.display == 'block'){
        hintElem.style.display = 'none';
    } else {
        hintElem.style.display = 'block';
    }  
}

function fillDisplay(input){
    document.getElementById('output').innerHTML = input;
}
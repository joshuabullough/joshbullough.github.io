
$(document).ready(function () {
    try {
        setTimeout(() => {
            document.getElementById('outputContent').contentWindow.document.getElementById('html').style.display = 'block';
            document.getElementById('outputContent').contentWindow.document.getElementById('javascript').style.display = 'none';
            document.getElementById('outputContent').contentWindow.document.getElementById('css').style.display = 'none';
        }, 30);
    } catch (e) {
        //page not fully loaded yet.
    } finally {
        setTimeout(() => {
            document.getElementById('outputContent').contentWindow.document.getElementById('html').style.display = 'block';
            document.getElementById('outputContent').contentWindow.document.getElementById('javascript').style.display = 'none';
            document.getElementById('outputContent').contentWindow.document.getElementById('css').style.display = 'none';
        }, 70);
    }
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
    document.getElementById('outputContent').contentWindow.document.getElementById('htmlOutput').innerHTML = input;
}
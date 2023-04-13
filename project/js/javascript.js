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

        editor.on("change", function (cm) {
            const code = cm.getValue();
            fillDisplay(code);
        });
    }());
});

function showHint() {
    const hintElem = document.getElementsByClassName('hint')[0];
    if (hintElem.style.display == 'block') {
        hintElem.style.display = 'none';
    } else {
        hintElem.style.display = 'block';
    }
}

//currently this can access the whole document. security issue. I need to use Iframe
function fillDisplay(input) {
    try {
        document.getElementById('inputScripts').innerHTML;
        let s = document.createElement("script");
        s.type = "text/javascript";
        //insert script as text and convert with eval into a usable javascript function.
        s.append(`try { new Function(eval("\`{ ${input.replace(/\n/g,' ')} }\`"))(); } catch(e) {}`)
        //insert script element into div
        document.getElementById('inputScripts').appendChild(s);
    } catch (e) {
        //not a good javascript statement
    } finally {
        //delete all scripts from the document.
        document.getElementById('inputScripts').innerHTML = '';
    }
}
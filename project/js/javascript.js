$(document).ready(function () {
    try {
        setTimeout(() => {
            document.getElementById('outputContent').contentWindow.document.getElementById('javascript').style.display = 'block';
            document.getElementById('outputContent').contentWindow.document.getElementById('html').style.display = 'none';
            document.getElementById('outputContent').contentWindow.document.getElementById('css').style.display = 'none';
        }, 30);
    } catch (e) {
        //page not fully loaded yet.
    } finally {
        setTimeout(() => {
            document.getElementById('outputContent').contentWindow.document.getElementById('javascript').style.display = 'block';
            document.getElementById('outputContent').contentWindow.document.getElementById('html').style.display = 'none';
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

        editor.on("change", function (cm) {
            const code = cm.getValue();
            fillDisplay(code);
        });
    }());
});

function fillDisplay(input) {
    //show javascript output
    const iframe = document.getElementById('outputContent').contentWindow.document.getElementById('inputScripts');
    try {
        let s = document.createElement("script");
        s.type = "text/javascript";
        //insert script as text and convert with eval into a usable javascript function. Get replace string breaking characters.
        s.append(`try { new Function(eval("\`{ ${input.replace(/\n/g,' ').replace(/'/g,'\\\'').replace(/"/g,'\\"').replace(/`/g,'\\"')} }\`"))(); } catch(e) {}`)
        //insert script element into div
        iframe.appendChild(s);
    } catch (e) {
        //not a good javascript statement
    } finally {
        //delete all scripts from the document.
        iframe.innerHTML = "";
    }
}
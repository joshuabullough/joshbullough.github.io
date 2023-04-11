function showHint() {
    const hintElem = document.getElementsByClassName('hint')[0];
    if (hintElem.style.display == 'block') {
        hintElem.style.display = 'none';
    } else {
        hintElem.style.display = 'block';
    }
}


function fillDisplay() {
    const input = document.getElementById('userInput').value.replace(/\n/g,"");

    const statements = input.split('}').filter(x=>x!="").map(x=>x + "}");
    console.log(statements)

    for (statement of statements) {
        const startIndex = statement.search("{");
        const endIndex = statement.search("}") + 1;

        if (statement.substring(0, startIndex).trim().toLowerCase() == 'p') {
            const style = statement.substring(startIndex, endIndex);
            console.log(style)
            document.getElementById('style').innerHTML += `p.output_style ${style}`;
        } else if (statement.substring(0, startIndex).trim().toLowerCase() == 'h1') {
            const style = statement.substring(startIndex, endIndex);
            console.log(style)
            document.getElementById('style').innerHTML += `h1.output_style ${style}`;
        } else if (statement.substring(0, startIndex).trim().toLowerCase() == '#title') {
            const style = statement.substring(startIndex, endIndex);
            console.log(style)
            document.getElementById('style').innerHTML += `#title ${style}`;
        } else {
            //do nothing
            document.getElementById('style').innerHTML = "";
        }
    }
}


function findElementsByTagName(node, tagName) {
    let results = [];

    for (let childElement of node.childNodes) {
        if (childElement.nodeName.toLowerCase() === tagName.toLowerCase()) {
            results.push(childElement);
        }
    }

    return results;
}


let footer = document.getElementById('results');
let resultText = '';
for (let foundElements of findElementsByTagName(document.body, 'ul')) {
    resultText = `${resultText} ${foundElements.innerText}`;
}
footer.innerText = resultText;
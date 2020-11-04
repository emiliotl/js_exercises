
document.getElementById('executer').addEventListener('click', () => {
    let code = document.getElementById('receptor').value;
    let functionWithExternalCode = Function('', code);
    let results = document.createElement('p');
    results.innerText = functionWithExternalCode();
    let label = document.createElement('p');
    label.innerText = '\nOutput:'
    document.getElementById('result').appendChild(label);
    document.getElementById('result').appendChild(results);
})

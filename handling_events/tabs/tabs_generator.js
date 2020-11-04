
function asTabs(node, nameOfTabs) {
    for (let tabName of nameOfTabs) {
        let tab = document.createElement('button');
        tab.setAttribute('data-tabname', tabName);
        tab.innerText = tabName;
        node.appendChild(tab);

        tab.addEventListener('click', () => {
            tab.style.backgroundColor = 'white';
            tab.style.textDecorationColor = 'black';

            nameOfTabs.map((currentTabName) => {
                if (currentTabName !== tabName && nameOfTabs.indexOf(currentTabName) !== nameOfTabs.length - 1) {
                    let currentTab = document.querySelector(`button[data-tabname=${currentTabName}]`);
                    currentTab.style.backgroundColor = 'gray';
                    currentTab.style.textDecorationColor = 'white';
                }
            });
        })

        if (nameOfTabs.indexOf(tabName) === nameOfTabs.length - 1) {
            tab.style.display = 'none';
        }
    }
}

asTabs(document.getElementById('target'), ['JavaScript', 'Python', 'Bash', 'Zsh', 'C++'])
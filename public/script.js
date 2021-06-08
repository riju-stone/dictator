const remote = require('electron').remote;

const win = remote.getCurrentWindow();

function minWindow(){
    win.minimize();
}
  
function closeWindow(){
    win.close();
}

document.getElementById('min').addEventListener('click', minWindow);
document.getElementById('cls').addEventListener('click', closeWindow);
// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
const {contextBridge,ipcRenderer} = require('electron');

contextBridge.exposeInMainWorld('versions',{
    node: () => process.versions.node,
    chrome: () => process.versions.chrome,
    electron: () => process.versions.electron,
    cpu: () => ipcRenderer.on('cpu',(event,data) => {
        document.getElementById('cpu').innerHTML = data.toFixed(2);
      }),
    mem: () => ipcRenderer.on('mem',(event,data) => {
        document.getElementById('mem').innerHTML = data.toFixed(2);
      }),
    total_mem: () => ipcRenderer.on('total-mem',(event,data) => {
        document.getElementById('total-mem').innerHTML = data.toFixed(2);
      }),
})
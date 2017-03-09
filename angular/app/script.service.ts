import { Injectable } from '@angular/core';
import { Script } from './script';

const fs = require('fs');
const electron = require('electron');

const filePath: string = 'settings.json';
const scriptsFolderPath: string = 'generatedScripts';

@Injectable()
export class ScriptService {
    private _scripts: Array<Script> = [
        new Script ({ title: 'Evidence', shortcut: 'CTRL+NUM1', color: 'lighterBlue', content: 'A' }),
        new Script ({ title: 'Evidence2', shortcut: 'CTRL+NUM1', color: 'darkRed', content: 'B' }),
        new Script ({ title: 'Evidence3', shortcut: 'CTRL+NUM1', color: 'green', content: 'C' }),
        new Script ({ title: 'Evidence4', shortcut: 'CTRL+NUM1', color: 'brown', content: 'D' }),
        new Script ({ title: 'Evidence5', shortcut: 'CTRL+NUM1', color: 'darkGreen', content: 'E' })
    ];

    constructor () {
        try {
            if (fs.existsSync(filePath)) {
                this._scripts = JSON.parse(fs.readFileSync(filePath));
            }
        } catch (e) {
            alert('Could not parse settings. Error: ' + e.toString());
        }

        electron.ipcRenderer.on('info', (event: any, data: any) => { console.log(data.msg) });
    }
    
    get scripts(): Array<Script> {
        return this._scripts;
    }

    set scripts(value: Array<Script>) {
        this._scripts = value;
    }

    save(scripts: Array<Script>) {
        this._scripts = scripts;
        fs.writeFileSync('settings.json', JSON.stringify(this._scripts));

        if (!fs.existsSync(scriptsFolderPath)) {
            fs.mkdirSync(scriptsFolderPath);
        }
        
        scripts.forEach(script => {
            fs.writeFileSync(`${scriptsFolderPath}/${script.title}.bat`, script.content);
        });
    }
}
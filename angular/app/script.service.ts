import { Injectable } from '@angular/core';
import fs from 'fs';
https://github.com/systemjs/systemjs/issues/1261

@Injectable()
export class ScriptService {
    private _scripts = [
        { title: 'Evidence', shortcut: 'CTRL+NUM1', color: 'lighterBlue', content: 'A' },
        { title: 'Evidence2', shortcut: 'CTRL+NUM2', color: 'darkRed', content: 'B' },
        { title: 'Evidence3', shortcut: 'CTRL+NUM3', color: 'green', content: 'C' },
        { title: 'Evidence4', shortcut: 'CTRL+NUM4', color: 'brown', content: 'D' }
    ];

    get scripts(): any {
        return this._scripts;
    }

    set scripts(value: any) {
        this._scripts = value;
    }

    save() {
        console.log(fs);
        //electron.remote.require('dialog').showErrorBox('My message', 'hi.');
    }
}
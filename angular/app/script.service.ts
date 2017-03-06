import { Injectable } from '@angular/core';

@Injectable()
export class ScriptService {
    private _scripts = [
        { title: 'Evidence', shortcut: 'CTRL+NUM1', color: 'lighterBlue' },
        { title: 'Evidence2', shortcut: 'CTRL+NUM2', color: 'darkRed' },
        { title: 'Evidence3', shortcut: 'CTRL+NUM3', color: 'green' },
        { title: 'Evidence4', shortcut: 'CTRL+NUM4', color: 'brown' }
    ];

    get scripts(): any {
        return this._scripts;
    }

    set scripts(value: any) {
        this._scripts = value;
    }
}
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ScriptService } from './script.service';
import { Script } from './script';

@Component ({
    templateUrl: 'views/edit.html'
})

export class EditComponent {
    constructor (
        private router: Router,
        private scriptService: ScriptService) {}

    scripts: Array<Script> = JSON.parse(JSON.stringify(this.scriptService.scripts));

    selectedScript: Script = null;

    save() {
        this.scriptService.save(this.scripts);
        this.router.navigate(['/']);
    }

    cancel() {
        this.router.navigate(['/']);
    }

    selectScript(script: Script) {
        this.selectedScript = script;
    }

    addScript() {
        this.scripts.push({ title: 'New script', shortcut: '', color: 'darkGreen', content: '' });
    }
}
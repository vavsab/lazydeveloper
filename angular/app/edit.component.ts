import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ScriptService } from './script.service';

@Component ({
    templateUrl: 'views/edit.html'
})

export class EditComponent {
    constructor (
        private router: Router,
        private scriptService: ScriptService) {}

    scripts = this.scriptService.scripts;

    selectedScript: any = null;

    save() {
        this.scriptService.save();
        this.router.navigate(['/']);
    }

    selectScript(script: any) {
        this.selectedScript = script;
    }
}
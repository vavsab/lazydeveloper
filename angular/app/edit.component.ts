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

    name = this.scriptService.value;

    save() {
        this.router.navigate(['/']);
    }
}
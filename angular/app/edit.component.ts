import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component ({
    templateUrl: 'views/edit.html'
})

export class EditComponent {
    constructor (private router: Router) {}

    name = 'Edit';

    save() {
        this.router.navigate(['/']);
    }
}
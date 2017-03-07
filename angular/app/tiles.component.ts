import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ScriptService } from './script.service';

@Component({  
  templateUrl: 'views/tiles.html',
})

export class TilesComponent  { 
  constructor (
    private router: Router,
    private scriptService: ScriptService) {}

  scripts = this.scriptService.scripts;

  onClick() {
    this.scriptService.scripts.push({ title: 'Evidence', shortcut: 'CTRL+NUM1', color: 'darkGreen', content: 'New' });
  }

  switchToEditMode() {
    this.router.navigate(['edit']);
  }
}

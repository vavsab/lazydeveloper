import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({  
  templateUrl: 'views/tiles.html',
})

export class TilesComponent  { 
  constructor (private router: Router) {}

  scripts = [
    { title: 'Evidence', shortCut: 'CTRL+NUM1', color: 'lighterBlue' },
    { title: 'Evidence2', shortCut: 'CTRL+NUM2' },
    { title: 'Evidence3', shortCut: 'CTRL+NUM3' },
    { title: 'Evidence4', shortCut: 'CTRL+NUM4' }
  ];

  name = 'Angular'; 

  onClick() {
    this.scripts.push({ title: 'Evidence', shortCut: 'CTRL+NUM1' });
  }

  switchToEditMode() {
    this.router.navigate(['edit']);
  }
}

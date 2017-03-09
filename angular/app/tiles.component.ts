import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ScriptService } from './script.service';
import { Script } from './script';

const spawn = require('child_process').spawn;

@Component({  
  templateUrl: 'views/tiles.html',
})

export class TilesComponent  { 
  constructor (
    private router: Router,
    private scriptService: ScriptService) {}

  scripts = this.scriptService.scripts;

  switchToEditMode() {
    this.router.navigate(['edit']);
  }

  run(script: Script) {
    const bat = spawn(`"generatedScripts\\${script.title}.bat"`, { shell: true });

    bat.stdout.on('data', (data: any) => {
      console.log(data.toString());
    });

    bat.stderr.on('data', (data: any) => {
      console.log(data.toString());
    });

    bat.on('exit', (code: any) => {
      console.log(`Child exited with code ${code}`);
    });
  }
}

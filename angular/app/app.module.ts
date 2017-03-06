import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TilesComponent } from './tiles.component';
import { AppComponent }  from './app.component';
import { EditComponent } from './edit.component';

import { ScriptService } from './script.service';

import { RouterModule, Routes  } from '@angular/router';

import { AceEditorDirective, AceEditorComponent } from 'ng2-ace-editor';

const appRoutes: Routes = [
  { path: 'edit', component: EditComponent},
  { path: '**', component: TilesComponent }
];

@NgModule({
  imports: [ BrowserModule, RouterModule.forRoot(appRoutes), AceEditorDirective, AceEditorComponent ],
  providers: [ ScriptService ],
  declarations: [ AppComponent, TilesComponent, EditComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

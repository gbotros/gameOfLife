import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CellComponent } from './cell/cell.component';
import { GridComponent } from './grid/grid.component';
import { reducers, metaReducers } from './store/reducers';
import { environment } from '../environments/environment';
import { AppEffects } from './store/app.effects';
import { GridEffects } from './store/effects/grid.effects';
import { PatternListComponent } from './pattern-list/pattern-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CellComponent,
    GridComponent,
    PatternListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FlexLayoutModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([AppEffects]),
    EffectsModule.forFeature([GridEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { KeyboardEffects } from './store/keyboard/keyboard.effects';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TickerComponent } from '../components/ticker/ticker.component';
import { HighlighterPipe } from '../pipes/highlighter.pipe';
import { KeyboardMonitorComponent } from '../components/keyboard-monitor/keyboard-monitor.component';
import { KeyComponent } from '../components/keyboard-monitor/key/key.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StatisticsEffects } from './store/statistics/statistics.effects';

@NgModule({
  declarations: [
    AppComponent,
    TickerComponent,
    HighlighterPipe,
    KeyboardMonitorComponent,
    KeyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {
      metaReducers
    }),
    EffectsModule.forRoot([StatisticsEffects, KeyboardEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

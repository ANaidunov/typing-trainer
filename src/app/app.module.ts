import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TickerComponent } from '../components/ticker/ticker.component';
import { HighlighterPipe } from '../pipes/highlighter.pipe';
import { KeyboardMonitorComponent } from '../components/keyboard-monitor/keyboard-monitor.component';
import { KeyComponent } from '../components/keyboard-monitor/key/key.component';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

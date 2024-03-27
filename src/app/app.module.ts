import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ComponentModule} from "../component/component.module";
import {FeedbackComponent} from "../component/feedback/feedback.component";
import {NavComponent} from "../component/standalone/nav/nav.component";
import {TextMediaComponent} from "../component/standalone/textmedia/text-media.component";
import {FooterComponent} from "../component/standalone/footer/footer.component";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ComponentModule,
    NavComponent,
    TextMediaComponent,
    FooterComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

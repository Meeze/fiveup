import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StageComponent } from './stage/stage.component';
import { FeedComponent } from './feed/feed.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { TextmediaComponent } from './textmedia/textmedia.component';
import { AccordionComponent } from './accordion/accordion.component';
import { FaqComponent } from './faq/faq.component';



@NgModule({
  declarations: [
    StageComponent,
    FeedComponent,
    NavComponent,
    FooterComponent,
    TextmediaComponent,
    AccordionComponent,
    FaqComponent
  ],
  exports: [
    StageComponent,
    FeedComponent,
    FaqComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentModule { }

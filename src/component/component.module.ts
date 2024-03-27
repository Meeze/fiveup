import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StageComponent } from './stage/stage.component';
import { FeedComponent } from './feed/feed.component';
import { FaqComponent } from './faq/faq.component';
import {FeedbackComponent} from "./feedback/feedback.component";
import {SocialCounterComponent} from "./social-counter/social-counter.component";
import {GenericCounterComponent} from "./standalone/generic-counter/generic-counter.component";
import {AccordionComponent} from "./standalone/accordion/accordion.component";
import {NavComponent} from "./standalone/nav/nav.component";
import {IconWithLinkComponent} from "./standalone/icon-with-link/icon-with-link.component";
import {InfoTextComponent} from "./info-text/info-text.component";
import {TextMediaComponent} from "./standalone/textmedia/text-media.component";
import {FooterComponent} from "./standalone/footer/footer.component";
import {ButtonComponent} from "./standalone/button/button.component";



@NgModule({
  declarations: [
    StageComponent,
    FeedComponent,
    FaqComponent,
    FeedbackComponent,
    SocialCounterComponent,
    InfoTextComponent,
  ],
  exports: [
    StageComponent,
    FeedComponent,
    FaqComponent,
    FeedbackComponent,
    SocialCounterComponent,
    InfoTextComponent
  ],
    imports: [
        CommonModule,
        GenericCounterComponent,
        AccordionComponent,
        IconWithLinkComponent,
        TextMediaComponent,
        FooterComponent,
        NavComponent,
        ButtonComponent,
    ]
})
export class ComponentModule { }

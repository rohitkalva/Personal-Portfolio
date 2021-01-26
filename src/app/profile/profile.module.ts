import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { SkillsComponent } from './skills/skills.component';



@NgModule({
  declarations: [AboutComponent, ContactComponent, EducationComponent, ExperienceComponent, FooterComponent, HeaderComponent, IntroductionComponent, SkillsComponent],
  imports: [
    CommonModule
  ]
})
export class ProfileModule { }

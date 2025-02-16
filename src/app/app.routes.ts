import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';

export const routes: Routes = [
    {path: '', component: LandingPageComponent},
    {path: 'impressum', component: ImpressumComponent},
    {path: 'legal-notice', component: LegalNoticeComponent}
];

import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { PolicyComponent } from './policy/policy.component';

export const routes: Routes = [
    {path: '', component: LandingPageComponent},
    {path: 'policy', component: PolicyComponent},
    {path: 'legal-notice', component: LegalNoticeComponent}
];

import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ng2-webstorage';

import { JhipsterSampleApplicationAngular4SharedModule, UserRouteAccessService } from './shared';
import { JhipsterSampleApplicationAngular4HomeModule } from './home/home.module';
import { JhipsterSampleApplicationAngular4AdminModule } from './admin/admin.module';
import { JhipsterSampleApplicationAngular4AccountModule } from './account/account.module';
import { JhipsterSampleApplicationAngular4EntityModule } from './entities/entity.module';

import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    LayoutRoutingModule,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        LayoutRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        JhipsterSampleApplicationAngular4SharedModule,
        JhipsterSampleApplicationAngular4HomeModule,
        JhipsterSampleApplicationAngular4AdminModule,
        JhipsterSampleApplicationAngular4AccountModule,
        JhipsterSampleApplicationAngular4EntityModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class JhipsterSampleApplicationAngular4AppModule {}

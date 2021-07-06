import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReposComponent } from './repos/repos.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NumberSuffixPipe } from './pipes/number-suffix.pipe';
import { DetailRepoComponent } from './detail-repo/detail-repo.component';
@NgModule({
  declarations: [
    AppComponent,
    ReposComponent,
    NumberSuffixPipe,
    DetailRepoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

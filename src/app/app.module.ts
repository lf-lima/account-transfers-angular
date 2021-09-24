import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { NewTransferComponent } from './new-transfer/new-transfer.component'
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module'
import { ListTransfersComponent } from './list-transfers/list-transfers.component'

@NgModule({
  declarations: [
    AppComponent,
    NewTransferComponent,
    ListTransfersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

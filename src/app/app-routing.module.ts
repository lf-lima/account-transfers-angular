import { ListTransfersComponent } from './list-transfers/list-transfers.component'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { NewTransferComponent } from './new-transfer/new-transfer.component'

const routes: Routes = [
  { path: 'new-transfer', component: NewTransferComponent },
  { path: 'list-transfers', component: ListTransfersComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

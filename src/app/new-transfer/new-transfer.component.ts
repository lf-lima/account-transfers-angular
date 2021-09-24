import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-new-transfer',
  templateUrl: './new-transfer.component.html',
  styleUrls: ['./new-transfer.component.scss']
})
export class NewTransferComponent implements OnInit {

  value: number
  account: number

  constructor() { }

  ngOnInit(): void { }

  newTransfer(): void {
    console.log(`Valor: R$ ${this.value}`)
    console.log(`Conta: ${this.account}`)
  }
}

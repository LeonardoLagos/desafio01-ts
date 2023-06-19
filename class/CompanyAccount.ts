import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (value:number): void => {
    if (this.validateStatus()) {
      this.balance += value
      console.log(`Você pegou um empréstimo de R$${value.toFixed(2)}, seu saldo agora é de R$${this.balance.toFixed(2)}`)
    }
  }
}

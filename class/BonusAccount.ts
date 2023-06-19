import { DioAccount } from "./DioAccount"

export class BonusAccount extends DioAccount {
    constructor(name: string, accountNumber: number){
        super(name, accountNumber)
    }

    deposit = (value: number): void => {
        if(this.validateStatus()){
            this.balance += value + 10
            console.log(`Você depositou R$${value.toFixed(2)} e ganhou R$10,00 de bônus!, seu saldo agora é de R$${this.balance.toFixed(2)}`)
        }
    }
}
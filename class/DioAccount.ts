export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  protected balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  setName = (name: string): void => {
    console.log('Nome não pode ser alterado!')
  }

  getName = (): string => {
    return this.name
  }

  deposit = (value: number): void => {
    if(this.validateStatus()){
      this.balance += value
      console.log(`Você depositou R$${value.toFixed(2)}, seu saldo agora é de R$${this.balance.toFixed(2)}`)
    }
  }

  withdraw = (value: number): void => {
    if(this.validateStatus() && this.balance > value){
      this.balance -= value
      console.log(`Você sacou R$${value.toFixed(2)}, seu saldo agora é de R$${this.balance.toFixed(2)}`)
    }else{
      throw Error('Valor de saque maior que saldo atual!')
    }
  }

  getBalance = (): void => {
    console.log(this.balance)
  }

  protected validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}

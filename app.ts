import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { BonusAccount } from './class/BonusAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
const bonusAccount: BonusAccount = new BonusAccount('NathBonus', 10)
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
console.log('\n-----------------peopleAccount-----------------')
peopleAccount.deposit(150)
peopleAccount.withdraw(80)
console.log('\n-----------------bonusAccount-----------------')
bonusAccount.deposit(200)
bonusAccount.withdraw(150)
console.log('\n-----------------companyAccount-----------------')
companyAccount.deposit(150)
companyAccount.getLoan(5000)
companyAccount.withdraw(4500)
console.log('\n-----------------dados-----------------')
console.log(peopleAccount)
console.log(bonusAccount)
console.log(companyAccount)
import { CommonElement } from '../utils/elements';

class Expenses{
  fuelExpensesBtn = '[routerlink="expenses"]'
  expenseBtn = '.btn.btn-primary'
  addExpenseMileage = '#addExpenseMileage'
  addExpenseLiters = '#addExpenseLiters'
  addExpenseTotalCost = '#addExpenseTotalCost'
  addBtn = '.modal-footer .btn.btn-primary'
  deleteCostingResultBlock= 'tbody tr'
  deleteCostingResultBtn = 'span[class="icon icon-delete"]' 
  removeCostingResultBtn = '.btn-danger'
  errorMileage = ".invalid-feedback > p"
  closeBtn = '.close > span'
  cancelBtn= '.modal-footer > .btn-secondary'
  numberOfLiters = '#addExpenseLiters'
  totalCost= '#addExpenseTotalCost'


  getExpenseBtn(){
    return new CommonElement(this.expenseBtn)
  }
  
  getfuelExpensesBtn(){
    return new CommonElement(this.fuelExpensesBtn)
  }

  getAddExpenseMileage(){
    return new CommonElement(this.addExpenseMileage)
  }

  getAddExpenseLiters(){
    return new CommonElement(this.addExpenseLiters)
  }

  getAddExpenseTotalCosts(){
    return new CommonElement(this.addExpenseTotalCost)
  }

  getAddBtn() {
    return new CommonElement(this.addBtn)
  }

  getDeleteCostingResultBtn() {
    return new CommonElement(this.deleteCostingResultBtn)
  }

  getRemoveCostingResultBtn() {
    return new CommonElement(this.removeCostingResultBtn)
  }

  getDeleteCostingResultBlock() {
    return new CommonElement(this.deleteCostingResultBlock)
  }

  getError(){
    return new CommonElement(this.errorMileage)
  }

  getCloseBtn(){
    return new CommonElement(this.closeBtn)
  }

  getCancel(){
    return new CommonElement(this.cancelBtn)
  }

  getNumberOfLiters(){
    return new CommonElement(this.numberOfLiters)
  }

  getTotalCost(){
    return new CommonElement(this.totalCost)
  }
  
}

const expenses = new Expenses();
export default expenses;
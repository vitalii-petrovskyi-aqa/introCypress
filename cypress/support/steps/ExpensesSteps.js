import expenses from '../pages/Expenses';

const ExpensesSteps = {

  addFuelExpense(mileage, liters, totalCost) {
    expenses.getfuelExpensesBtn().clickElement();
    expenses.getExpenseBtn().clickElement()
    expenses.getAddExpenseMileage().enterValue(mileage);
    expenses.getAddExpenseLiters().enterValue(liters);
    expenses.getAddExpenseTotalCosts().enterValue(totalCost);
    expenses.getAddBtn().clickElement();
  },

  enterMileageField(mileage) {
    expenses.getfuelExpensesBtn().clickElement()
    expenses.getExpenseBtn().clickElement()
    if(mileage){
      expenses.getAddExpenseMileage().enterValue(mileage)
      expenses.getAddExpenseMileage().removeFocus()
    } else 
    expenses.getAddExpenseMileage().enterClear()
    expenses.getAddExpenseMileage().removeFocus()
  },

  enterNumberOfLiters(mileage) {
    expenses.getfuelExpensesBtn().clickElement()
    expenses.getExpenseBtn().clickElement()
    if(mileage){
      expenses.getNumberOfLiters().enterValue(mileage)
      expenses.getNumberOfLiters().removeFocus()
    } else 
    expenses.getNumberOfLiters().enterClear()
    expenses.getNumberOfLiters().removeFocus()
  },

  enterTotalCost(mileage) {
    expenses.getfuelExpensesBtn().clickElement()
    expenses.getExpenseBtn().clickElement()
    if(mileage){
      expenses.getTotalCost().enterValue(mileage)
      expenses.getTotalCost().removeFocus()
    } else 
    expenses.getTotalCost().enterClear()
    expenses.getTotalCost().removeFocus()
  },

  errorFieldisVisible(value) {
    expenses.getError().isVisible()
    expenses.getError().chekingText(value)
  },

  deleteCostingResult(){
    expenses.getDeleteCostingResultBtn().clickElementForce()
    expenses.getRemoveCostingResultBtn().clickElement()
  },

  closeMenu(){
    expenses.getCancel().clickElement()
  }

}

export default ExpensesSteps
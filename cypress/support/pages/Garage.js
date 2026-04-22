import { CommonElement } from '../utils/elements';

class Garage {
  addCarBtn = '.panel-page_heading > .btn' 
  addCarBrandBtn = '#addCarBrand'
  addCarModelBtn = '#addCarModel'
  addCarMileageBtn = '#addCarMileage'
  saveCarBtn  = '.modal-footer > .btn-primary'
  addCarCancelBtn = ' .btn.btn-secondary'
  addCarCloseBtn = "span[aria-hidden='true']"
  editCarBtn = 'button.car_edit.btn.btn-edit'
  removeCarBtn = 'button.btn.btn-outline-danger'
  deleteCarBtn = 'button.btn.btn-danger'
  garageBtn = '.btn.header-link.-active'
  errorMileage = ".invalid-feedback > p" 
  

  gerAddCarBtn(){
    return new CommonElement(this.addCarBtn)
  }

  gerAddCarBrandBtn(){
    return new CommonElement(this.addCarBrandBtn)
  }

  gerAddCarModelBtn(){
    return new CommonElement(this.addCarModelBtn)
  }

  gerAddCarMileageBtn(){
    return new CommonElement(this.addCarMileageBtn)
  }

  getSaveCarAddBtn(){
    return new CommonElement(this.saveCarBtn)
  }

  getAddCarCancelBtn(){
    return new CommonElement(this.addCarCancelBtn)
  }

  getAddCarCloseBtn(){
    return new CommonElement(this.addCarCloseBtn)
  } 

  getEditCarBtn() {
    return new CommonElement(this.editCarBtn);
  }

  getRemoveCarBtn() {
    return new CommonElement(this.removeCarBtn);
  }

  getDeleteCarBtn() {
    return new CommonElement(this.deleteCarBtn);
  }
  getGarageBtn() {
    return new CommonElement(this.garageBtn);
  }
  getErrorMileage(){
    return new CommonElement(this.errorMileage);
  }
}

const garage = new Garage();
export default garage;
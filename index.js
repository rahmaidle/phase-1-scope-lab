// Write your solution in this file!
window.customerName = 'bob';

function upperCaseCustomerName() {
  window.customerName = window.customerName.toUpperCase();
}

function setBestCustomer() {
  window.bestCustomer = 'not bob';
}

function overwriteBestCustomer(newBestCustomer) {
  window.bestCustomer = newBestCustomer;
}

const LEAST_FAVORITE_CUSTOMER = 'not liked';

function changeLeastFavoriteCustomer() {
  LEAST_FAVORITE_CUSTOMER = 'new least favorite'; // this will throw an error
}
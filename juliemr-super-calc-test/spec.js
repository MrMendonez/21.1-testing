// http://juliemr.github.io/protractor-demo/
// Write a test suite that tests addition, modulo and that the **history** table keeps adding more rows

var firstNumber = element(by.model('first'));
var secondNumber = element(by.model('second'));
var goButton = element(by.id('gobutton'));
var operatorButton = element(by.model('operator'));
var latestResult = element(by.binding('latest'));

beforeEach(function(){
  browser.get('http://juliemr.github.io/protractor-demo/');
});

function modulo(a,b) {
  firstNumber.sendKeys(a);
  operatorButton.click().sendKeys('%');
  secondNumber.sendKeys(b);
  goButton.click();
}

it('should find the mod of the two numbers', function(){
  modulo(4,2);
  expect(latestResult.getText()).toEqual('0');
});
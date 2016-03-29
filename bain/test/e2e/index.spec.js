describe('Bain Spec', function() {
  beforeEach(function() {
    browser.get('http://localhost:3456/#/home')
  });

  it('should have a title', function() {
    expect(browser.getTitle()).toEqual('My AngjularJS Page');
  });

  it('should spit out a concatenated first and last name', function() {
    var firstName = element(by.model('firstName'));
    var lastName = element(by.model('lastName'));
    var fullName = element(by.id('fullName'));

    firstName.sendKeys('Jimmy');
    lastName.sendKeys('Mona');

    expect(fullName.getText()).toEqual('Jimmy Mona');
  });

  it('should change the url when clicking the new page route', function() {
    var beforeUrl = browser.getCurrentUrl();
    var link = element(by.id('link'));

    link.click();
    var afterUrl = browser.getCurrentUrl();
    expect(afterUrl).toEqual('http://localhost:3456/#/newpage')
  });


});
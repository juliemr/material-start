var ContactUser = function() {

  this.load = function() {
    return browser.get("/#");
  };

  this.buttons = function() {
    return element.all(by.css('[ng-click="cp.contactWith(item)"]'));
  };

  this.focusedAction = function() {
    browser.wait(function() {
      return $('md-bottom-sheet').isPresent();
    }, 1000);
    return browser.driver.switchTo().activeElement().getText();
  }
};

module.exports = ContactUser;


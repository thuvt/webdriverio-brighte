import detailsPage from '../pages/details.page';
import howmuchcaniborrowPage from '../pages/howmuchcaniborrow.page';
import applyPage from '../pages/apply.page';
import { expected_eligible_amount, expected_maximum_repayment_amount } from '../testdata/data';

describe('Pre-approval Suite', function() {

  it('Add basic details and Continue to the next page', function() {
    
    detailsPage.open();
    detailsPage.addBasicDetails();
    chai.expect(howmuchcaniborrowPage.maritalStatus.isExisting()).to.be.true;
    utilities.takeScreenshot('basic_details');

  });

  it('Add more household details and Calculate Limit', function() {
    
    howmuchcaniborrowPage.addHouseHoldDetails();
    chai.expect(applyPage.eligibleAmount.isExisting()).to.be.true;
    utilities.takeScreenshot('household_details');

  });

  it('Assert the amount user is eligible and maximum repayment amount', function() {

    chai.assert.equal(applyPage.eligibleAmount.getText(), expected_eligible_amount, 'Eligible amount is incorrect');
    chai.assert.equal(applyPage.maximumRepaymentAmount.getText(), expected_maximum_repayment_amount, 'Maximum repayment amount is incorrect');
    utilities.takeScreenshot('preapproval_result');

  });

});



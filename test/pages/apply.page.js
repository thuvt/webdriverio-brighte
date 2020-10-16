import Page from './page';
class ApplyPage extends Page {
    get eligibleAmount() {
        return $('.capacity');
    }
    get maximumRepaymentAmount() {
        return $('.repayment-amount');
    }
   
}
export default new ApplyPage();
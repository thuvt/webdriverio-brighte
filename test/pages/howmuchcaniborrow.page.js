import * as data from '../testdata/data';
import Page from './page';

class HowMuchCanIBorrowPage extends Page {
  get maritalStatusDdl() {
    return $("//form[@id='pre-approval-how-much-can-i-borrow-form']/div[2]");
  }

  get maritalStatus() {
    return $("//form[@id='pre-approval-how-much-can-i-borrow-form']/div[2]//div[@class='select-wrapper']//span[contains(text(),'" + data.marital_status + "')]");
  }

  get dependantsDdl() {
    return $("//form[@id='pre-approval-how-much-can-i-borrow-form']/div[3]");
  }

  get dependants() {
    return $("//form[@id='pre-approval-how-much-can-i-borrow-form']/div[3]//div[@class='select-wrapper']//span[contains(text(),'" + data.dependantsNum + "')]");
  }

  get baseNetIncomeAmount() {
    return $('#base-net-income-amount');
  }

  get baseNetIncomeFrequencyDdl() {
    return $("//form[@id='pre-approval-how-much-can-i-borrow-form']/div[4]//div[@class='select-wrapper']");
  }

  get baseNetIncomeFrequency() {
    return $("//form[@id='pre-approval-how-much-can-i-borrow-form']/div[4]//span[@class='input-group-addon']//span[contains(text(),'" + data.base_net_income_frequency + "')]");
  }

  get partnersBaseNetIncomeAmount() {
    return $("//form[@id='pre-approval-how-much-can-i-borrow-form']/div[5]//input[@id='partners-base-net-income-amount']");
  }

  get partnersBaseNetIncomeFrequencyDdl() {
    return $("//form[@id='pre-approval-how-much-can-i-borrow-form']/div[5]//div[@class='select-wrapper']");
  }

  get partnersBaseNetIncomeFrequency() {
    return $("//form[@id='pre-approval-how-much-can-i-borrow-form']/div[5]//span[@class='input-group-addon']//span[contains(text(),'" + data.partners_base_net_income_frequency + "')]");
  }

  get otherTaxableNetIncomeAmount() {
    return $('#other-taxable-net-income-amount');
  }

  get otherTaxableNetIncomeFrequencyDdl() {
    return $("//form[@id='pre-approval-how-much-can-i-borrow-form']/div[6]//div[@class='select-wrapper']");
  }

  get otherTaxableNetIncomeFrequency() {
    return $("//form[@id='pre-approval-how-much-can-i-borrow-form']/div[6]//span[@class='input-group-addon']//span[contains(text(),'" + data.other_taxable_net_income_frequency + "')]");
  }

  get mortgageRepaymentAmount() {
    return $('#mortgage-repayment-amount');
  }

  get mortgageRepaymentFrequencyDdl() {
    return $("//form[@id='pre-approval-how-much-can-i-borrow-form']/div[7]//div[@class='select-wrapper']");
  }

  get mortgageRepaymentFrequency() {
    return $("//form[@id='pre-approval-how-much-can-i-borrow-form']/div[7]//span[@class='input-group-addon']//span[contains(text(),'" + data.mortgage_repayment_frequency + "')]");
  }

  get otherLoanCommitmentsAmount() {
    return $('#other-loan-commitments-amount');
  }

  get otherLoanCommitmentsFrequencyDdl() {
    return $("//form[@id='pre-approval-how-much-can-i-borrow-form']/div[8]//div[@class='select-wrapper']");
  }

  get otherLoanCommitmentsFrequency() {
    return $("//form[@id='pre-approval-how-much-can-i-borrow-form']/div[8]//span[@class='input-group-addon']//span[contains(text(),'" + data.other_loan_commitments_frequency + "')]");
  }

  get householdCreditCardLimitAmount() {
    return $('#household-credit-card-limit-amount');
  }

  get householdLivingCostsAmount() {
    return $('#household-living-costs-amount');
  }

  get householdLivingCostsFrequencyDdl() {
    return $("//form[@id='pre-approval-how-much-can-i-borrow-form']/div[10]//div[@class='select-wrapper']");
  }

  get householdLivingCostsFrequency() {
    return $("//form[@id='pre-approval-how-much-can-i-borrow-form']/div[10]//span[@class='input-group-addon']//span[contains(text(),'" + data.household_living_costs_frequency + "')]");
  }

  get calculateLimit() {
    return $('button[type="submit"]');
  }

  open() {
    super.open('pre-approvals/how-much-can-i-borrow');
    return this;
  }

  addHouseHoldDetails() {

    this.maritalStatusDdl.click();
    this.maritalStatus.moveTo();
    this.maritalStatus.waitForClickable({ timeout: 3000 });
    this.maritalStatus.click();

    this.dependantsDdl.click();
    this.dependants.moveTo();
    this.dependants.waitForClickable({ timeout: 3000 });
    this.dependants.click();

    this.baseNetIncomeAmount.setValue(data.base_net_income_amount);
    this.baseNetIncomeFrequencyDdl.click();
    this.baseNetIncomeFrequency.click();

    if (data.marital_status === 'Married' || data.marital_status === 'Defacto') {
      this.partnersBaseNetIncomeAmount.click();
      this.partnersBaseNetIncomeAmount.setValue(data.partners_base_net_income_amount);
      this.partnersBaseNetIncomeFrequencyDdl.click();
      this.partnersBaseNetIncomeFrequency.click();
    }

    this.otherTaxableNetIncomeAmount.setValue(data.other_taxable_net_income_amount);
    this.otherTaxableNetIncomeFrequencyDdl.click();
    this.otherTaxableNetIncomeFrequency.click();

    this.mortgageRepaymentAmount.setValue(data.mortgage_repayment_amount);
    this.mortgageRepaymentFrequencyDdl.click();
    this.mortgageRepaymentFrequency.click();

    this.otherLoanCommitmentsAmount.setValue(data.other_loan_commitments_amount);
    this.otherLoanCommitmentsFrequencyDdl.click();
    this.otherLoanCommitmentsFrequency.click();
    
    this.householdCreditCardLimitAmount.setValue(data.household_credit_card_limit_amount);

    this.householdLivingCostsAmount.setValue(data.household_living_costs_amount);
    this.householdLivingCostsFrequencyDdl.click();
    this.householdLivingCostsFrequency.click();

    this.calculateLimit.click();
  }
}

export default new HowMuchCanIBorrowPage();

import Page from './page';
import { email, mobile, name } from '../testdata/data';

class DetailsPage extends Page {

  get name() {
    return $('#full-name');
  }

  get mobile() {
    return $('#mobile');
  }

  get email() {
    return $('#email');
  }

  get continue() {
    return $('button[type="submit"]');
  }

  addBasicDetails() {
    this.name.setValue(name);
    this.mobile.setValue(mobile);
    this.email.setValue(email);
    this.continue.click();
  }

  open() {
    super.open('pre-approvals/details');
    return this;
  }
}

export default new DetailsPage();

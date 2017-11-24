import Gatekeeper from 'ember-cli-gatekeeper';

export default Gatekeeper.SignInController.extend ({
	actions: {
    onSubmit() {
        this.transitionToRoute('signup');
      }
  }
});

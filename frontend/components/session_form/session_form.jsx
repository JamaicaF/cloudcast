import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: "",
      email:"",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentDidMount() {
    this.props.errorClear();
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(this.props.closeModal);
  }

  renderErrors() {
    if (this.props.errors.length) {
      return (
        <ul className="modal-errors">
          {this.props.errors.map((error,idx) => (
            <li key={`error: ${idx}`}>{error}</li>
          ))}
        </ul>
      )
    }
  }

  renderEmail() {
    if (this.props.formType === 'Sign Up') {
      return (
        <input type="text"
          className="modal-form-input"
          placeholder="Enter email"
          value={this.state.email}
          onChange={this.update('email')}
        />
      )
    }
  }

  renderFooter() {
    if (this.props.formType === 'Sign Up') {
      return (
          <div>
            <div className="modal-footer">
              <h2 className="modal-footer-text">Already using Cloudcast?</h2>
              <span className="modal-footer-toggle span-input"
                onClick={this.props.loginForm}>
                &nbsp; Log in here.</span>
            </div>
          <br/>

          <h2 className="modal-footer-text">
            By signing up for a Cloudcast account, you
          <br />
            agree to our Terms & Conditions of use.
          </h2>
        </div>
      )
    } else {
      return (
        <div className="modal-footer">
          <h2 className="modal-footer-text">
            New to Cloudcast? You can</h2>
          <span className="modal-footer-toggle span-input"
            onClick={this.props.signupForm}>
            &nbsp; sign up here.</span>
        </div>

      )
    }
  }

  render () {
    return (
      <div className="login-form-container">
        <section className="modal-header">
          <ul className="modal-list span-input">
            <span onClick={this.props.loginForm}>Log In</span>
            <span onClick={this.props.signupForm}>Sign Up</span>
            <span onClick={this.props.closeModal}>&times;</span>
          </ul>
        </section>

        <form className="login-form" onSubmit={this.handleSubmit}>
          <div className="modal-body">
            {this.renderErrors()}

            {this.renderEmail()}

            <input type="text"
              className="modal-form-input"
              placeholder="Enter your username"
              value={this.state.username}
              onChange={this.update('username')}
              />

            <input type="password"
              className="modal-form-input"
              placeholder="Enter your password"
              value={this.state.password}
              onChange={this.update('password')}
              />

            <input type="submit"
              className="modal-submit"
              value={this.props.formType}
            />

            {this.renderFooter()}
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);

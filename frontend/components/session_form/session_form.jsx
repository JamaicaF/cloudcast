import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
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
    return (
      <ul>
        {this.props.errors.map((error,idx) => (
          <li key={`error: ${idx}`}>{error}</li>
        ))}
      </ul>
    );
  }

  render () {
    return (
      <div className="login-form-container">
        <section className="modal-header">
          <ul>
            {this.props.otherForm}
            {this.props.formType}
          </ul>
        </section>

        <form onSubmit={this.handleSubmit} className="login-form-box">
          <div onClick={this.props.closeModal} className="modal-header">X</div>
          {this.renderErrors()}
          <div className="login-form">
            <br/>

              <input type="text"
                className="login-form-input"
                placeholder="Enter your username"
                value={this.state.username}
                onChange={this.update('username')}
                />
            <br/>

              <input type="password"
                className="login-form-input"
                placeholder="Enter your password"
                value={this.state.password}
                onChange={this.update('password')}
                />
            <br/>

            <input type="submit"
              value={this.props.formType}
              className="green-button"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);

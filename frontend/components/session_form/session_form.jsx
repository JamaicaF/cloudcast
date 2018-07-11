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
        {this.props.otherForm}
        {this.props.formType}
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <div onClick={this.props.closeModal} className="close-x">X</div>
          {this.renderErrors()}
          debugger
          <div className="login-form">
            <br/>

              <input type="text"
                placeholder="Enter your username"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"
                />
            <br/>

              <input type="password"
                placeholder="Enter your password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
                />
            <br/>

            <input type="submit"
              value={this.props.formType}
              className="session-submit"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);

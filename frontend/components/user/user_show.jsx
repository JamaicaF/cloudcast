import React from 'react';

class UserShow extends React.Component {
  constructor(props) {
    super(props) ;
    this.state = {
      loading: true,
    };
    this.handleEdit = this.handleEdit.bind(this);
    this.togglePlayPause = this.togglePlayPause.bind(this);
  }
  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId).then(() => {
      this.setState({ loading: false });
    });
  }

  handleEdit(e) {
    e.preventDefault();
    this.props.history.push('/settings/profile/');
  }

  togglePlayPause() {
    this.props.receivePlaybackCast(this.props.cast.id);
    this.props.togglePlayPause();
  }

  render () {
    if (this.state.loading) return <div />;

    return (
      <div className="">
      </div>
    )
  }

}

export default UserShow;

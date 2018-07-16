import React from 'react';

import CastCreateFormContainer from './cast_create_form_container';
import CastEditFormContainer from './cast_edit_form_container';

class CastUpload extends React.Component {
  constructor(props){
    super(props);

  }

  render () {

    return(
      <div>
        <CastCreateFormContainer />
      </div>
    );
  }
}

export default CastUpload;

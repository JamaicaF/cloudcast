import * as CastApiUtil from '../util/cast_api_util';

export const RECEIVE_ALL_CASTS = "RECEIVE_ALL_CASTS";
export const RECEIVE_CAST = 'RECEIVE_CAST';
export const REMOVE_CAST = 'REMOVE_CAST';
export const RECEIVE_CAST_ERRORS = "RECEIVE_CAST_ERRORS";

const receiveAllCasts = ({ casts, users }) => {
  return {
    type: RECEIVE_ALL_CASTS,
    casts,
    users
  };
};

const receiveCast = (cast) => {
  return {
    type: RECEIVE_CAST,
    cast
  };
};

const removeCast = (id) => {
  return {
    type: REMOVE_CAST,
    id
  };
};

const receiveCastErrors = (errors) => {
  return {
    type: RECEIVE_CAST_ERRORS,
    errors,
  };
};

export const fetchCasts = () => {
  return dispatch => {
    return CastApiUtil.fetchCasts().then((payload) => {
      return dispatch(receiveAllCasts(payload));
    });
  };
};

export const fetchCast = (id) => {
  return dispatch => {
    return CastApiUtil.fetchCast(id).then((cast) => {
      return dispatch(receiveCast(cast));
    });
  };
};

export const createCast = (cast) => {
  return dispatch => {
    return CastApiUtil.createCast(cast).then((cast) => {
      return dispatch(receiveCast(cast));
    }, (error) => {
      return dispatch(receiveCastErrors(error.responseJSON));
    });
  };
};

export const updateCast = (id, cast) => {
  return dispatch => {
    return CastApiUtil.updateCast(id, cast).then((cast) => {
      return dispatch(receiveCast(cast));
    }, (error) => {
      return dispatch(receiveCastErrors(error.responseJSON));
    });
  };
};

export const deleteCast = (id) => {
  return dispatch => {
    return CastApiUtil.deleteCast(id).then(() => {
      return dispatch(removeCast(id));
    });
  };
};

export const errorClear = () => {
  return dispatch => {
    return dispatch(receiveCastErrors([]));
  };
};

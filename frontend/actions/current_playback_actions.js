export const RECEIVE_PLAYBACK_CAST = "RECEIVE_PLAYBACK_CAST";

export const receivePlaybackCast = (id) => {
  return {
    type: RECEIVE_PLAYBACK_CAST,
    id
  };
};

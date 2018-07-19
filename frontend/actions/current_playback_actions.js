export const RECEIVE_PLAYBACK_CAST = "RECEIVE_PLAYBACK_CAST";
export const TOGGLE_PLAY_PAUSE = "TOGGLE_PLAY_PAUSE";

export const receivePlaybackCast = (playbackId) => {
  return {
    type: RECEIVE_PLAYBACK_CAST,
    playbackId
  };
};

export const togglePlayPause = () => {
  return {
    type: TOGGLE_PLAY_PAUSE,
  };
};

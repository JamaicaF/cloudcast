# Cloudcast README

Cloudcast is a single-page, fullstack, music streaming web application inspired by [Mixcloud](https://www.mixcloud.com/). Users can share and listen to radio shows, DJ mixes, podcasts, and other long-form audio content.

[Cloudcast live site](https://cloudcast1.herokuapp.com/)

Cloudcast users can:
- Freely access and listen to a variety of streaming audio programming
- Upload, edit, and delete their own audio programs after creating a personal user account

Cloudcast is and will remain open source.

[View the Cloudcast wiki design documents](https://github.com/JamaicaF/cloudcast/wiki)

# Current Features and Implementation:

### Welcome page
![](https://i.imgur.com/FYfr5FF.jpg)

Users can explore and listen to all audio programming without creating an account. Cloudcast programs are primarily accessible from an indexed list of featured audio content. Upon first play, an audio playback bar loads at the bottom of the page, which persists as the user navigates the site.

### Featured Cloudcasts page
![](https://i.imgur.com/D3SQ4cx.jpg)

From any page in the site, users can create a new account or login, and before uploading content, users are prompted to login. Upon login, users have the option to create new Cloudcast programs, as well as update or destroy their existing content. Any existing Cloudcast program can only be modified by the user who originally contributed it.   

### Backend Structure

Cloudcast follows RESTful API design, and was built using a Ruby on Rails framework and a PostgreSQL database. Users and Casts are the two primary database models, connected via ActiveRecord associations. All uploaded image and audio files are stored with ActiveStorage and Amazon Web Services S3. Data requests are made through AJAX and completed by a JSON API.

```rb
class Cast < ApplicationRecord
  validates :title, :user_id, presence: true

  before_save :ensure_cast_audio, :ensure_cast_image

  belongs_to :user

  has_one_attached :cast_audio
  has_one_attached :cast_image

  def ensure_cast_audio
    unless self.cast_audio.attached?
      errors[:cast_audio] << "Audio must be attached"
    end
  end

  def ensure_cast_image
    unless self.cast_image.attached?
      self.cast_image.attach(io: File.open('app/assets/images/cloud_default.jpg'),
        filename: 'cloud_default.jpg')
    end
  end
end
```

### Frontend Structure

Cloudcast is a single page app built with React.js and Redux. All pages are composed of React components, which are rendered at a root url. Users can
access uploaded audio content for playback via either the featured audio program feed, dedicated individual program pages, or through user profile pages.

To integrate the different methods for triggering playback, and also to facilitate uninterrupted playback across the app, the Redux store contains current playback state.

```js
const defaultState = {
  displayPlaybackBar: false,
  playback: false,
  playbackId: 0,
  muteAudio: false
};

export default (state = defaultState, action) => {
  Object.freeze(state);
  const newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_PLAYBACK_CAST:
      newState.playbackId = action.playbackId;
      newState.displayPlaybackBar = true;
      return newState;
    case TOGGLE_PLAY_PAUSE:
      newState.playback = !newState.playback;
      return newState;
    case TOGGLE_MUTE_UNMUTE:
      newState.muteAudio = !newState.muteAudio;
      return newState;
    default:
      return state;
  }
};
```

The app's `PlaybackBar` component receives this information through props,
and current playback state is updated as a user selects play or pause for each  audio program.  

```js
class PlaybackBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      elapsedTime: 0,
      percentPlayed: 0,
    };
    this.audioTag = React.createRef();
    this.togglePlayPause = this.togglePlayPause.bind(this);
    this.toggleMuteUnmute = this.toggleMuteUnmute.bind(this);
    this.updateTime = this.updateTime.bind(this);
  }

  componentDidUpdate(oldProps) {
    if (this.props.playback && !oldProps.playback) {
      this.audioTag.current.play();
    } else if (oldProps.playbackId != this.props.playbackId) {
      this.props.togglePlayPause();
    } else if (!this.props.playback && oldProps.playback) {
      this.audioTag.current.pause();
    }
  }
  ...
}
```

Real-time audio playback is implemented with an HTML5 Audio element.

# Features in the Making:

Cloudcast is an actively maintained application, and in the future, I plan to:
- Implement audio queuing for continuous audio streaming
- Add user comments and the option to favorite Cloudcast programs
- Include options for audio program genre tags and artist attribute metadata
- Display enhanced audio metadata information during audio playback

# Acknowledgements:

Icon design by [Swifticons]( http://swifticons.com/).

Cloudcast accepts all types of radio content including talk & music radio shows, DJ mix sets, and podcasts. If your work has been posted without permission, please contact me for proper attribution or for your content to be removed.

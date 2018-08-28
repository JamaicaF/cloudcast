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

Users can explore and listen to all audio programming without creating an account. Cloudcast programs are primarily accessible from an indexed list of audio content. Upon first play, an audio playback bar loads at the bottom of the page, which persists as the user navigates the site.

### Featured Cloudcasts page
![](https://i.imgur.com/D3SQ4cx.jpg)

From any page in the site, users can create a new account or login, and before uploading content, users are prompted to login. Upon login, users have the option to create new Cloudcast programs, as well as update or destroy their existing content. Any existing Cloudcast can only be modified by the original content creator.   

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
      errors[:cast_audio] << "must be attached"
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

Cloudcast is a single page app built with React.js and Redux. All pages are composed of React components which are rendered at a root url. Users can
access uploaded audio content for playback either via the 'featured' audio program feed, dedicated individual program pages, or through user profile pages.


# Features in the Making:

Cloudcast is an actively maintained application, and in the future, I plan to:
- Implement audio queuing and uninterrupted audio streaming
- Add users comments and/or the ability to favorite Cloudcast programs
- Include options for users to add genre tags and artist attribute metadata to their audio programs
- Display audio metadata information during audio playback

# Acknowledgements:

Icon design by [Swifticons]( http://swifticons.com/).

Cloudcast accepts all types of radio content including talk & music radio shows, DJ mix sets, and podcasts. If your work has been posted without permission, please contact me for proper attribution or for your content to be removed.

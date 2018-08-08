# == Schema Information
#
# Table name: casts
#
#  id          :bigint(8)        not null, primary key
#  title       :string           not null
#  user_id     :integer          not null
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

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
      self.cast_image.attach(io: File.open('app/assets/images/cloud_default.jpg'), filename: 'cloud_default.jpg')
    end
  end
end

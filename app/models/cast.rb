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

  belongs_to :user

  has_one_attached :cast_audio
  has_one_attached :cast_image

end

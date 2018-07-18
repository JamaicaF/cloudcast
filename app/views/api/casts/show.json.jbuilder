json.extract! @cast, :id, :title, :description
json.userId @cast.user_id
json.castCreator @cast.user.username
json.castAudio url_for(@cast.cast_audio)

if @cast.cast_image.attached?
  json.castImage url_for(@cast.cast_image)
else
  json.nil
end

json.extract! @cast, :id, :title, :description
json.userId @cast.user_id
json.castAudio url_for(@cast.cast_audio)

debugger
if @cast.cast_image.attached?
  json.castImage url_for(@cast.cast_image)
else
  json.nil
end

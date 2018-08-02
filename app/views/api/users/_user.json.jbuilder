json.user do
  json.extract! user, :id, :username, :bio, :country, :city
  json.castIds user.cast_ids

  if user.profile_image.attached?
    json.profileImage url_for(user.profile_image)
  else
    json.nil
  end
end

# json.coverImage user.cover_image

json.casts do
  user.casts.each do |cast|
    json.set! cast.id do
      json.extract! cast, :id, :title
      json.castAudio url_for(cast.cast_audio)

      if cast.cast_image.attached?
        json.castImage url_for(cast.cast_image)
      else
        json.nil
      end
    end
  end
end

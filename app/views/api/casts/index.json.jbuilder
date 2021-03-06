json.casts do
  @casts.each do |cast|
    json.set! cast.id do
      json.extract! cast, :id, :title, :description
      json.userId cast.user_id
      json.castCreator cast.user.username
      json.castAudio url_for(cast.cast_audio)

      if cast.cast_image.attached?
        json.castImage url_for(cast.cast_image)
      else
        json.nil
      end
    end
  end
end

json.users do
  @casts.each do |cast|
    json.set! cast.user_id do
      json.extract! cast.user, :id, :username
    end
  end
end

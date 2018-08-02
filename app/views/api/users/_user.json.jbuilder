json.extract! user, :id, :username
json.castIds user.cast_ids
json.casts user.casts

if user.profile_image.attached?
  json.profileImage url_for(user.profile_image)
else
  json.nil
end

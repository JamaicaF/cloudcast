json.extract! @user, :id, :username, :bio, :country, :city
json.castIds @user.cast_ids
json.profileImage @user.profile_image
json.coverImage @user.cover_image

json.casts do
  @casts.each do |cast|
    json.set! cast.id do
      json.extract! cast, :id, :title, :description
      json.userId cast.user_id
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

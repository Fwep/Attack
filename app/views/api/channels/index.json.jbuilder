json.channels! @channels do |channel|
  json.name channel.name
  json.description channel.description
  json.private channel.private
  json.is_direct? channel.is_direct
  json.members channel.users.id
  json.creator User.find(channel.creator_id).username
end

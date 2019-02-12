json.array! @messages do |message|
  json.id message.id
  json.body message.body
  json.author message.user.username
  json.channel_id message.channel_id
  json.created_at message.created_at
end
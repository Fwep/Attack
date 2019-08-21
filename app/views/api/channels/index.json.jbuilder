json.array! @channels do |channel|
    json.id channel.id
    json.name channel.name
    json.description channel.description
    json.is_private channel.is_private
    json.is_direct channel.is_direct
    json.numUsers channel.users.count
end
json.array! @channels do |channel|
    json.id channel.id
    json.name channel.name
    json.description channel.description
    json.private channel.private
    json.is_direct channel.is_direct
end
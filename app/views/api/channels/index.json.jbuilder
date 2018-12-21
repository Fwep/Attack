json.channels do
  @channels.each do |channel|
    json.set! channel.id do
      json.id channel.id
      json.name channel.name
      json.description channel.description
      json.private channel.private
      json.is_direct? channel.is_direct
      json.creator channel.creator.username
    end
  end
end

json.users do
  @channels.each do |channel|
    channel.users.each do |user|
      json.set! user.id do
        json.id user.id
        json.username user.username
        json.email user.email
      end
    end
  end
end

json.subscriptions do
  @channels.each do |channel|
    channel.users.each do |user|
        user.subscriptions.each do |subscription|
          json.set! subscription.id do
          json.id subscription.id
          json.user_id user.id
          json.channel_id channel.id
          end
        end
      end
  end
end

json.extract! message, :id, :body, :user_id, :channel_id, :created_at, :updated_at
json.author message.user.username

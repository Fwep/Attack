# == Schema Information
#
# Table name: messages
#
#  id         :bigint(8)        not null, primary key
#  user_id    :bigint(8)
#  body       :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  channel_id :bigint(8)
#

class Message < ApplicationRecord
  validates :body, presence: true

  belongs_to :user
  belongs_to :channel
  after_create_commit { MessageBroadcastJob.perform_later( self )}
end

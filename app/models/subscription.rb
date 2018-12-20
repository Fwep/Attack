# == Schema Information
#
# Table name: subscriptions
#
#  id         :bigint(8)        not null, primary key
#  user_id    :bigint(8)
#  channel_id :bigint(8)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Subscription < ApplicationRecord
  validates :user_id, :channel_id, presence: true
  

  belongs_to :user
  belongs_to :channel
end

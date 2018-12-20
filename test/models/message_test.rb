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

require 'test_helper'

class MessageTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

# == Schema Information
#
# Table name: channels
#
#  id          :bigint(8)        not null, primary key
#  creator_id  :integer          not null
#  name        :string           not null
#  description :text
#  private     :boolean          default(FALSE), not null
#  is_direct   :boolean          default(FALSE), not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Channel < ApplicationRecord
end

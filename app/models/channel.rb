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
  validates :name, presence: true, unique: true, length: { maximum: 25 }
  validates :description, length: { maximum: 250 }
  validates :private, :is_direct, inclusion: { in: [:true, :false]}

  belongs_to :user,
    primary_key: :id,
    foreign_key: :creator_id,
    source_name: :User
  has_many :messages
  has_many :users,
    through: :subscriptions

end

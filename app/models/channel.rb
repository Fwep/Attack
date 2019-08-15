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
  before_save :lowercase_channel_name
  validates :name, presence: true, uniqueness: true, length: { maximum: 25 }
  validates :description, length: { maximum: 250 }
  validates :is_private, :is_direct, inclusion: { in: [true, false]}

  belongs_to :creator,
    primary_key: :id,
    foreign_key: :creator_id,
    class_name: :User
  has_many :messages,
    dependent: :destroy

  has_many :subscriptions,
    dependent: :destroy
  has_many :users,
    through: :subscriptions
    
  private
  def lowercase_channel_name
    self.name = self.name.downcase()
  end
end

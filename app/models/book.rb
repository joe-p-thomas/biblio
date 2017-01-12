class Book < ActiveRecord::Base
  validates :title, :author, :description, :image_url, :user_id, presence: true
  validates :title, uniqueness: { scope: :author }

  belongs_to :user

  has_many :shelvings, dependent: :destroy
end

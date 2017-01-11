class Bookshelf < ActiveRecord::Base
  validates :title, :user_id, presence: true
  validates :title, uniqueness: { scope: :user_id }

  belongs_to :user

  has_many :shelvings, dependent: :destroy
  has_many :books, through: :shelvings

end

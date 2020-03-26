class Memory < ApplicationRecord
    has_many :comments
    has_many :memory_songs
    has_many :songs, through: :memory_songs
end

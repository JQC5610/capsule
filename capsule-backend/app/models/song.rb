class Song < ApplicationRecord
    has_many :memory_songs
    has_many :memories, through: :memory_songs


end

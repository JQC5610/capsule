class SongSerializer < ActiveModel::Serializer
  attributes :id, :name, :artist, :duration
end

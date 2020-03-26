class MemorySongSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_one :memory
  has_one :song
end

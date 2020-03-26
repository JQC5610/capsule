class MemorySerializer < ActiveModel::Serializer
  attributes :id, :name, :img_url, :time, :author
end

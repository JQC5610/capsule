class CommentSerializer < ActiveModel::Serializer
  attributes :id, :text
  has_one :memory
end

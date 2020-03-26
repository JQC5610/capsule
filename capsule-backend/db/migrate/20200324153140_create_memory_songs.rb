class CreateMemorySongs < ActiveRecord::Migration[5.1]
  def change
    create_table :memory_songs do |t|
      t.string :name
      t.belongs_to :memory, foreign_key: true
      t.belongs_to :song, foreign_key: true

      t.timestamps
    end
  end
end

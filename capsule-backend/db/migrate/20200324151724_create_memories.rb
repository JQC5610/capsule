class CreateMemories < ActiveRecord::Migration[5.1]
  def change
    create_table :memories do |t|
      t.string :name
      t.string :img_url
      t.string :time
      t.string :author

      t.timestamps
    end
  end
end

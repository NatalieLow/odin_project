class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.belongs_to :author
      t.text :input

      t.timestamps
    end
  end
end

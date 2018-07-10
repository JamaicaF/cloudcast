class CreateCloudcasts < ActiveRecord::Migration[5.2]
  def change
    create_table :cloudcasts do |t|
      t.string :title, null: false
      t.integer :user_id, null: false
      t.text :description

      t.timestamps
    end
    add_index :cloudcasts, :user_id
  end
end

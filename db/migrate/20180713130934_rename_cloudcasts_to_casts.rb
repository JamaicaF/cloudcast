class RenameCloudcastsToCasts < ActiveRecord::Migration[5.2]
  def change
    rename_table :cloudcasts, :casts

  end
end

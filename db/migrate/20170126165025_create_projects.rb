class CreateProjects < ActiveRecord::Migration[5.0]
  def change
    create_table :projects do |t|
      t.string :name
      t.string :image
      t.text :description
      t.string :repo

      t.timestamps
    end
  end
end

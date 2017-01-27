class CreateSnippets < ActiveRecord::Migration[5.0]
  def change
    create_table :snippets do |t|
      t.string :name
      t.text :preface
      t.text :body

      t.timestamps
    end
  end
end

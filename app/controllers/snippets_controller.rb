class SnippetsController < ApplicationController
  def index
    @snippets = Snippet.all.order(id: :asc)
  end
end

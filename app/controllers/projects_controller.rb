class ProjectsController < ApplicationController

  def index
    @projects = Project.all.order(id: :asc).as_json(methods: :fingerprinted_image)
  end

end

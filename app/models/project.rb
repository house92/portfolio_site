class Project < ApplicationRecord

  def fingerprinted_image
    ActionController::Base.helpers.image_path(image)
  end
end

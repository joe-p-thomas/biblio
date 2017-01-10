class StaticPagesController < ApplicationController
  def index
    render 'static_pages/root'
  end
end

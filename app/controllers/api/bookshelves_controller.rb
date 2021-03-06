class Api::BookshelvesController < ApplicationController

  def index
    if current_user
      @bookshelves = Bookshelf.includes(:books).where("user_id = ?", current_user.id)
      render 'api/bookshelves/index'
    else
      render json: {}, status: 200
    end
  end

  def create
    @bookshelf = Bookshelf.new(bookshelf_params)
    @bookshelf.user_id = current_user.id
    if @bookshelf.save
      render 'api/bookshelves/show'
    else
      render json: @bookshelf.errors.full_messages, status: 401
    end
  end

  def update
    @bookshelf = Bookshelf.find(params[:id])
    if @bookshelf.user_id == current_user.id &&
      @bookshelf.update_attributes(bookshelf_params)
      render 'api/bookshelves/show'
    else
      render json: @bookshelf.errors.full_messages, status: 401
    end
  end

  def destroy
    @bookshelf = Bookshelf.find(params[:id])
    if @bookshelf.user_id == current_user.id && @bookshelf.delete
      render json: {}, status: 200
    else
      render json: ['Process not completed'], status: 400
    end
  end

  private

  def bookshelf_params
    params.require(:bookshelf).permit(:id, :title, book_ids: [])
  end

end

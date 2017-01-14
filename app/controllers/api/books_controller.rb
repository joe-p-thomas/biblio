class Api::BooksController < ApplicationController

  def index
    @books = Book.all
    render 'api/books/index'
  end

  def users_books
    @books = current_user.books
    render 'api/books/index'
  end

  def search_books
    param = params[:params].downcase
    @books = Book.where('lower(author) LIKE ? OR lower(title) LIKE ?',
                        "%#{param}%", "%#{param}%")
    render 'api/books/index'
  end

  def show
    @book = Book.find(params[:id])
    render 'api/books/show'
  end

  def create
    @book = Book.new(book_params)
    @book.user_id = current_user.id
    if @book.save
      render 'api/books/show'
    else
      render json: @book.errors.full_messages, status: 401
    end
  end

  def update

  end

  def destroy

  end

  private

  def book_params
    params.require(:book).permit(:title, :author, :description, :image_url)
  end
end

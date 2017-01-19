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

  def book_detail
    @book = Book.find(params[:id])
    @avg_rating = @book.reviews.average(:rating).to_f.round(2)
    if current_user
      @review = @book.reviews.where('user_id = ?', current_user.id).first
    end
    render 'api/books/book_detail'
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
    @book = Book.find(params[:id])
    if @book.update_attributes(book_params)
      render 'api/books/show'
    else
      render json: @book.errors.full_messages, status: 401
    end
  end

  def destroy

  end

  private

  def book_params
    params.require(:book).permit(:title, :author, :description, :image_url,
                                 shelving_ids: [])
  end
end

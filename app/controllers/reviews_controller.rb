class Api::ReviewsController < ApplicationController

  def index
    @reviews = Review.where('book_id = ?', params[:book_id])
    render 'api/reviews/index'
  end

  def create
    @review = Review.new(review_params)
    @review.user_id = current_user.id
    if @review.save
      render 'api/reviews/show'
    else
      render json: @review.errors.full_messages, status: 401
    end
  end

  def update
    @review = Review.find(params[:id])
    if @review.update_attributes(review_params)
      render 'api/reviews/show'
    else
      render json: @review.errors.full_messages, status: 401
    end
  end

  def destroy
    @review = Review.find(params[:id])
    if @review.delete
      render json: {}, status: 200
    else
      render json: ['Process not completed'], status: 400
    end
  end

  private

  def review_params
    params.require(:review).permit(:book_id, :rating, :body)
  end
end

class PostsController < ApplicationController

  before_action :require_login, only: [:new, :create]

  def new
    @post = Post.new
  end

  def create
    #puts "Current user: #{current_user.inspect}"
    @post = Post.new(post_params)
    @post.author = current_user

    if @post.save  && !@post.author.nil?
      redirect_to posts_path
    else
      flash.now[:danger] = "Unsuccessful save.  Please try again."
      render 'new'
    end
  end

  def index
    @posts = Post.all
  end

  private

  def require_login
    unless current_user
      flash[:danger] = "You must be logged to create posts."
      redirect_to login_path
    end
  end

  def post_params
    params.require(:post).permit(:input)
  end
end

class UsersController < ApplicationController
  def new
  end

  def show
    @user = User.find(params[:id])
    puts "Current user: #{current_user}"
  end

  def create
  end

  def update
  end
end

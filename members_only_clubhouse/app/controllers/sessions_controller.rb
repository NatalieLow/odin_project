class SessionsController < ApplicationController
  def new
  end

  def create
    user = User.find_by_email(params[:session][:email].downcase)
    if user && user.authenticate(params[:session][:password])
      self.current_user = user
      puts "Current user: #{current_user}"
      redirect_to controller: 'users', action: 'show', id: current_user.id
      #redirect_to users_path(current_user)
    else
      flash.now[:danger] = 'Invalid email/password combination'
      render 'new'
    end
  end

  def destroy
    puts "Current user: #{current_user.inspect}"
    self.current_user = nil if current_user
    redirect_to login_path
  end
end

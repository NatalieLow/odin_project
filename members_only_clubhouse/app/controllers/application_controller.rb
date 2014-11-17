class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  protected
  def current_user
    @current_user ||= User.find_by(remember_token: cookies.permanent[:remember_token]) if cookies.permanent[:remember_token]
  end
  helper_method :current_user

  def current_user=(user)
    if user
      cookies.permanent[:remember_token] = user.remember_token
    else
      cookies.delete :remember_token
    end
    @current_user = user
  end

  #def sign_in(user)
  #  user.remember
  #  @current_user = user
  #end
  #
  #def sign_out
  #  cookies.delete :remember_token
  #  @current_user = nil
  #end
end

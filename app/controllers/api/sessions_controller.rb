class Api::SessionsController < ApplicationController
  def create
    user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if user.nil?
      render json: 'Credentials are wrong'
    else
      render json: "Welcome back #{user.username}!"
    end
  end

  def new
  end

  def destroy
    logout!
    redirect_to new_session_url # You don't need to redirect
  end
end

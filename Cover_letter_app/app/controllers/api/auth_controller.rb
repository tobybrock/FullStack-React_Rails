class Api::AuthController < ApplicationController
  before_action :user_exists, except: :login

  def login
    user_par = params[:user]
    user = User.find_by_email(user_par[:email])

    if user&.authenticate(user_par[:password])
      token = encode_token user.id
      render json: { user: { id: user.id, email: user.email, name: user.name, token: token } }
    else
      render json: { message: 'Invalid login' }, status: :not_found
    end

  end

  def status
    render json: { message: 'valid user', id: @user_id }, status: :accepted
  end

  def logout
    User.destroy(@user_id)
    render json: { message: 'logged out' }
  end


end
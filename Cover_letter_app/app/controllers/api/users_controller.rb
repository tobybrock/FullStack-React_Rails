class Api::UsersController < ApplicationController

  def index
    render json: User.all
  end

  def show
    user = User.find(user_params)
    render json: { id: user.id, name: user.name, email: user.email }
  end

  def create
    user = User.create(user_params)
    if user.valid?
      render json: user, status: 201
    else
      render json: { message: 'Unable to create user', errors: user.errors.full_messages }, status: 422
      end
  end

  def update
    render json: User.find(user_params).update(user_params)
  end

  def destroy
    render json: User.destroy(user_params)
  end

  private

  def user_params
    params.required(:user).permit(:name, :password_digest, :email)
  end

end

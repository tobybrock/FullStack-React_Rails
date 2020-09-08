class Api::UsersController < ApplicationController
  before_action :user_exists, except: :create

  def index
    render json: User.all
  end

  def show
    render json: User.find(user_params)
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
    user = User.find(params[:id])
    render json: user.update(user_params) # doesn't reset password
  end

  def destroy
    email = User.find_by_id(params[:id])
    User.destroy(params[:id])
    render json: { message: "#{email[:email]} has been deleted" }
  end

  private

  def user_params
    params.required(:user).permit(:name, :password, :email)
  end

end

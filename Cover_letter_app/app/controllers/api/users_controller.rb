class Api::UsersController < ApplicationController
  before_action :user_exists, except: :create

  def index
    user = User.find(@user_id)
    render json: { id: user.id, name: user.name }
  end

  def show
    render json: User.all
  end

  def create
    user = User.create(user_params)
    render json: user, status: 201

  end

  def update
    render json: User.find(@user_id).update(user_params)
  end

  def destroy
    email = User.find_by_id(params[:id])
    User.destroy(params[:id])
    render json: { message: "#{email[:email]} has been deleted" }
  end

  private

  def user_params
    params.require(:user).permit(:name, :password, :email)

  end

end

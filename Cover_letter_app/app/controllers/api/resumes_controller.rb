class Api::ResumesController < ApplicationController
  #before_action :user_exists
  def index
    render json: User.find(@user_id).todos.all
  end

  def create
    render json: User.find(@user_id).todos.create(todo_params)
  end

  def show
    render json: User.find(@user_id).todos.find(params[:id])
  end

  def update
    todo = User.find(@user_id).todos.find(params[:id])
    render json: todo.update(todo_params)
  end

  def destroy
    render json: User.find(@user_id).todos.destroy(params[:id])
  end

  private

  def resume_params
    params.required(:todo).permit(:title, :completed, :description)
  end
end
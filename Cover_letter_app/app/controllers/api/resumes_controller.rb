class Api::ResumesController < ApplicationController
  before_action :user_exists
  def index
    render json: User.find(@user_id).resumes.all
  end

  def create
    render json: User.find(@user_id).resumes.create(resume_params)
  end

  def show
    render json: User.find(@user_id).resumes.find(params[:id])
  end

  def update
    resume = User.find(@user_id).resumes.find(params[:id])
    render json: resume.update(resume_params)
  end

  def destroy
    render json: User.find(@user_id).resumes.destroy(params[:id])
  end

  private

  def resume_params
    params.required(:resume).permit(:name, :phone, :linkedin, :github, :skills, :user_id, experience: [], education: [], project: [])
  end
end
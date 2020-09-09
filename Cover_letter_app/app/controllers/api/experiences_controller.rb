class Api::ExperiencesController < ApplicationController
  before_action :user_exists, except: :resume_id

  def resume_id
    Resume.find(params[:resume_id])
  end

  def index
    render json: resume_id.experiences.all
  end

  def create
    render json: resume_id.experiences.create(experience_params)
  end

  def update
    project = resume_id.experiences.find(experience_params[:id])
    render json: project.update(experience_params)
  end

  def destroy
    render json: resume_id.experiences.destroy(experience_params[:id])
  end

  private

  def experience_params
    params.required(:experience).permit(:organisation, :position, :duration, :desc, :resume_id)
  end
end
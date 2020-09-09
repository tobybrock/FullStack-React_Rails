class Api::EducationsController < ApplicationController
  before_action :user_exists, except: :resume_id

  def resume_id
    Resume.find(params[:resume_id])
  end

  def index
    render json: resume_id.educations.all
  end

  def create
    render json: resume_id.educations.create(education_params)
  end

  def update
    education = resume_id.educations.find(education_params[:id])
    render json: education.update(education_params)
  end

  def destroy
    render json: resume_id.educations.destroy(education_params[:id])
  end

  private

  def education_params
    params.required(:education).permit(:institution, :year, :qualification, :desc, :resume_id)

  end
end
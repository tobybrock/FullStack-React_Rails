class Api::ProjectsController < ApplicationController
  before_action :user_exists, except: :resume_id

  def resume_id
    Resume.find(params[:resume_id])
  end

  def index
    render json: resume_id.projects.all
  end

  def create
    render json: resume_id.projects.create(project_params)
  end

  def update
    project = resume_id.projects.find(project_params[:id])
    render json: project.update(project_params)
  end

  def destroy
    render json: resume_id.projects.destroy(project_params[:id])
  end

  private

  def project_params
    params.required(:project).permit(:title, :link, :desc, :resume_id)

  end
end
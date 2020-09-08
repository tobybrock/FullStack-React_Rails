# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_09_08_151109) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "resumes", force: :cascade do |t|
    t.string "name"
    t.integer "phone"
    t.string "linkedin"
    t.string "github"
    t.string "skills"
    t.string "experience"
    t.string "education"
    t.string "project"
    t.string "references"
  end

  create_table "resumes_educations", force: :cascade do |t|
    t.string "institution"
    t.date "year"
    t.string "qualification"
    t.string "desc"
  end

  create_table "resumes_experiences", force: :cascade do |t|
    t.string "organisation"
    t.string "position"
    t.string "duration"
    t.string "desc"
  end

  create_table "resumes_projects", force: :cascade do |t|
    t.string "title"
    t.string "link"
    t.string "desc"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "password_digest"
  end

end

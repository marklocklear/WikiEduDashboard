# frozen_string_literal: true

class WeeksController < ApplicationController
  respond_to :json

  def destroy
    week = Week.find(params[:id]).destroy
    course = week.course
    DeletedTimelineNotification.new(course)
    render plain: '', status: :ok
  end
end

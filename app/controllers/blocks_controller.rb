# frozen_string_literal: true

class BlocksController < ApplicationController
  respond_to :json

  def destroy
    block = Block.find(params[:id]).destroy
    course = block.course
    DeletedTimelineNotification.new(course)
    render plain: '', status: :ok
  end
end

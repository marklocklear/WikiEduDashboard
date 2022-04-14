class DeletedTimelineNotification < Alert
  def initialize(course)
    @course = course
    create_alerts
  end

  def create_alerts
    alert = Alert.create(type: 'DeletedTimelineAlert', course: @course)
    alert.email_course_admins
  end
end

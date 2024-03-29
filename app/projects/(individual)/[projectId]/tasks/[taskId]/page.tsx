import TaskUI from '@/components/UI/TaskUI/TaskUI'
import { getTask } from './getTask'
import { Description } from '../../(projectId)/Banners/Description'
import { Attachments } from '../../(projectId)/Banners/Attachments'
import { Project } from './Banners/Project'

const TaskId: React.FC<{
  params: { projectId: string, taskId: string }
}> = async (props) => {
  const { projectId, taskId } = props.params

  const { data: task, status } = await getTask(projectId, taskId)

  return (
    <section className='flex items-center flex-col'>
      <div className='flex items-start justify-center gap-8 p-8'>
        {status === 200
          ? (
          <>
            <TaskUI task={task} />
            <div className='space-y-8'>
              <Project project={task?.entity.project} />
              <Description description={task?.entity.description} />
            </div>
            <div className='space-y-8'>
              <Attachments />
            </div>
          </>
            )
          : (
          <h1>Task not found</h1>
            )}
      </div>
    </section>
  )
}

export default TaskId

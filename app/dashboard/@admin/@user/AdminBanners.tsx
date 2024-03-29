import getEntitiesCreatedLastWeek from '@/api-calls/getEntitiesCreatedLastWeek'
import { Issue } from '@/svg/Issue'
import { Project } from '@/svg/Project'
import { Task } from '@/svg/Task'

const AdminBanners: React.FC = async () => {
  const { data } = await getEntitiesCreatedLastWeek()

  const projectsLastWeek = data?.projectsLastWeek
  const tasksLastWeek = data?.tasksLastWeek
  const issuesLastWeek = data?.issuesLastWeek

  return (
    <>
      <div className='flex items-center justify-between gap-4 p-4 rounded-lg shadow-md bg-theming-white100 dark:bg-theming-dark300'>
        <div>
          <h1 className='font-semibold m-0'>New projects</h1>
          <p className='text-center m-0'>{projectsLastWeek} this week</p>
        </div>
        <span className='text-white bg-azure-radiance-300 p-4 rounded-full'>
          <Project />
        </span>
      </div>
      <div className='flex items-center justify-between gap-4 p-4 rounded-lg shadow-md bg-theming-white100 dark:bg-theming-dark300'>
        <div>
          <h1 className='font-semibold m-0'>New tasks</h1>
          <p className='text-center m-0'>{tasksLastWeek} this week</p>
        </div>
        <span className='text-white bg-azure-radiance-300 p-4 rounded-full'>
          <Task />
        </span>
      </div>
      <div className='flex items-center justify-between gap-4 p-4 rounded-lg shadow-md bg-theming-white100 dark:bg-theming-dark300'>
        <div>
          <h1 className='font-semibold m-0'>New issues</h1>
          <p className='text-center m-0'>{issuesLastWeek} this week</p>
        </div>
        <span className='text-white bg-azure-radiance-300 p-4 rounded-full'>
          <Issue />
        </span>
      </div>
    </>
  )
}

export default AdminBanners

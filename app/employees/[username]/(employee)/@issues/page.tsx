import getUserIssuesShowcase from '@/api-calls/getUserIssuesShowcase'
import Link from 'next/link'
import { type Issue } from '@/interfaces/Issue'
import { type UsernameParamsProps } from '@/interfaces/props/UsernameParamsProps'

const CurrentIssues: React.FunctionComponent<UsernameParamsProps> = async ({
  params
}) => {
  const { username } = params
  const { data } = await getUserIssuesShowcase(username, '1', '5')
  const issues = data?.data
  const issuesCount = data?.count

  return (
    <section className='flex items-center flex-col text-sm gap-4 shadow-md px-8 py-4 rounded-lg bg-theming-white100 dark:bg-theming-dark300'>
      <div className='flex items-center gap-4 justify-between border-b-2 border-azure-radiance-200 pb-4'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-6 h-6'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 0 1-1.44-4.282m3.102.069a18.03 18.03 0 0 1-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 0 1 8.835 2.535M10.34 6.66a23.847 23.847 0 0 0 8.835-2.535m0 0A23.74 23.74 0 0 0 18.795 3m.38 1.125a23.91 23.91 0 0 1 1.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 0 0 1.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 0 1 0 3.46'
          />
        </svg>
        <h1 className='text-2xl m-0'>Current issues</h1>
        <h3 className='m-0'>List</h3>
      </div>
      {Array.isArray(issues) && issues.length > 0
        ? (
        <>
          <ul>
            {issues.map((issue: Issue) => (
              <li key={issue.issueId}>
                <Link href={`/issues/${issue.issueId}`}>
                  <p style={{ margin: 0 }}>{issue.name}</p>
                </Link>
              </li>
            ))}
          </ul>
          <h3>
            <Link href={`/employees/${username}/issues?page=1`}>
              See all {issuesCount} issues
            </Link>
          </h3>
        </>
          )
        : (
        <p>Here we will show their current issues.</p>
          )}
    </section>
  )
}

export default CurrentIssues

export type Sort = 'ascending' | 'descending'
export type OrderBy =
  | 'Name'
  | 'Priority'
  | 'Created'
  | 'ProjectCreator'
  | 'Company'
  | 'Employees'
  | 'IssueCreator'
  | 'Task'
  | 'TaskCreator'
  | 'Project'

export interface IFilterProperties {
  page?: string
  pageSize?: string
  secondPageSize?: string
  sort?: Sort
  orderBy?: OrderBy
  // * Example of how to use this:
  // * filterBy: 'priority' or filterBy: 'author'
  // * filterValue: '1' or filterValue: '1-2-3'
  // * Query params will be constructed like this: ?filterBy=priority&filterValue=1
  filterBy?: string
  filterValue?: string
}

export interface IFilter {
  projects: IFilterProperties
  tasks: IFilterProperties
  issues: IFilterProperties
}

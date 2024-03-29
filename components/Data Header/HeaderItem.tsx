import { type HeaderItemProps } from '@/interfaces/props/DataHeaderProps'
import { ArrowDown } from '@/svg/ArrowDown'
import { ArrowUp } from '@/svg/ArrowUp'
import Link from 'next/link'

const HeaderItem: React.FC<HeaderItemProps> = (props) => {
  const Icon = props.icon

  const isLinkSelected =
    props.searchParams.get('orderby') === props.sortValue?.toLowerCase()

  const isStateSelected =
    props.order.orderBy.toLowerCase() === props.sortValue?.toLowerCase()

  if (props.dashboard) {
    return (
      <div
        className='flex gap-2 items-center justify-center'
        style={props.style}
        onClick={() => {
          props.handleSortChange(props.sortValue as string)
        }}
      >
        <Icon />
        <p
          className={`select-none cursor-pointer ${
            isStateSelected ? 'font-bold' : 'font-normal'
          }`}
        >
          {props.label}
        </p>
        {isStateSelected &&
          (props.order.sort === 'ascending' ? <ArrowUp /> : <ArrowDown />)}
      </div>
    )
  } else if (props.pushSearchParams) {
    return (
      <Link
        className='flex gap-2 items-center justify-center'
        style={props.style}
        href={`${
          props.currentPath
        }?orderby=${props.sortValue?.toLowerCase()}&sort=${
          isLinkSelected
            ? props.searchParams.get('sort')?.toString() === 'ascending'
              ? 'descending'
              : 'ascending'
            : 'ascending'
        }`}
      >
        <Icon />
        <p
          className={`select-none cursor-pointer ${
            isLinkSelected ? 'font-bold' : 'font-normal'
          }`}
        >
          {props.label}
        </p>
        {isLinkSelected &&
          (props.searchParams.get('sort')?.toString() === 'ascending'
            ? (
            <ArrowUp />
              )
            : (
            <ArrowDown />
              ))}
      </Link>
    )
  } else {
    return (
      <div className='flex gap-2 items-center justify-center' style={props.style}>
        <Icon />
        <p className='select-none'>{props.label}</p>
      </div>
    )
  }
}

export default HeaderItem

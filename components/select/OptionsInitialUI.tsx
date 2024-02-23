import Image from 'next/image'
import { type SelectUIProps } from './SelectUI'
import DefaultValue from './DefaultValue'

const OptionsInitialUI: React.FC<Partial<SelectUIProps>> = (props) => {
  const selectedOptImg = props.selectedOption?.picture ?? ''

  return (
    <div
      onClick={() => props.onShowDropdown?.()}
      className='flex items-center justify-end gap-4 select-none cursor-pointer'
    >
      {selectedOptImg !== '' && (
        <Image
          src={props.selectedOption?.picture as string}
          alt={props.selectedOption?.label as string}
          width={25}
          height={25}
          className='rounded-full'
        />
      )}
      {/* <div className={`text-${props.disabled === true ? 'gray' : 'red'}`}> */}
      {props.selectedOption !== null
        ? (
        <span className='capitalize font-semibold text-black dark:text-white'>
          {props.selectedOption?.label}
        </span>
          )
        : (
        <DefaultValue defaultValue={props.defaultValue} />
          )}
      {/* </div> */}
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 20 20'
        fill='currentColor'
        className='w-5 h-5'
      >
        <path
          fillRule='evenodd'
          d='M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z'
          clipRule='evenodd'
        />
      </svg>
    </div>
  )
}

export default OptionsInitialUI

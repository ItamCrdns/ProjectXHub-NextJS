import { useState } from 'react'
import { Button } from '@/components/Button/Button'
import { NewClientForm } from './NewClientForm'
import { type CreateNewClientProps } from '@/interfaces/props/CreateNewClientProps'
import { Divider, TextInput } from '@tremor/react'

const CreateNewClient: React.FC<CreateNewClientProps> = (props) => {
  const [toggle, setToggle] = useState<boolean>(false)

  return (
    <div className='h-20'>
      <Divider>Or</Divider>
      {!toggle && props.clientName === '' && (
        <Button
          text='Create new client instead'
          func={() => {
            setToggle(true)
          }}
          disabled={props.companySelected}
        />
      )}
      {toggle && (
        <NewClientForm
          closeForm={() => {
            setToggle(false)
          }}
          clientName={props.clientName}
        />
      )}
      {props.clientName !== '' && !toggle && (
        <div className='flex items-center justify-center gap-4'>
          <TextInput type='text' value={props.clientName} disabled />
          <svg
            onClick={() => {
              setToggle(true)
            }}
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6 hover:text-azure-radiance-700 cursor-pointer'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10'
            />
          </svg>
        </div>
      )}
    </div>
  )
}

export default CreateNewClient

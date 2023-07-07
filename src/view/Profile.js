import { useParams } from 'react-router-dom'
import { Tab } from '@headlessui/react'
import { CheckCircleIcon } from '@heroicons/react/20/solid'
import { profile } from '../data'

const Profile = () => {
  const { id } = useParams()
  const user = profile.find(user => user.id == id)

  return (
    <div className='bg-white'>
      <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8'>
        <div className='lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8'>
          {/* Image gallery */}
          <Tab.Group as='div' className='flex flex-col-reverse'>
            <img
              src={user.imageUrl}
              alt={user.imageUrl}
              className='h-full w-full object-cover object-center sm:rounded-lg'
            />
          </Tab.Group>

          <div className='mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0'>
            <h1 className='text-3xl font-bold tracking-tight text-gray-900'>{user.name}</h1>
            <div className='mt-6'>
              <h2 className='text-lg font-medium text-gray-900'>Team member</h2>
              <p className='mt-1 text-gray-500'>{user.role}</p>
            </div>
            <div className='mt-6'>
              <h2 className='text-lg font-medium text-gray-900'>Email</h2>
              <p className='mt-1 text-gray-500'>{user.email}</p>
            </div>
            <div className='mt-6'>
              <h2 className='text-lg font-medium text-gray-900'>About</h2>
              <p className='mt-1 text-gray-500'>{user.about}</p>
            </div>
            <div className='mt-6'>
              <ul
                role='list'
                className='mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base leading-7 sm:grid-cols-2 text-gray-500'
              >
                {user.benefits.map(benefit => (
                  <li key={benefit} className='flex gap-x-3'>
                    <CheckCircleIcon className='h-7 w-5 flex-none' aria-hidden='true' />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile

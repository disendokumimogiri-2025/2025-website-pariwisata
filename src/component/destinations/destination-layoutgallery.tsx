import type { DestinationDataInterface } from '../../constant/data-types';

export default function DestinationLayoutgallery({ data }: { data: DestinationDataInterface[] }) {
  console.log(data)
  return (
    <div className='w-full h-full px-10 space-y-12 md:space-y-32'>

      <div className='space-y-5'>
        <h1 className="text-xl">Tempat Wisata</h1>
        <div className='flex items-center space-x-5'>
          {/* main destination show case */}
          <div className='w-[28vw] aspect-3/4 bg-gray-300 rounded-md hidden xl:block' />

          {/* support destination showcase */}
          <div className='w-full xl:w-[72vw] overflow-x-scroll hide-scrollbar'>
            <div className='flex flex-nowrap items-center space-x-2'>
              <div className='w-[85%] md:w-[45%] shrink-0 aspect-6/5 border border-gray-400 rounded-md'>
                <div className='w-full aspect-6/5 bg-gray-300' />
              </div>
              <div className='w-[85%] md:w-[45%] shrink-0 aspect-6/5 border border-gray-400 rounded-md'>
                <div className='w-full aspect-6/5 bg-gray-300' />
              </div>
              <div className='w-[85%] md:w-[45%] shrink-0 aspect-6/5 border border-gray-400 rounded-md'>
                <div className='w-full aspect-6/5 bg-gray-300' />
              </div>
              <div className='w-[85%] md:w-[45%] shrink-0 aspect-6/5 border border-gray-400 rounded-md'>
                <div className='w-full aspect-6/5 bg-gray-300' />
              </div>
              <div className='w-[85%] md:w-[45%] shrink-0 aspect-6/5 border border-gray-400 rounded-md'>
                <div className='w-full aspect-6/5 bg-gray-300' />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='space-y-5'>
        <h1 className="text-xl">Kuliner Lumbung Mataraman</h1>
        <div className='flex items-center space-x-5'>
          {/* main destination show case */}
          <div className='w-[28vw] aspect-3/4 bg-gray-300 rounded-md hidden xl:block' />
          <div className='w-[28vw] aspect-3/4 bg-gray-300 rounded-md hidden xl:block' />

          {/* support destination showcase */}
          <div className='w-full xl:w-[44vw] overflow-x-scroll hide-scrollbar'>
            <div className='flex flex-nowrap items-center space-x-2'>
              <div className='w-[85%] md:w-[45%] shrink-0 aspect-6/5 border border-gray-400 rounded-md'>
                <div className='w-full aspect-6/5 bg-gray-300' />
              </div>
              <div className='w-[85%] md:w-[45%] shrink-0 aspect-6/5 border border-gray-400 rounded-md'>
                <div className='w-full aspect-6/5 bg-gray-300' />
              </div>
              <div className='w-[85%] md:w-[45%] shrink-0 aspect-6/5 border border-gray-400 rounded-md'>
                <div className='w-full aspect-6/5 bg-gray-300' />
              </div>
              <div className='w-[85%] md:w-[45%] shrink-0 aspect-6/5 border border-gray-400 rounded-md'>
                <div className='w-full aspect-6/5 bg-gray-300' />
              </div>
              <div className='w-[85%] md:w-[45%] shrink-0 aspect-6/5 border border-gray-400 rounded-md'>
                <div className='w-full aspect-6/5 bg-gray-300' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

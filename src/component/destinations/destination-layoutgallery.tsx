import type { CulinaryDataInterface, DestinationDataInterface } from '../../constant/data-types';
import { MainCullinaryDestinationCard, MainGalleryDestinationCard, SecCullinaryDestinationCard, SecGalleryDestinationCard } from './gallery-card';

export default function DestinationLayoutgallery(
  { data, culinary }: { data: DestinationDataInterface[] | undefined; culinary: CulinaryDataInterface[] | undefined }
) {
  console.log(data)
  return (
    <div className='w-full h-full px-10 space-y-12 md:space-y-32'>

      <div className='space-y-5'>
        <h1 className="text-xl">Tempat Wisata</h1>
        <div className='flex items-center space-x-5'>

          {/* main destination show case */}
          <MainGalleryDestinationCard />

          {/* support destination showcase */}
          <div className='w-full xl:w-[72vw] overflow-x-scroll hide-scrollbar'>
            <div className='flex flex-nowrap items-center space-x-2'>
              {data?.slice(1, data.length).map((_d, idx) => (
                <SecGalleryDestinationCard key={idx} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className='space-y-5'>
        <h1 className="text-xl">Kuliner Lumbung Mataraman</h1>
        <div className='flex items-center space-x-5'>
          {/* main cullinery show case */}
          {culinary?.slice(0, 2).map((_d, idx) => (
            <MainCullinaryDestinationCard key={idx} />
          ))}

          {/* support cullinery showcase */}
          <div className='w-full xl:w-[44vw] overflow-x-scroll hide-scrollbar'>
            <div className='flex flex-nowrap items-center space-x-2'>
              {culinary?.slice(2, culinary.length).map((_d, idx) => (
                <SecCullinaryDestinationCard key={idx} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

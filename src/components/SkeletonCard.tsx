const SkeletonCard = () => {
  return (
      <div className='py-4 shadow-md w-56 pb-0 animate-pulse bg-gray-200 rounded-3xl'>
        <div className='flex p-3 space-x-2 sm:px-8'>
          <div className='w-3/5 flex-shrink-0 h-8 rounded-md bg-gray-400'></div>
          <div className='flex-1 py-2 space-y-3'>
            <div className='w-5/6 h-3 rounded '></div>
          </div>
        </div>
        <div className='p-4 space-y-4 sm:px-8'>
          <div className='w-1/3 h-3 rounded bg-gray-400'></div>
          <div className='w-1/3 h-3 rounded bg-gray-400'></div>
        </div>
      </div>

  );
};

export default SkeletonCard;

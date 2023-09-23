const ModalSkeleton = () => {
  return (
    <div className='w-full h-full flex max-sm:flex-col-reverse items-center gap-x-5 justify-around'>
      <div className='w-1/3 max-sm:w-[50%] flex flex-col gap-y-3 items-center my-auto'>
        <div className='w-40 h-56 animate-pulse bg-gray-500 rounded-lg'></div>
        <div className='w-10 h-8 bg-gray-300 rounded-lg'></div>
      </div>
      <div className='w-2/3 max-sm:w-[90%] flex flex-col'>
        <div className='mb-5'>
          <div className='space-y-2 mb-5'>
            <div className='w-40 h-9 rounded-md bg-gray-400'></div>
            <div className='flex gap-x-2'>
              <div className='w-12 h-5 bg-gray-200 rounded-full'></div>
              <div className='w-12 h-5 bg-gray-200 rounded-full'></div>
            </div>
          </div>

          <div className='space-y-2 mb-5'>
            <div className='w-36 h-8 rounded-md bg-gray-400'></div>
            <div className='flex gap-x-2'>
              <div className='w-12 h-5 bg-gray-200 rounded-full'></div>
              <div className='w-12 h-5 bg-gray-200 rounded-full'></div>
              <div className='w-12 h-5 bg-gray-200 rounded-full'></div>
            </div>
          </div>
        </div>

        <div className='space-y-5'>
          <div className='flex items-center gap-x-5'>
            <div className='w-8 h-4 bg-gray-200 rounded-full'></div>
            <div className='w-[80%] animate-pulse h-4 bg-gray-400 rounded-full'></div>
          </div>{" "}
          <div className='flex items-center gap-x-5'>
            <div className='w-8 h-4 bg-gray-200 rounded-full'></div>
            <div className='w-[80%] animate-pulse h-4 bg-gray-400 rounded-full'></div>
          </div>
          <div className='flex items-center gap-x-5'>
            <div className='w-8 h-4 bg-gray-200 rounded-full'></div>
            <div className='w-[80%] animate-pulse h-4 bg-gray-400 rounded-full'></div>
          </div>
          <div className='flex items-center gap-x-5'>
            <div className='w-8 h-4 bg-gray-200 rounded-full'></div>
            <div className='w-[80%] animate-pulse h-4 bg-gray-400 rounded-full'></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalSkeleton;

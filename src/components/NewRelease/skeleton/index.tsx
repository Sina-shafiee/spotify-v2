const Skeleton = () => {
  return (
    <div className='grid-layout'>
      {Array(12)
        .fill(0)
        .map((_, i) => {
          return (
            <div
              key={i}
              className='card max-w-xs min-h-[300px] mt-4 animate-pulse bg-gray-500 hover:bg-gray-400'
            ></div>
          );
        })}
    </div>
  );
};

export default Skeleton;

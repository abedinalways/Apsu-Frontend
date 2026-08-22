import React from 'react';

function CustomButton({ children }: { children: React.ReactNode }) {
  return (
    <div className=" text-center mt-3">
      <button className=' px-6 py-[14px] cursor-pointer bg-secondaryColor rounded-xl text-blackColor font-medium text-lg'>{children}</button>
    </div>
  )
}

export default CustomButton

import React, {useState} from 'react'

export const CurrentApr = () => {
    const [value, setValue] = useState('')
  return (
    <>
      <div className="flex items-center mt-1 border border-gray-300">
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="p-2 w-full bg-[#F4FBFD] border-r border-gray-300 shadow-inner text-black"
          placeholder="APR"
        />
        <span className="flex items-center justify-center border-gray-300 px-2 text-gray-700">
          %
        </span>
      </div>
    </>
  );
}

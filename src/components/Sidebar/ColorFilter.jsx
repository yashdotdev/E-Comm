import React from 'react'

export const ColorFilter = () => {
  return (
    <>
    <div className="px-0 py-2 mb-4">
        <h2 className="text-gray-800 text-sm font-semibold tracking-wide uppercase">
          Color
        </h2>
      </div>
      <div className="flex gap-3 mb-8">
        {["blue", "red", "black", "green", "yellow", "pink", "gray"].map(
          (clr) => (
            <div
              key={clr}
              className={`w-5 h-5 rounded-full cursor-pointer border border-gray-300`}
              style={{ backgroundColor: clr }}
            />
          )
        )}
      </div>
    </>
        
    
  )
}



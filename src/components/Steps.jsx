import React from 'react'

const Steps = ({dataRecipe}) => {
  return (
    <div className='mt-10 w-full lg:w-[60%]'>
      <h1 className='text-2xl font-[kalam] font-semibold'>Ingredients</h1>
      <div className='mt-4'>
        <ol>
          {dataRecipe.extendedIngredients.map((item, index) => (
            <li key={index}>- {item.original}</li>
          ))}
        </ol>
      </div>
      <div>
        <h1 className='text-2xl font-[kalam] font-semibold mt-10'>Instructions</h1>
        <div className='mt-4'>
          <ol>
            {dataRecipe.analyzedInstructions[0].steps.map((item, index) => (
              <div  key={index} className='flex items-center gap-8 mb-3'>
                <div>
                  <p className='p-1 w-7 bg-orange-400 rounded-full text-center text-xs text-white font-bold'>{index + 1}</p>
                </div>
                <li className='lg:w-1/2'>{item.step}</li>
              </div>
            ))}
          </ol>
        </div>
      </div>
    </div>
  )
}

export default Steps
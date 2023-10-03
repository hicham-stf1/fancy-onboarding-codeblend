import React from 'react';

const OnboardingStep = ({ stepNumber, title, description, imageUrl }) => {
  return (
    <div className="bg-white p-6 rounded-lg">
      <div className="flex items-center text-xl font-bold justify-center w-12 h-12 rounded-full bg-[#EA943C] text-white">
        {stepNumber}
      </div>
      <h2 className="text-xl font-semibold mt-4 mb-2">{title}</h2>
      <div className='flex justify-center items-center my-3'>
        {imageUrl && (
          <img
            src={imageUrl}
            alt="Step Image"
            className="my-2 w-[300px] h-[200px] object-cover"
          />
        )}
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default OnboardingStep;

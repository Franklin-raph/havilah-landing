import React from 'react'

interface TestimonialProps {
    quote: string;
    description: string;
    name: string;
    title: string;
    imageUrl: string;
  }

const TestimonialCard = ({ quote, description, name, title, imageUrl } : TestimonialProps) => {
  return (
    <div className="px-[36px] py-10 mx-auto bg-white rounded-[16px] cursor-pointer">
      <blockquote>
        “{quote}”
      </blockquote>
      <p className="font-[300] my-[40px]">
        {description}
      </p>
      <div className="flex items-center space-x-4">
        <img className="w-10 h-10 rounded-full" src={imageUrl} alt={name} />
        <div>
            <p className="text-sm font-medium text-gray-900">{name}</p>
            <p className="text-sm text-gray-500">{title}</p>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard
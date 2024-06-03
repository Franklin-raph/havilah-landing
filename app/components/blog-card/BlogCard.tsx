import React from 'react'


interface BlogCardComponentProps {
    date: string;
    category: string;
    title: string;
    imageSrc: string;
    link: string;
  }

const BlogCard = ({ date, category, title, imageSrc, link } : BlogCardComponentProps) => {
  return (
    <div className="max-w-sm mx-auto bg-white p-3 rounded-lg shadow-lg">
      <img src={imageSrc} alt={title} className="w-full h-48 object-cover rounded-lg" />
      <div className="mt-4">
        <div className='flex items-center justify-between'>
            <p className="text-gray-500 text-sm">{date}</p>
            <p className="text-green-600 text-sm font-semibold">{category}</p>
        </div>
        <h2 className="text-gray-800 text-xl font-[500] mt-4 leading-[26px] tracking-[-1.5px] ">{title}</h2>
      </div>
      <div className="mt-8">
        <a 
          href={link} 
          className="text-blue-600 hover:underline"
        >
          Read Blog
        </a>
      </div>
    </div>
  )
}

export default BlogCard
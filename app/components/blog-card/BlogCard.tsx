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
    <div className="bg-white p-3 rounded-[16px]">
      <img src={imageSrc} alt={title} className="w-full h-50 object-cover rounded-lg" />
      <div className="mt-4">
        <div className='flex items-center justify-between'>
            <p className="text-gray-500 text-sm">{date}</p>
            <p className="text-sm text-gradient">{category}</p>
        </div>
        <h2 className="text-gray-800 text-xl font-[500] mt-4 leading-[26px]">{title}</h2>
      </div>
      <div className="mt-[1.5rem] mb-5 ml-[10px]">
        <a 
          href={link} 
          className="text-black hover:underline text-[12px]"
        >
          Read Blog
        </a>
      </div>
    </div>
  )
}

export default BlogCard
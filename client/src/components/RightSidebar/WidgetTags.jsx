import React from 'react'

const WidgetTags = () => {
    const tags = ['C', 'C++', 'java', 'javascript', 'mern', 'mongodb', 'firebase', 'html' , 'mysql', 'next.js', 'php', 'python', 'react.js', 'erpress']
  return (
    <div className='widget-tags'>
        <h4>Watched tags</h4>
        <div className='widget-tags-div'>
            {
                tags.map((tag) => (
                    <p key={tag}>{tag}</p>
                ))
            }
        </div>
      
    </div>
  )
}

export default WidgetTags

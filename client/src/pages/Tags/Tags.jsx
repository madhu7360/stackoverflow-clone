import React from 'react'

import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import TagsList from './TagsList'
import './Tags.css'

const Tags = () => {
    const tagsList = [
        {
            id:1,
            tagName: 'javascript',
            tagDesc: "JavaScript is a lightweight, cross-platform, and interpreted compiled programming language which is also known as the scripting language for webpages. It is well-known for the development of web pages, many non-browser environments also use it. JavaScript can be used for Client-side developments as well as Server-side developments."
        },
        {
            id:2,
            tagName: 'react js',
            tagDesc: "ReactJS is a declarative, efficient, and flexible JavaScript library for building reusable UI components. It is an open-source, component-based front end library responsible only for the view layer of the application. It was created by Jordan Walke, who was a software engineer at Facebook."
        },
        {
            id:3,
            tagName: 'Node js',
            tagDesc: "Node. js is a platform built on Chrome's JavaScript runtime for easily building fast and scalable network applications. Node. js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices."
        },
        {
            id:4,
            tagName: 'python',
            tagDesc: "Python is a dynamic, interpreted (bytecode-compiled) language. There are no type declarations of variables, parameters, functions, or methods in source code. This makes the code short and flexible, and you lose the compile-time type checking of the source code."
        },
        {
            id:5,
            tagName: 'mongodb',
            tagDesc: "A record in MongoDB is a document, which is a data structure composed of field and value pairs. MongoDB documents are similar to JSON objects. The values of fields may include other documents, arrays, and arrays of documents."
        },
        {
            id:6,
            tagName: 'c++',
            tagDesc: "C++ is a general-purpose programming language that was developed as an enhancement of the C language to include object-oriented paradigm. It is an imperative and a compiled language."
        },
    ]
  return (
    <div className='home-container-1'>
     <LeftSidebar/>
     <div className='home-container-2'>
        <h1 className='tags-h1'>Tags</h1>
        <p className='tags-p'>A tag is a keyword or label that categorizes your question with other , similar questions.</p>
        <p className='tags-p'>Using the right tags makes it easier for others to find and answer your question.</p>
        <div className='tags-list-container'>
            {
                tagsList.map((tag) => (
                    <TagsList tag={tag}  key={tagsList.id}/>
                ))
            }
        </div>
     </div>
    </div>
  )
}

export default Tags

import React from 'react';
import { Blog } from '..';
import "./BlogTable.css";
import { blogData } from '../data/data';


function BlogTable() {
    return (
        <div className='blogtable'>
        
            {blogData.map((data, idx) => (
                <Blog key={idx}
                    title={data.title}
                    image={data.image}
                    author={data.author}
                    published={data.published}
                    id={data.id}
                    snippet={data.snippet}
                    content={data.content}
                />
            ))}
        </div>
    )
}

export default BlogTable

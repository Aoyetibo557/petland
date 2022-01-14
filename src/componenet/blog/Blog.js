import React from 'react';
import { Link } from 'react-router-dom';
import "./Blog.css"

function Blog({id,image, title, content, snippet,  author, published}) {
    return (
        <div className='blog'>
            <div>
                {/* Imgage */}
                <img className='blog__image' src={image} alt={image} />
                <p className='blog__published'><span>Published</span> - {published}</p>
            </div>

            <div>
                {/* snippet */}
                <h4 className='blog__title'>{title}</h4>
                <p className='blog__content'>
                    {snippet}
                </p>
            </div>

            <div>
                {/* author */}
                <h5 className='blog__author'> Written by - {author}</h5>
                

            </div>

            <div>
                <Link to={`/blog/${id}`} className='blog__btn'>Read Article</Link>
            </div>
        </div>
    )
}

export default Blog

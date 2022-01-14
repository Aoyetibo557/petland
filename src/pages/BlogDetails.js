import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Blog, Footer, Header } from '../componenet'
import { blogData } from '../componenet/data/data';

function BlogDetails() {
    const [details, setDetails] = useState({});
    const { blogid } = useParams();

    useEffect(() => {
        setDetails(findBlog(blogid));
    },[blogid])

    const findBlog = (id) => {
        return blogData.find((ele) =>  {
            return ele.id === id;
        })
    }

    return (
        <div className='blogdetails'>
            <Header />
            <section className='blogdetails__container'>
                <div>
                    <h4 className='blogdetails__title'>{details.title}</h4>
                    <p className='blogdetails__published'> {details.published} by <span>{details.author}</span> </p>
                </div>
                <img className='blogdetails__img' src={details.image} alt= {details.title}/>

                <div className='blogdetails__content'>
                    <h5 className='blogdetails__subtitle'>{details.subtitle}</h5>
                    <p>
                        {details.content}
                    </p>
                </div>

                <div className='blogdetails__btm'>
                    
                </div>

            </section>

           

            <div>
                <Footer />
            </div>
        </div>
    )
}

export default BlogDetails

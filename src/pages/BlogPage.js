import React from 'react';
import "./styles.css";
import { BlogTable, Footer, Header } from '../componenet'
import BlogImage from "../images/blogimage.jpg";


function BlogPage() {
    return (
        <div className='blogpage'>
            <Header />

            <section className='blogpage__container'>
                <div className='blogpage__topdiv'> 
                    <img className='blogpage__img' src={BlogImage} alt="blog" />
                    <div>
                        <h4>Need Help With Your Pet?</h4>
                        <h4>Check Out Some Neat Tricks From Other Pet Parents</h4>
                    </div>
                </div>

                <div>
                    {/* Blogs */}
                     <BlogTable />
                     {/* <BlogTable /> */}

                </div>
                
            </section>

            <div>
                <Footer />
            </div>
        </div>
    )
}

export default BlogPage

import React from "react";

import Section from "../shared/section";
import Blog1 from "../../images/blogs/blog-thumb-1.jpg";
import Blog2 from "../../images/blogs/blog-thumb-2.jpg";
import Blog3 from "../../images/blogs/blog-thumb-3.jpg";

import "./style.scss";

import BlogCard from "./blog-card";

const Blogs = () => {
    return (
        <Section
            id="blogs"
            title="Blogs & Articles"
            background="dark"
        >
            <div className="blogs-content-wrapper">
                <BlogCard
                    user="Ashish Sagar"
                    date="Jul 30 2023"
                    image={Blog1}
                    title="What is Lorem Ipsum?"
                    description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
                />
                <BlogCard
                    user="Ashish Sagar"
                    date="Jul 30 2023"
                    image={Blog2}
                    title="What is Lorem Ipsum?"
                    description="It is a long established fact that a reader will."
                />
                <BlogCard
                    user="Ashish Sagar"
                    date="Jul 30 2023"
                    image={Blog3}
                    title="What is Lorem Ipsum?"
                    description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
                />
            </div>
        </Section>
    );
};

export default Blogs;

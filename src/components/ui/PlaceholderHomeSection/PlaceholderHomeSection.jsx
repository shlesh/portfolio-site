import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { PlaceholderSection } from './PlaceholderHomeSection.styles';

const BlogHomeSection = () => {
    const { title, desc } = useSelector(state => state.data.pageContent.homeblog);

    return (
        <>
            <Link to="/about">
                <PlaceholderSection className="blog-section">
                    <div className="container">
                        <h2>{title}</h2>
                        <h2>{desc}</h2>
                    </div>
                </PlaceholderSection>
            </Link>
        </>
    );
};

export default BlogHomeSection;

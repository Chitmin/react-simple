import React from 'react';

interface ArticleProps {
    title: string;
    content: string;
    time: string;
}

const Article: React.FC<ArticleProps> = ({ title, content, time }) => {
    return (
        <div>
            <h3>{title}</h3>
            <p>{content}</p>
            <span>{time}</span>
        </div>
    );
};

export default Article;

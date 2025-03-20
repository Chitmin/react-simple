import React from 'react';
import Article from './Article';

const HappeningNow: React.FC = () => {
    return (
        <div>
            <h2>HAPPENING NOW</h2>
            <Article title="Large article title" content="Lorem ipsum dolor sit amet..." time="2m ago" />
        </div>
    );
};

export default HappeningNow;

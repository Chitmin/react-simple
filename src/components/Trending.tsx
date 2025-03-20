import React from 'react';
import Article from './Article';

const Trending: React.FC = () => {
    return (
        <div>
            <h2>TRENDING</h2>
            <Article title="Dolore magna aliqua" content="Lorem ipsum dolor sit amet..." time="2m ago" />
            <Article title="Morbi eleifend a libero" content="Lorem ipsum dolor sit amet..." time="1m ago" />
        </div>
    );
};

export default Trending;

import React from 'react';
import Heading from './Heading.js';

export default function NewsList(props) {
    return (
        <div className="NewsList">
            <Heading content="News"/>
            <ul>
                <li>Example 1</li>
                <li>Example 2</li>
                <li>Example 3</li>
            </ul>
        </div>
    );
}


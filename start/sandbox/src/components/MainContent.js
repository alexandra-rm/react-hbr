import React from 'react';

import Paragraph from './Paragraph';
import List from './List';
import './MainContent.css';

const MainContent = () => (
    <main className="main">
        <Paragraph />
        <Paragraph text="This is the second paragraph"/>
        <List />
    </main>
);

export default MainContent;

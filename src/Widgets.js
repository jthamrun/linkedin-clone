import React from 'react';
import './Widgets.css';
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {
    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )
    return (
        <div className='widgets'>
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>

            {newsArticle("Hello World", "Top News - 999 Readers")}
            {newsArticle("Coronavirus: US Updates", "Top News - 886 Readers")}
            {newsArticle("Tesla Hits New Highs", "Cars & Auto - 300 Readers")}
            {newsArticle("Bitcoin Breaks $60k", "Crypto - 8000 Readers")}
            {newsArticle("is Redux too Good", "Code - 123 Readers")}
            {newsArticle("Manchester United is the Best!", "Football - 7777 Readers")}
        </div>
    )
}

export default Widgets

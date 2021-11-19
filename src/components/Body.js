import React from "react";
import "./Body.css"

const stockInfoCard = (props) => {
    return(
        
        <div className="stock-info-card">
            <div className="stock-info-card-one">
                {props}
            </div>
            <div className="stock-info-card-two">
                Prev. Close:---
            </div>
            <div className="stock-info-card-three">
                Prev. Open:---
            </div>
        </div>
        
    );
}

const stockNewsCard = (headline,content) => {
    return (
        <div className="stock-news-card">
            <div className="stock-news-card-head">
                {headline}
            </div>
            <p className="stock-news-card-content">
                {content}
            </p>
        </div>
    );
}

const Body = () => {
    return (
        <div className="body-doc">
            <div >
                <div className="stock-info-header">
                    Top Potential Stocks
                </div>
                <div className="stock-info-all-cards">
                    {stockInfoCard('RIL')}
                    {stockInfoCard('PVR')}
                    {stockInfoCard('IRCTC')}
                    {stockInfoCard('SBIN')}
                    {stockInfoCard('HDFC')}
                </div>
                <div className="see-more-link">
                    <a href="/">see more..</a>
                </div>
            </div>
            <div>
                <div className="stock-news-header">
                    News Related To Top Potential Stocks
                </div>
                <div className="stock-news-container">
                    {stockNewsCard(
                        'Closing Bell: Nifty ends below 18,000, Sensex falls 433 pts dragged by auto, metals',
                        'Index closed a week at 17746 with loss of nearly two percent and formed a bearish candle on weekly chart hinting weakness in the markets. Now next good support for the market is coming near 17600 zone if managed to hold above-said levels one can expect a good pull back in the index again towards 18k mark but if failed to hold then we may see more drag down in Nifty towards 17300-17000 mark. The immediate hurdle is coming near 17830-17940 zone where one can again lock their gains in longs.'
                    )}
                    {stockNewsCard(
                        'Paytm’s weak listing: Hang in there, business model is strong: CEO Vijay Shekhar Sharma tells investors',
                        'Shares of Paytm, the largest and one of the most anticipated IPOs in India, plunged by 27 percent from the issue price within hours of listing. While Paytm listing has raised larger questions for tech IPOs, fintech, and the funding frenzy in startups, Sharma remains hopeful and optimistic.'
                    )}
                    {stockNewsCard(
                        'RBI panel recommends separate law to prevent illegal digital lending',
                        'The recommendations include subjecting the Digital Lending Apps to a verification process by a nodal agency to be setup in consultation with stakeholders and setting up of a Self-Regulatory Organisation (SRO) covering the participants in the digital lending ecosystem'
                    )}
                </div>
                <br />
            </div>
            
        </div>
        
    );
   
}

export default Body;
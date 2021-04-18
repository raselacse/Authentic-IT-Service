import React from 'react';
import about from '../../../Image_Icon/about/about-1.jpg'

const About = () => {
    return (
        <div className="row p-5">
            <div className="col-md-5">
                <h5>About Company</h5>
                <h1>You Can not Use Up</h1>
                <h1>Creativity.</h1>
                <p>Does any industry face a more complex audience journey and marketing sales process than B2B technology? Consider the number of people who influence a sale, the length of the decision-making cycle, the competing interests of the people who purchase, implement, manage, and use the technology. It’s a lot meaningful content here.</p>
                <ul>
                    <li>Duis quis odio quis dui sagittis laoreet.</li>
                    <li>Suspendisse tempus felis a libero mollis ultrices.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                    <li>Suspendisse tempus felis a libero mollis ultrices.</li>
                    <li>Proin sit amet diam et elit dictum sodales.</li>
                    <li>Duis quis odio quis dui sagittis laoreet.</li>
                </ul>
                <button className="btn btn-primary">Learn more</button>
            </div>
            <div className="col-md-7">
                <img className="img-fluid w-100" src={about} alt="" srcset=""/>
            </div>
        </div>
    );
};

export default About;
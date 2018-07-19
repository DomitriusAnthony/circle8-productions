import React from 'react';
import './AccordianOne.css';
import 'react-accessible-accordion/dist/fancy-example.css';

import { 
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion'
import {YoutubeUrls} from '../utils/show_youtube_links'



const AccordianOne = () => {
    return (
        <div className="container accordian">
            <p className="is-size-1 has-text-centered">C8P Vision</p>
            <Accordion>
                <AccordionItem expanded={true}>
                    <AccordionItemTitle>
                        <h3>Our Mission</h3>
                    </AccordionItemTitle>
                    <AccordionItemBody className="accordianBody">
                        <p>Here at Circle 8 Productions (C8P) we exist to help the best local businesses and start-ups, both large and small, continue to grow by branding them custom content, which lives though our high quality and entertaining TV Shows.  Our unique style of branding and content caters to the modern audience and today's consumer.  
                        We believe that if you want to advertise and you are not already a household name, then it’s best to start by making the advertisement the content itself.  We accomplish this by creating fun, entertaining, and visually engaging television programs and using the power of local broadcast to showcase everything that makes your business so special.  We set out to make the viewer feel as if they are experiencing everything inside your business firsthand from the comfort of their own home. 
                         Simply put – our goal is to create custom content for businesses that we believe in and that have a story to tell.  At the end of the day, we believe Our Content will be your King.  
                        </p>
                    </AccordionItemBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemTitle>
                        <h3>Content</h3>
                    </AccordionItemTitle>
                    <AccordionItemBody className="accordianBody">
                        <p>CONTENT IS KING these days. There are so many media platforms where content can be placed. From TV to Social Media and Digital Platforms--even gas stations, airplanes, and taxicabs now all have specific media networks where content can live.  Now more than ever, businesses and brands need media content to ensure their continued growth.</p>
                        <p>At C8P, we make the production of high quality content affordable. We create high quality custom made content at a minimum length of 2 minutes. The content will also be placed on a major local broadcast station, a major digital platform or website, and could potentially be aligned with local celebrities and social media influences, not to mention your business will have creative input on the content we create for you. Lastly, C8P will be here for you whenever you want the content revised or shortened to a traditional 30 or 60-second ad. We can do this again for a fraction of the cost. </p>
                    </AccordionItemBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemTitle>
                        <h3>Advertising</h3>
                    </AccordionItemTitle>
                    <AccordionItemBody className="accordianBody">
                        <p>At C8P, we do not believe in traditional advertising in our shows. In fact, our shows do not feature commercial breaks at all. We produce content that allows the viewer to experience the business or product firsthand. Our branded programming turns advertising, be it a company, product, or entity, into an engaging story with a beginning, middle, and end. Our advertisements are the entertainment.</p>
                        <p>With segments that span several minutes, we explore what makes a business stand out, how it helps fit within the community, and most importantly, the inspiration behind why the owners started their business in the first place. We believe that when viewers understand all the intricacies that make your business so special, people will be engaged and encouraged to experience that business for themselves. </p>
                        <p>At the end of the day, we want to open up the world to diverse communities with unique, trendy businesses. With our approach to advertising, we seek to connect viewers to their own cities and communities, so they can learn and explore what is in their own backyard while still entertaining and engaging the audience that ultimately will be your customers.</p>
                    </AccordionItemBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemTitle>
                        <h3>Licensing Fees and Product services</h3>
                    </AccordionItemTitle>
                    <AccordionItemBody className="accordianBody">
                        <p>Local first run syndicated TV shows will virtually always have to pay broadcast stations a substantial placement fee in advance of air (not to mention all the production, distribution costs, and talent fees). The only way the production companies can pay for these expenses is to run traditional advertising with commercial breaks during their show.  
                        At C8P, we do not believe in putting commercial breaks in our show as this takes away viewership. We want to have our audience completely engaged from start to finish to make sure all eyes are on your business and the content we produce! This is this very reason that we require participants to pay a one-time licensing fee where your business then owns the content to use outside our shows.
                        Many syndicated lifestyle shows feature businesses in their programs but fail to capture the true meaning of what makes these businesses so special, because they don’t ask or care. C8P gives you creative input on how your business should be featured. We strive to make sure the content we create represents your business the way it should be, while still entertaining and engaging the audience that will ultimately be your customers. With Circle 8 Productions you get:                    
                        </p>
                        <ul>
                            <li>
                                Creative input on the high quality content we create specifically for you
                            </li>
                            <li>
                                Placement on a major local broadcast station     
                            </li>
                            <li>
                                Potential placement on a major digital or outdoor media platform
                            </li>
                            <li>
                                Potential alignment with well-known local talent and/or social media influencers
                            </li>
                            <li>
                                Ownership of the content—B footage, stills and all.     
                            </li>
                            <li>
                                Little to no cost for any revision of custom content after air. 
                            </li>
                        </ul>  
                        <p>Typically, a local commercial production company can charge upwards of $25,000 for just a 30-second advertisement. If you go directly to a local TV station for production, you might have to buy a minimum of $50,000-$75,000 of airtime for the station to produce the content. At C8P, you’re getting everything listed above for a fraction of the cost. We find a happy medium that allows ownership of content, major broadcast media exposure, and much more without breaking the bank.</p> 
                    </AccordionItemBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemTitle>
                        <h3>Other media services</h3>
                    </AccordionItemTitle>
                    <AccordionItemBody className="accordianBody">
                        <ul>
                            <li>Article and Print Publication</li>
                            <li>Still Photography</li>
                            <li>Social Media Management</li>
                            <li>Product Integration</li>
                            <li>Digital Website Content including Billboards and Banner Ads</li>
                        </ul>
                    </AccordionItemBody>
                </AccordionItem>
            </Accordion>  
        </div>
    )
}

export default AccordianOne;
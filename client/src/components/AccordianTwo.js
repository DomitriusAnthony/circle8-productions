import React from 'react';
import './AccordianOne.css';



import { 
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';
import {YoutubeUrls} from '../utils/show_youtube_links'



const AccordianTwo = () => {
    return (
        <div className="container accordian">
            <p className="is-size-1 has-text-centered">The who / how of C8P</p>
            <Accordion>
                <AccordionItem expanded={true}>
                    <AccordionItemTitle>
                        <h3>How we place our TV shows</h3>
                    </AccordionItemTitle>
                    <AccordionItemBody className="accordianBody">
                        <p>We look to partner with one of the big 4 broadcast stations in a market (Usually the Local- CBS, NBC, ABC, or FOX station). Our goal is to place our shows with the station who will give us the best, most consistent timeslot, as well as the most value for the fees we pay upfront. Yes—like virtually all local first run syndicated shows, we must pay broadcast stations a fee in each market. Because of this, we look for stations who will give our shows and content the most media value for the financial commitment we have to make.  Our shows tend to air in very high-profile timeslots that come after Sports programing (like Golf) or in Prime Access (6-8PM following local news or going into Primetime), as these areas tend to attract active viewers with high household incomes.[=]
                        </p>
                    </AccordionItemBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemTitle>
                        <h3>"This is" series</h3>
                    </AccordionItemTitle>
                    <AccordionItemBody className="accordianBody">
                        <p>Our “This Is” series is our local lifestyle show, that aims to showcase the best, trendiest, and most exciting places to see in various cities across the USA. This series looks to introduce your community to up-and-coming business, start-ups, and hidden gems that really can only be experienced by visiting a particular city. Our goal is to show viewers what makes your business unique to the city, what you can offer that no one else can, and conveying why you are inspired to do what you do. By telling the story of your business, we’ll engage viewers and encourage them to seek you out. </p>
                        <div>
                            <h2>The Process:</h2>
                            <ul>
                                <li>
                                    We name the show in the “This Is” Series after each city – i.e. This Is LA, This Is SF, etc.  
                                    The first thing we do is research extensively everything that makes a particular city the way it is: 
                                    The Food, The People, The Culture, Its Agriculture, various neighborhoods and geographical locations.
                                </li>
                                <li>
                                    From this research, we develop thematic episodes that will ultimately fill up a season’s worth of airings. 
                                    A season for Circle 8 Productions is a time of year where we can air different episodes consistently in the 
                                    same timeslot each week over an extended period of time in a market. 
                                </li>
                                <li>
                                    Once the thematic episodes are established, we look for 10 separate businesses that cater to a specific theme to fill the episode. 
                                    For example, we may have an episode that deals specifically with Dining and Nightlife. We’ll find 10 very separate dining and nightlife experiences to fill this episode.
                                    Circle 8 Productions takes extreme caution to make sure that every business, brand or entity that is featured in an episode is different both in substance and location so as not 
                                    to compete with other businesses featured. This also is done so as not to make our show repetitive and keep viewers engaged.   
                                    If one of our Associate Producers calls you, it means we feel your business fits into a particular thematic episode. More importantly, 
                                    it means that we believe in your business. We believe your business is unique, has a story to tell, and will benefit from our content as much as our production will benefit from telling your story.
                                </li>
                                <li>
                                    If you would like to participate, we would need to get final approval from our Executive Producer. 
                                    If you already currently place ads or have production work done by the local broadcast station we air on, we would also need to get station approval to have your business participate to make sure is no conflict of interest. 
                                    If your business deals or sells items that could be sensitive for broadcast (selling alcohol etc.), we also would also need Station approval beforehand. 
                                </li>
                                <li>
                                    Once approved, you will sign a Production/Participation Agreement, and our producers will work with you on the logistics of filming and the film date.
                                </li>
                                <li>
                                    After filming, we will send you a rough edit of the segment for your creative input. After that, we will make any necessary changes requested. Once completed, your segment will be ready for placement. 
                                </li>
                                <li>
                                    We typically give a 2-3 week notice before the show with your segment airs. 
                                </li>
                                <li>
                                    After the broadcast airing, your segment will potentially be given standalone placement for up to one week on a digital platform, either though the Stations website or possibly an outdoor TV Network. 
                                </li>
                                <li>
                                    After the initial media run, C8P will provide you all the footage (B-footage, stills, etc.) to use for your own marketing purposes, however you feel fit. The content is yours.
                                </li>
                            </ul>
                        </div>
                        
                    </AccordionItemBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemTitle>
                        <h3>Why we go local</h3>
                    </AccordionItemTitle>
                    <AccordionItemBody className="accordianBody">
                        <p>At C8P, we believe that doing a show that brands the best local businesses and start-ups in a market, requires targeting strictly local consumers. We want every viewer to count. That is why we only seek out airtime on local broadcast stations.  
With our branded content, C8P seeks to find an alternative to online reviews, which seems to be the only method people use when determining where to spend their time and money. We want to bring a visual alternative so people see for themselves how great some of the business are by experiencing them in the comfort of their own home.  A business’s success and fate should not be left to anonymous bloggers who in all honesty could be anyone. That is where C8P comes in! 
</p>
                    </AccordionItemBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemTitle>
                        <h3>Talent and hosts</h3>
                    </AccordionItemTitle>
                    <AccordionItemBody className="accordianBody">
                        <p>Our show talent and special guests are a big part of what makes our shows attractive. We look to feature local celebrities and social media influencers that not only have a connection to the city, but also to the businesses, we end up featuring.</p>
                    </AccordionItemBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemTitle>
                        <h3>The Recruit</h3>
                    </AccordionItemTitle>
                    <AccordionItemBody className="accordianBody">
                        <p>C8P understands that sometimes the challenge for companies is not selling their product, but attracting enough quality workers to keep up with the demand for their product.</p>
                        <p>CP8’s “The Recruit” travels the country to give you an inside look at some of America’s fastest-growing and most successful companies as our hosts go undercover as an employee. We follow them on their first day as they meet their co-workers and converse with everyone from entry-level employees to CEOs. We explore the unique work environment and tell the story of how fun, creative work culture has kept employee morale so high and made these large companies some of the best places to work.</p>
                        <p>This show is for those businesses who are already expanding and need the workers to help them keep up with demand; “The Recruit” is the professional tool necessary for companies to connect with talented, potential employees.</p>
                        <p>The Recruitment Process:</p>
                        <ul>
                            <li>We find some of the most successful companies in the country (and around the world) and look at how they work from the inside. </li>
                            <li>Each company is vetted by our producers to make sure they are continuing to grow rapidly and have a creative and compelling work culture that sets them apart from other companies.</li>
                            <li>Each half-hour episode explores 4 different companies with a common theme or thread for a total of 7 minutes of content. </li>
                            <li>The episode will air on a local broadcast station in a highly viewable timeslot followed by potential placement on a major digital platform</li>
                            <li>After airing on a local broadcast station in a highly viewable timeslot, and potentially showcased on a major digital platform, all the content (B-footage, stills, etc.) will be licensed to the company (per our licensing fee), which can be used however they want to continue recruiting people to work for them. </li>
                            <li>We will only showcase businesses that we believe in. We’ll only include companies we know have an incredible story to tell and who are looking to hire more talented hard workers to join them in their continued success.</li>
                        </ul>
                    </AccordionItemBody>
                </AccordionItem>
            </Accordion>  
        </div>
    )
};

export default AccordianTwo;
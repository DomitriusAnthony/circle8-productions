import React from 'react';
import './AccordianOne.css';



import { 
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';



const AccordianTwo = () => {
    return (
        <div className="container accordian">
            <p className="is-size-1 has-text-centered">The who / how of C8P</p>
            <Accordion>
                <AccordionItem>
                    <AccordionItemTitle>
                        <h3>How we place our TV shows</h3>
                    </AccordionItemTitle>
                    <AccordionItemBody>
                        <p>We look to partner with one of the big 4 broadcast stations in a market (Usually the Local- CBS, NBC, ABC, or FOX station). Our goal is to place our shows with the station who will give us the best, most consistent timeslot, as well as the most value for the fees we pay upfront. Yes—like virtually all local first run syndicated shows, we must pay broadcast stations a fee in each market. Because of this, we look for stations who will give our shows and content the most media value for the financial commitment we have to make.  Our shows tend to air in very high-profile timeslots that come after Sports programing (like Golf) or in Prime Access (6-8PM following local news or going into Primetime), as these areas tend to attract active viewers with high household incomes.[=]
                        </p>
                    </AccordionItemBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemTitle>
                        <h3>"This is" series</h3>
                    </AccordionItemTitle>
                    <AccordionItemBody>
                        <p>Our “This Is” series is our local lifestyle show, that aims to showcase the best, trendiest, and most exciting places to see in various cities across the USA. This series looks to introduce your community to up-and-coming business, start-ups, and hidden gems that really can only be experienced by visiting a particular city. Our goal is to show viewers what makes your business unique to the city, what you can offer that no one else can, and conveying why you are inspired to do what you do. By telling the story of your business, we’ll engage viewers and encourage them to seek you out. </p>
                        
                    </AccordionItemBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemTitle>
                        <h3>Why we go local</h3>
                    </AccordionItemTitle>
                    <AccordionItemBody>
                        <p>At C8P, we believe that doing a show that brands the best local businesses and start-ups in a market, requires targeting strictly local consumers. We want every viewer to count. That is why we only seek out airtime on local broadcast stations.  
With our branded content, C8P seeks to find an alternative to online reviews, which seems to be the only method people use when determining where to spend their time and money. We want to bring a visual alternative so people see for themselves how great some of the business are by experiencing them in the comfort of their own home.  A business’s success and fate should not be left to anonymous bloggers who in all honesty could be anyone. That is where C8P comes in! 
</p>
                    </AccordionItemBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemTitle>
                        <h3>Talent and hosts</h3>
                    </AccordionItemTitle>
                    <AccordionItemBody>
                        <p>Our show talent and special guests are a big part of what makes our shows attractive. We look to feature local celebrities and social media influencers that not only have a connection to the city, but also to the businesses, we end up featuring.</p>
                    </AccordionItemBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemTitle>
                        <h3>The Recruit</h3>
                    </AccordionItemTitle>
                    <AccordionItemBody>
                        <p>Body content</p>
                    </AccordionItemBody>
                </AccordionItem>
            </Accordion>  
        </div>
    )
};

export default AccordianTwo;


/*

How we place our TV shows
"This is" series
Why we go local
Talent & Hosts
The Recruit
C8P can be your in house production company


*/
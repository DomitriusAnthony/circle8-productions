import React from 'react';
import './CopyAccordian.css';
import 'react-accessible-accordion/dist/fancy-example.css';

import { 
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion'

const CopyAccordian = () => {
    return (
        <div className="container accordian">
            <p className="is-size-1 has-text-centered">Who is Circle 8?</p>
            <Accordion>
                <AccordionItem>
                    <AccordionItemTitle>
                        <h3>Our Mission</h3>
                    </AccordionItemTitle>
                    <AccordionItemBody>
                        <p>Body content</p>
                    </AccordionItemBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemTitle>
                        <h3>Content</h3>
                    </AccordionItemTitle>
                    <AccordionItemBody>
                        <p>Advertising</p>
                    </AccordionItemBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemTitle>
                        <h3>Advertising</h3>
                    </AccordionItemTitle>
                    <AccordionItemBody>
                        <p>Body content</p>
                    </AccordionItemBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemTitle>
                        <h3>Licensing Fees and Product services</h3>
                    </AccordionItemTitle>
                    <AccordionItemBody>
                        <p>Body content</p>
                    </AccordionItemBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemTitle>
                        <h3>Other media services</h3>
                    </AccordionItemTitle>
                    <AccordionItemBody>
                        <p>Body content</p>
                    </AccordionItemBody>
                </AccordionItem>
            </Accordion>  
        </div>
    )
}

export default CopyAccordian;


/*

Our Mission
Content
Advertising
Licensing Fees and Product Services
Other media services

How we place our TV shows
"This is" series
Why we go local
Talent & Hosts
The Recruit
C8P can be your in house production company




*/
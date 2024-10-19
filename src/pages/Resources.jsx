import { useState, React } from 'react'
import '../App.css'
import {
    Container,
    Tab,
    Tabs,
    TabList,
    TabPanel,
    TabPanels,
    Link,
    List,
    ListItem,
    UnorderedList,
    OrderedList,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Text
  } from '@chakra-ui/react'

export const Resources=() => {
    return (
        <Container
        maxW="1100px" 
        display="flex"
        justifyContent="flex-start"
        flexDir="column"
        >
            <Text fontFamily="'Poppins', sans-serif" fontWeight="800" color='#b5e853' fontSize='9xl'  fontStyle='italic'>Resources
            </Text>
            <h3>
                Oklathon supports coders of all skill levels! Need to polish your skills ahead of the event? Here are some links to get you started. 
            </h3>
            <Tabs>
                <TabList>
                    <Tab>FreeCodeCamp</Tab>
                    <Tab>Udemy</Tab>
                    <Tab>GitHub</Tab>
                    <Tab>Beginner Collections</Tab>
                </TabList>
                <TabPanels display="flex" justifyContent="flex-start">
                    <TabPanel>
                        <Text textAlign="left">Click <Link href="freecodecamp.org" color="teal.500" target="_blank">here</Link> to get started</Text>
                        <UnorderedList>
                            <Text textAlign="left"><ListItem><Link href="https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/" color="teal.500" target="_blank">Javascript Algorithms</Link></ListItem></Text>
                            <Text textAlign="left"><ListItem><Link href="https://www.freecodecamp.org/learn/python-for-everybody/" color="teal.500" target="_blank">Python for everyone</Link></ListItem></Text>
                            <Text textAlign="left"><ListItem><Link href="https://www.freecodecamp.org/learn/front-end-development-libraries/" color="teal.500" target="_blank">Front end dev libraries</Link></ListItem></Text>
                        </UnorderedList>
                    </TabPanel>
                    <TabPanel>
                        <Text textAlign="left">Click <Link href="https://www.udemy.com/?utm_source=adwords-brand&utm_medium=udemyads&utm_campaign=Brand-Udemy_la.EN_cc.US_dev&campaigntype=Search&portfolio=BrandDirect&language=EN&product=Course&test=&audience=Keyword&topic=&priority=NotSpecified&utm_content=deal4584&utm_term=_._ag_137319648178_._ad_634190764968_._kw_udemy_._de_c_._dm__._pl__._ti_kwd-296956216253_._li_9026222_._pd__._&matchtype=b&gad_source=1&gclid=EAIaIQobChMI3-v0-PGaiQMVzACtBh3QFimqEAAYASAAEgLRo_D_BwE" color="teal.500" target="_blank">here</Link> to get started</Text>
                        <UnorderedList>
                            <ListItem>
                                <Text textAlign="left"><Link href="https://www.udemy.com/course/javascript-code-exercise/" color="teal.500" target="_blank">Intro to JavaScript</Link></Text>
                            </ListItem>
                            <ListItem>
                                <Text textAlign="left"><Link href="https://www.udemy.com/course/react-node-js-web-development-projects/" color="teal.500" target="_blank">Intro to React</Link></Text>
                            </ListItem>
                            <ListItem>
                                <Text textAlign="left"><Link href="https://www.udemy.com/course/8-beautiful-ruby-on-rails-apps-in-30-days/" color="teal.500" target="_blank">Intro to Ruby on Rails</Link></Text>
                            </ListItem>
                            <ListItem>
                                <Text textAlign="left"><Link href="https://www.udemy.com/course/csharp-tutorial-for-starter/" color="teal.500" target="_blank">Intro to C#.Net</Link></Text>
                            </ListItem>
                        </UnorderedList>
                    </TabPanel>
                    <TabPanel>
                        <Text textAlign="left">Click <Link href="https://github.com" color="teal.500" target="_blank">here</Link> to get started</Text>
                        <UnorderedList>
                            <ListItem>
                                <Text textAlign="left"><Link href="https://pages.github.com/" color="teal.500" target="_blank">GitHub Pages</Link></Text>
                            </ListItem>
                            <ListItem>
                                <Text textAlign="left"><Link href="https://learngitbranching.js.org/" color="teal.500" target="_blank">Learn Git Branching</Link></Text>
                            </ListItem>
                            <ListItem>
                                <Text textAlign="left"><Link href="https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request" color="teal.500" target="_blank">Learn Pull Requests</Link></Text>
                            </ListItem>
                            <ListItem>
                                <Text textAlign="left"><Link href="https://github.com/firstcontributions/first-contributions" color="teal.500" target="_blank">First Contributions</Link></Text>
                            </ListItem>
                        </UnorderedList>
                    </TabPanel>
                    <TabPanel>
                        <Text textAlign="left">Curated Collections</Text>
                        <UnorderedList>
                            <ListItem>
                                <Text textAlign="left"><Link href="https://github.com/MunGell/awesome-for-beginners" color="teal.500" target="_blank">Awesome for beginners</Link></Text>
                            </ListItem>
                            <ListItem>
                                <Text textAlign="left"><Link href="https://goodfirstissue.dev/" color="teal.500" target="_blank">First issues for beginners</Link></Text>
                            </ListItem>
                            <ListItem>
                                <Text textAlign="left"><Link href="https://up-for-grabs.net/" color="teal.500" target="_blank">Up for grabs issues</Link></Text>
                            </ListItem>
                        </UnorderedList>
                    </TabPanel>
                </TabPanels>
            </Tabs>
            <Accordion allowToggle="true">
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                        <Box as='span' flex='1' textAlign='left'>
                            Techlahoma Code of Conduct
                        </Box>
                        <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <Text textAlign="left">All attendees of in-person events and online gatherings are expected to follow our Code of Conduct, which includes our anti-harassment policy. The COC holds attendees to regard themselves in a professional and collaborative manner while engaging in any Techlahoma activity. If you need help with a COC violation or require any immediate assistance, consider following any of these steps below:</Text>
                        <OrderedList>
                            <ListItem>
                                <Text textAlign="left">Contact police if needed</Text>
                            </ListItem>
                            <ListItem>
                                <Text textAlign="left">Contact your event organizers right away</Text>
                            </ListItem>
                            <ListItem>
                                <Text textAlign="left">Fill out an <Link href="https://www.techlahoma.org/incident/" color="teal.500" target="_blank">incident report</Link> form to have your issue reviewed immediately.</Text>
                            </ListItem>
                            <ListItem>
                                <Text textAlign="left">Join and post in the public Techlahoma Slack channel #ask-a-mod to contact all admins</Text>
                            </ListItem>
                            <ListItem>
                                <Text textAlign="left">Contact all Slack admins in any channel by typing @admins</Text>
                            </ListItem>
                            <ListItem>
                                <Text textAlign="left">Contact all Conduct Committee representatives by typing @conduct</Text>
                            </ListItem>
                            <ListItem>
                                <Text textAlign="left">Send an email at info@techlahoma.org to the Techlahoma organizer team</Text>
                            </ListItem>
                        </OrderedList>
                        <Text textAlign="left">Techlahoma leadership is here to support safe, fun, educational, professional and friendly events. If you or someone else needs help, don't hesitate to contact us. We can help you file a police report if that situation is needed, escort you to your vehicle, stay with you for the duration of an event, remove threatening/COC-violating individuals, refund your ticket, and more to help you feel recognized and accommodated. <b>It's our responsibility to take your safety concerns seriously.</b></Text>
                    </AccordionPanel>
                 </AccordionItem>
                 <AccordionItem>
                 <h2>
                        <AccordionButton>
                        <Box as='span' flex='1' textAlign='left'>
                            Anti-Harassment Policy
                        </Box>
                        <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <Text textAlign="left">
                            Offensive comments related to gender, gender identity and expression, age, sexual orientation, race, religion, disability, body size, physical appearance, immigrant status or country of origin
                            Sexual or otherwise inappropriate images and hateful speech/jokes (including in presentations)
                            Deliberate intimidation, stalking, or following
                            Harassing photography or recording
                            Inappropriate or otherwise unwelcome physical contact or sexual attention (including unwanted hugs, touches or touching pregnant bellies)
                            Sustained disruption of talks or events
                            Harassing, abusive, discriminatory or derogatory conduct
                        </Text>
                    </AccordionPanel>
                 </AccordionItem>
                 <AccordionItem>
                 <h2>
                        <AccordionButton>
                        <Box as='span' flex='1' textAlign='left'>
                            Expectations for our Community (Everyone)
                        </Box>
                        <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <Text textAlign="left">
                            At all community and social events we expect everyone will:
                            Be considerate, respectful, and collaborative
                            Refrain from demeaning, discriminatory, or harassing behavior and speech
                            Act and engage in an authentic, thoughtful, and empathetic way to help to foster our community
                            Be mindful of your surroundings and of your fellow participants
                            Alert meeting organizers and volunteers if you notice CoC violations, someone in distress or a dangerous situation
                        </Text>
                    </AccordionPanel>
                 </AccordionItem>
                 <AccordionItem>
                 <h2>
                        <AccordionButton>
                        <Box as='span' flex='1' textAlign='left'>
                            Expectations for our Organizers
                        </Box>
                        <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <Text textAlign="left">
                            Event organizers will:<br></br>
                            <br></br>Uphold the CoC and be excellent examples of personal and professional conduct
                            <br></br>Attempt to prevent potential CoC violations and keep vigilant in watching for persons in need of help
                            <br></br>Contact local law enforcement or venue security
                            <br></br>Provide escorts to anyone requesting safety and security
                            <br></br>Assist those experiencing harassment to feel safe for the duration of the event
                            <br></br>The event organizers will take appropriate action against unacceptable behavior. Organizers may expel participants from the event without warning or refund.
                        </Text>
                    </AccordionPanel>
                 </AccordionItem>
                 <AccordionItem>
                 <h2>
                        <AccordionButton>
                        <Box as='span' flex='1' textAlign='left'>
                            Expectations for our Sponsors
                        </Box>
                        <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <Text textAlign="left">
                            Sponsors (otherwise known as vendors, booth staff) and other staff are subject to the anti-harassment policy. Sponsors and staff agree to the following:
                            No Inappropriate and offensive material
                            No sexualized images or activities
                            No sexualized clothing/uniforms/costumes
                     </Text>
                    </AccordionPanel>
                 </AccordionItem>
                 <AccordionItem>
                    <h2>
                        <AccordionButton>
                        <Box as='span' flex='1' textAlign='left'>
                            Alcohol Policy
                        </Box>
                        <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <Text textAlign="left">Alcohol will only be paid for/provided by Techlahoma at Techlahoma board organized events.
                           <br></br> User groups may have alcohol at events, but: <br></br> 
                        </Text>
                        <OrderedList>
                            <ListItem>
                                <Text textAlign="left">alcohol may not be purchased with Techlahoma funds</Text>
                            </ListItem>
                            <ListItem>
                                <Text textAlign="left">a sponsor can be used to pay for alcohol</Text>
                            </ListItem>
                            <ListItem>
                                <Text textAlign="left">all meetups with alcohol must be held at locations licensed to serve alcohol with a licensed bartender, such as a brewery or coffee/wine bar</Text>
                            </ListItem>
                            <ListItem>
                                <Text textAlign="left">all rules and regulations in accordance with local, state, and federal laws must be followed</Text>
                            </ListItem>
                        </OrderedList>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </Container>
    )
}
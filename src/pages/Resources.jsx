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
  } from '@chakra-ui/react'

export const Resources=() => {
    return (
        <Container
        // maxW="1100px" 
        display="flex"
        justifyContent="flex-start"
        flexDir="column"
        >
            <h1>
                Basic Resources Page
            </h1>
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
                        <p>Click <Link href="freecodecamp.org" color="teal.500" target="_blank">here</Link> to get started</p>
                        <UnorderedList>
                            <ListItem><Link href="https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/" color="teal.500" target="_blank">Javascript Algorithms</Link></ListItem>
                            <ListItem><Link href="https://www.freecodecamp.org/learn/python-for-everybody/" color="teal.500" target="_blank">Python for everyone</Link></ListItem>
                            <ListItem><Link href="https://www.freecodecamp.org/learn/front-end-development-libraries/" color="teal.500" target="_blank">Front end dev libraries</Link></ListItem>
                        </UnorderedList>
                    </TabPanel>
                    <TabPanel>
                        <p>Click <Link href="https://www.udemy.com/?utm_source=adwords-brand&utm_medium=udemyads&utm_campaign=Brand-Udemy_la.EN_cc.US_dev&campaigntype=Search&portfolio=BrandDirect&language=EN&product=Course&test=&audience=Keyword&topic=&priority=NotSpecified&utm_content=deal4584&utm_term=_._ag_137319648178_._ad_634190764968_._kw_udemy_._de_c_._dm__._pl__._ti_kwd-296956216253_._li_9026222_._pd__._&matchtype=b&gad_source=1&gclid=EAIaIQobChMI3-v0-PGaiQMVzACtBh3QFimqEAAYASAAEgLRo_D_BwE" color="teal.500" target="_blank">here</Link> to get started</p>
                        <UnorderedList>
                            <ListItem>
                                <Link href="https://www.udemy.com/course/javascript-code-exercise/" color="teal.500" target="_blank">Intro to JavaScript</Link>
                            </ListItem>
                            <ListItem>
                                <Link href="https://www.udemy.com/course/react-node-js-web-development-projects/" color="teal.500" target="_blank">Intro to React</Link>
                            </ListItem>
                            <ListItem>
                                <Link href="https://www.udemy.com/course/8-beautiful-ruby-on-rails-apps-in-30-days/" color="teal.500" target="_blank">Intro to Ruby on Rails</Link>
                            </ListItem>
                            <ListItem>
                                <Link href="https://www.udemy.com/course/csharp-tutorial-for-starter/" color="teal.500" target="_blank">Intro to C#.Net</Link>
                            </ListItem>
                        </UnorderedList>
                    </TabPanel>
                    <TabPanel>
                        <p>Click <Link href="https://github.com" color="teal.500" target="_blank">here</Link> to get started</p>
                        <UnorderedList>
                            <ListItem>
                                <Link href="https://pages.github.com/" color="teal.500" target="_blank">GitHub Pages</Link>
                            </ListItem>
                            <ListItem>
                                <Link href="https://learngitbranching.js.org/" color="teal.500" target="_blank">Learn Git Branching</Link>
                            </ListItem>
                            <ListItem>
                                <Link href="https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request" color="teal.500" target="_blank">Learn Pull Requests</Link>
                            </ListItem>
                            <ListItem>
                                <Link href="https://github.com/firstcontributions/first-contributions" color="teal.500" target="_blank">First Contributions</Link>
                            </ListItem>
                        </UnorderedList>
                    </TabPanel>
                    <TabPanel>
                        <p>Curated Collections</p>
                        <UnorderedList>
                            <ListItem>
                                <Link href="https://github.com/MunGell/awesome-for-beginners" color="teal.500" target="_blank">Awesome for beginners</Link>
                            </ListItem>
                            <ListItem>
                                <Link href="https://goodfirstissue.dev/" color="teal.500" target="_blank">First issues for beginners</Link>
                            </ListItem>
                            <ListItem>
                                <Link href="https://up-for-grabs.net/" color="teal.500" target="_blank">Up for grabs issues</Link>
                            </ListItem>
                        </UnorderedList>
                    </TabPanel>
                </TabPanels>
            </Tabs>
            
            
        </Container>
    )
}
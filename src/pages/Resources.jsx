import { useState, React } from 'react'
import '../App.css'
import {
    Container,
    Tab,
    Tabs,
    TabList,
    TabPanel,
    TabPanels,
    Link
  } from '@chakra-ui/react'

export const Resources=() => {
    return (
        <Container>
            <h1>
                Basic Resources Page
            </h1>
            <h3>
                More explaination as to what is going on here
            </h3>
            <h4>
                Here are some basic links to get you started
            </h4>
            <Tabs>
                <TabList>
                    <Tab>FreeCodeCamp</Tab>
                    <Tab>Udemy</Tab>
                    <Tab>GitHub</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <p>Click <Link href="freecodecamp.org" color="teal.500" target="_blank">here</Link> to get started</p>
                        <ul>
                            <li><Link href="https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/" color="teal.500" target="_blank">Javascript Algorithms</Link></li>
                            <li><Link href="https://www.freecodecamp.org/learn/python-for-everybody/" color="teal.500" target="_blank">Python for everyone</Link></li>
                            <li><Link href="https://www.freecodecamp.org/learn/front-end-development-libraries/" color="teal.500" target="_blank">Front end dev libraries</Link></li>
                        </ul>
                    </TabPanel>
                    <TabPanel>
                        <p>Click <Link href="https://www.udemy.com/?utm_source=adwords-brand&utm_medium=udemyads&utm_campaign=Brand-Udemy_la.EN_cc.US_dev&campaigntype=Search&portfolio=BrandDirect&language=EN&product=Course&test=&audience=Keyword&topic=&priority=NotSpecified&utm_content=deal4584&utm_term=_._ag_137319648178_._ad_634190764968_._kw_udemy_._de_c_._dm__._pl__._ti_kwd-296956216253_._li_9026222_._pd__._&matchtype=b&gad_source=1&gclid=EAIaIQobChMI3-v0-PGaiQMVzACtBh3QFimqEAAYASAAEgLRo_D_BwE" color="teal.500" target="_blank">here</Link> to get started</p>
                        <ul>
                            <li>
                                <Link href="https://www.udemy.com/course/javascript-code-exercise/" color="teal.500" target="_blank">Intro to JavaScript</Link>
                            </li>
                            <li>
                                <Link href="https://www.udemy.com/course/react-node-js-web-development-projects/" color="teal.500" target="_blank">Intro to React</Link>
                            </li>
                            <li>
                                <Link href="https://www.udemy.com/course/8-beautiful-ruby-on-rails-apps-in-30-days/" color="teal.500" target="_blank">Intro to Ruby on Rails</Link>
                            </li>
                            <li>
                                <Link href="https://www.udemy.com/course/csharp-tutorial-for-starter/" color="teal.500" target="_blank">Intro to C#.Net</Link>
                            </li>
                        </ul>
                    </TabPanel>
                    <TabPanel>
                        <p>Click <Link href="https://github.com" color="teal.500" target="_blank">here</Link> to get started</p>
                        <ul>
                            <li>
                                
                            </li>
                        </ul>
                    </TabPanel>

                </TabPanels>
            </Tabs>
            
        </Container>
    )
}
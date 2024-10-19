import { useState, React } from 'react'
import '../App.css'
import {
    Container,
    Tab,
    Tabs,
    TabList,
    TabPanel,
    TabPanels
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
                        <p>Click <a href="freecodecamp.org" target="_blank">here</a> to get started</p>
                        <ul>
                            <li><a href="https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/" target="_blank">Javascript</a></li>
                            <li><a href="https://www.freecodecamp.org/learn/python-for-everybody/" target="_blank">Python</a></li>
                            <li><a href="https://www.freecodecamp.org/learn/front-end-development-libraries/" target="_blank">Front end dev libraries</a></li>
                        </ul>
                    </TabPanel>
                    <TabPanel>
                        <p>Click <a href="https://www.udemy.com/?utm_source=adwords-brand&utm_medium=udemyads&utm_campaign=Brand-Udemy_la.EN_cc.US_dev&campaigntype=Search&portfolio=BrandDirect&language=EN&product=Course&test=&audience=Keyword&topic=&priority=NotSpecified&utm_content=deal4584&utm_term=_._ag_137319648178_._ad_634190764968_._kw_udemy_._de_c_._dm__._pl__._ti_kwd-296956216253_._li_9026222_._pd__._&matchtype=b&gad_source=1&gclid=EAIaIQobChMI3-v0-PGaiQMVzACtBh3QFimqEAAYASAAEgLRo_D_BwE" target="_blank">here</a> to get started</p>
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
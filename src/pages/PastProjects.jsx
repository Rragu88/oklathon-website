import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
  } from '@chakra-ui/react'


const PastProjects = () => {
  return (
    <div>
        <Accordion>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as='span' flex='1' textAlign='left'>
          2024 Projects
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
        <Box as='ul' flex='1' textAlign='left'>
            <li><a href='https://github.com/techlahoma/200ok-site'>200OK</a></li>
            <li><a href='https://github.com/techlahoma/code-newbies'>Code Newbies</a></li>
            <li><a href='https://github.com/alex-code4okc/oklahoma_cooling_centers_python'>Heating and Cooling Centers</a></li>
            <li><a href='https://github.com/kacollins/okc-coffee-and-code'>OKC Coffee and Code</a></li>
            <li><a href='https://github.com/somet-code/oklahoma_earthquakes'>Oklahome Earthquakes</a></li>
            <li><a href='https://github.com/techlahoma/oklathon'>Oklathon</a></li>
            <li><a href='https://github.com/cotterjd/ranked-list'>Ranked List</a></li>
            <li><a href='https://github.com/shecodesokc/shecodesokc.org'>SheCodesOKC</a></li>
            <li><a href='https://github.com/techlahoma/thunderplains-2024'>ThunderPlains 2024</a></li>
            <li><a href='https://github.com/tulsawebdevs/website'>Tulsa Web Devs</a></li>
            <li><a href='https://github.com/jtsmedley/WebSync'>WebSync</a></li>
        </Box>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as='span' flex='1' textAlign='left'>
          2023 Projects
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>

    </AccordionPanel>
  </AccordionItem>
</Accordion>
      
    </div>
  )
}

export default PastProjects

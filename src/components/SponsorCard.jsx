import React from 'react'
import { Card, CardBody, CardHeader } from '@chakra-ui/react'

function SponsorCard({title, imageSrc, text, url}) {
  return (
    <a href={url}>
        <Card>
            <CardHeader>
                <h2>{title}</h2>
            </CardHeader>
            <CardBody>
                <img src={imageSrc}></img>
                <div>{text}</div>
            </CardBody>
        </Card>
    </a>
  )
}

export default SponsorCard
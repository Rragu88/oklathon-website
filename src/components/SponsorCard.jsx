import React from 'react'
import { Card, CardBody, CardHeader, Image } from '@chakra-ui/react'

function SponsorCard({title, imageSrc, text, url}) {
  return (
    <a href={url}>
        <Card mb={2}>
            <CardHeader>
                <h2>{title}</h2>
            </CardHeader>
            <CardBody>
                <Image 
                src={imageSrc} 
                alt={title}
                boxSize={200}
                />
                <div>{text}</div>
            </CardBody>
        </Card>
    </a>
  )
}

export default SponsorCard
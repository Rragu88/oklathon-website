import React from 'react'
import { Card, CardBody, CardHeader, Grid, Image } from '@chakra-ui/react'

function SponsorCard({title, imageSrc, text, url}) {
  return (
    <a href={url}>
        <Card mb={2}>
            <CardHeader>
                <h2>{title}</h2>
            </CardHeader>
            <CardBody>
                <Grid gap={2} autoFlow="column dense">
                    <Image 
                    src={imageSrc} 
                    alt={title}
                    boxSize={200}
                    />
                    <div>{text}</div>
                </Grid>
            </CardBody>
        </Card>
    </a>
  )
}

export default SponsorCard
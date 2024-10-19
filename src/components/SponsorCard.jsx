import React from 'react'
import { Card, CardBody, CardHeader, Grid, Image, Text } from '@chakra-ui/react'

function SponsorCard({title, imageSrc, text, url}) {
  return (
    <a href={url}>
        <Card mb={2} height={250}>
            <CardHeader p={2.5}>
                <Text fontSize={'1.8em'}>{title}</Text>
            </CardHeader>
            <CardBody>
                <Grid gap={5} autoFlow="column dense">
                    <Image 
                    src={imageSrc} 
                    alt={title}
                    height={'100%'}
                    />
                    <div>{text}</div>
                </Grid>
            </CardBody>
        </Card>
    </a>
  )
}

export default SponsorCard
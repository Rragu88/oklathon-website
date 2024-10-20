import React from 'react'
import { Button, Container, Modal, useDisclosure, ModalOverlay, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader } from '@chakra-ui/react'
import SponsorCard from '../components/SponsorCard'
import techlahomaLogo from '../assets/sponsor-techlahoma.png'
import filebaseLogo from '../assets/filebase.svg'
import immyLogo from '../assets/immy.svg'
import SponsorBecomeAForm from '../components/SponsorBecomeAForm'

export const SponsorsPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <h1>Sponsors</h1>
      <SponsorCard
        title={'Techlahoma'}
        imageSrc={techlahomaLogo}
        url={'https://www.techlahoma.org/'}
        text={'a professional network of more than 5,000 information technology workers, hobbyists, students, teachers, and future technologists.'}
      />
        <SponsorCard
          title={'IMMY'}
          imageSrc={immyLogo}
          url={'https://immy.com/'}
          text={'a rapidly growing in-vitro diagnostic manufacturer and global leader in fungal diseases, providing diagnostic solutions and products to over 80 countries to enhance patient care and therapy.'}
        />
      <SponsorCard 
        title={'Filebase'} 
        imageSrc={filebaseLogo}
        url={'https://filebase.com/'}
        text={'The InterPlanetary Development Platform. From IPFS pinning to dedicated IPFS gateways and IPNS names, Filebase provides all the tools you need to build the best decentralized applications.'}
      />
      <Button onClick={onOpen}>
        Become A Sponsor
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Become a Sponsor</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <SponsorBecomeAForm/>
          </ModalBody>

          <ModalFooter>
            <Button variant='ghost' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Submit</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>

  )
}

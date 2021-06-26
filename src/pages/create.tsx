import React from 'react'
import { Box } from '@chakra-ui/react'
import { CreatePropertyForm } from '../components/create-form'
import { Layout } from '../components/layout'
import Navigation from '../components/navigation'

const CreatePage = () => {
  return (
    <Layout>
      <Navigation />
      <CreatePropertyForm />
    </Layout>
  )
}

export default CreatePage
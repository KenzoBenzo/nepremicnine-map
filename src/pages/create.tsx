import React from 'react';
import { CreatePropertyForm } from '../components/molecules/create-form';
import { UploadSingleImage } from '../components/molecules/image-input';
import { Layout } from '../components/templates/layout';

const CreatePage = () => {
  return (
    <Layout>
      <CreatePropertyForm />
      <UploadSingleImage />
    </Layout>
  );
};

export default CreatePage;

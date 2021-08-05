import React from 'react';
import { CreatePropertyForm } from '../components/create-form';
import { UploadSingleImage } from '../components/image-input';
import { Layout } from '../components/layout';

const CreatePage = () => {
  return (
    <Layout>
      <CreatePropertyForm />
      <UploadSingleImage />
    </Layout>
  );
};

export default CreatePage;

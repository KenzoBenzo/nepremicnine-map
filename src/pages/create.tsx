import React from 'react';
import { CreatePropertyForm } from '../components/create-form';
import UploadTest from '../components/image-input';
import { Layout } from '../components/layout';

const CreatePage = () => {
  return (
    <Layout>
      <CreatePropertyForm />
      <UploadTest />
    </Layout>
  );
};

export default CreatePage;

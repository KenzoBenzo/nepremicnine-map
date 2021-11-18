import React from 'react';
import { CreatePropertyForm } from '../components/molecules/create-form';
import { UploadSingleImage } from '../components/molecules/image-input';

const CreatePage = () => {
  return (
    <>
      <CreatePropertyForm />
      <UploadSingleImage />
    </>
  );
};

export default CreatePage;

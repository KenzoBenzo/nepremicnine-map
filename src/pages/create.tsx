import React from 'react';
import { CreatePropertyForm } from '@molecules/create-form';
import { UploadSingleImage } from '@molecules/image-input';

const CreatePage = () => {
  return (
    <>
      <CreatePropertyForm />
      <UploadSingleImage />
    </>
  );
};

export default CreatePage;

import { useState } from 'react';
import { useS3Upload, getImageData } from 'next-s3-upload';
import Image from 'next/image';

export const UploadSingleImage = () => {
  let [imageUrl, setImageUrl] = useState<string>();
  let [height, setHeight] = useState<number>();
  let [width, setWidth] = useState<number>();
  let { FileInput, openFileDialog, uploadToS3 } = useS3Upload();

  let handleFileChange = async (file: File) => {
    let { url } = await uploadToS3(file);
    let { height, width } = await getImageData(file);
    setWidth(width);
    setHeight(height);
    setImageUrl(url);
  };

  return (
    <div>
      <FileInput onChange={handleFileChange} />

      <button onClick={openFileDialog}>Upload file</button>

      {/* {imageUrl && <img src={imageUrl} />} */}

      {imageUrl && (
        <div>
          <Image
            src={imageUrl}
            width={width}
            height={height}
            alt="Uploaded image"
          />
          <div>{imageUrl}</div>
          <div>
            {height}x{width}
          </div>
        </div>
      )}
    </div>
  );
};

export const UploadMultipleImages = () => {
  const [isUploadComplete, setIsUploadComplete] = useState(false);
  const { uploadToS3 } = useS3Upload();

  const handleFilesChange = async ({ target }: { target: any }) => {
    const urls = [];
    const files = Array.from(target.files);

    for (let index = 0; index < files.length; index++) {
      const file = files[index];
      // @ts-expect-error
      const { url } = await uploadToS3(file);
      urls.push(url);
    }
    setIsUploadComplete(true);
    // You can do whatever you want to do with your uploaded files {urls}
  };

  return (
    <div>
      <input type="file" name="file" multiple onChange={handleFilesChange} />
      <br />
      {isUploadComplete && 'Done Uploading files to S3'}
    </div>
  );
};

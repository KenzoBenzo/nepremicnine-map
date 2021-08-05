import { useState } from 'react';
import { useS3Upload, getImageData } from 'next-s3-upload';
import Image from 'next/image';

export default function UploadTest() {
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
          <Image src={imageUrl} width={width} height={height} />
          <div>{imageUrl}</div>
          <div>
            {height}x{width}
          </div>
        </div>
      )}
    </div>
  );
}

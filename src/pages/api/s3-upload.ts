export { APIRoute as default } from 'next-s3-upload';

// By default this addon will give every upload a unique key in your S3 bucket. If you would like to customize the key you can do so by configuring the APIRoute.
// The signature for the key function is: (req: NextApiRequest, filename: string) => string

// export default APIRoute.configure({
//   key(req, filename) {
//     return `my/uploads/path/${filename.toUpperCase()}`;
//   },
// });

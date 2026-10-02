import Imagekit from 'imagekit';

const storageInstance = new Imagekit({
    urlEndpoint:process.env.IK_URL_ENDPOINT,
    publicKey:process.env.IK_PUBLIC_KEY,
    privateKey:process.env.IK_PRIVATE_KEY,
});

export const sendFiles = async (file, fileName) => {
    const obj = {
        file:file,
        fileName:fileName,
        folder:'cohort3'
    }
    return await storageInstance.upload(obj);
}
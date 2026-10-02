

const uploadController =  
    //FOR UPLOADING A SINGLE FILE
    // upload.single("profilePic"), (req, res) => {

        //FOR UPLOADING MULTIPLE FILES
    (req, res) => {
    
        try{
            let files = req.files;
            let body = req.body;

            console.log(files);
            console.log(body);
            console.log("uploadController chal rha hai");

            res.status(200).json({
                message:"Files uploaded successfully",
            });

        } catch(error){
            res.status(500).json({
                message:"Internal Server Error",
            });
        }
    
    }

export default uploadController;
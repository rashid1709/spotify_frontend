import { openUploadWidget } from '../utils/CloudinaryServices';
import { CloudniaryUploadPreset } from '../../config';

const CloudinaryUpload = () => {
  const uploadImageWidget = () => {
    
    let myUploadWidget = openUploadWidget(
      {
        cloudName: "dcenolth9",
        uploadPreset: CloudniaryUploadPreset,
        
        
        sources: ["local"]
      },
      function (error, result) {
        if (!error && result.event === "success") {
        console.log(result.info.secure_url);
        } else {
            if(error){
                console.log(error);
            }
            
        }
      }
    );
    myUploadWidget.open();
  };

  return (
    <button className="bg-white text-black rounded-full font-semibold p-3" onClick={uploadImageWidget}>
      Upload Song
    </button>
  );
};

export default CloudinaryUpload;
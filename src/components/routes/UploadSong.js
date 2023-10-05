import React from 'react';
import { Icon } from '@iconify/react';
import IconText from '../shared/IconText';
import TextWithHover from '../shared/TextWithHover';
import TextInput from '../shared/TextInput';
import CloudinaryUpload from '../shared/CloudinaryUpload';


function UploadSong() {
  console.log(window);
  console.log(window.cloudinary);
  return (
    <div className='w-full h-full flex'>
      {/* // this will be your left panel */}
      <div className='h-full w-1/6 bg-black flex flex-col justify-between pb-10'>
        <div>
           
        
        {/* logo div */}
        <div className='logo p-5'> 
        <Icon icon="logos:spotify" width="120" />
        </div>
        <div className='py-5'>
          <IconText iconName={"material-symbols:home"} displayText={"Home"}/>
       
          <IconText iconName={"material-symbols:search"} displayText={"Search"} />
        
          <IconText iconName={"mdi:bookshelf"} displayText={"Your Library"} />

          <IconText iconName={"akar-icons:music"} displayText={"My Music"} />
        </div>
        <div className='py-5'>
        <IconText iconName={"material-symbols:add-box"} displayText={"Create Playlist"} />
        <IconText iconName={"basil:heart-solid"} displayText={"Liked Songs"} /> 
        </div>
        </div>
        <div className='px-5'>
          <div className='border border-gray-100 text-white w-3/4 flex px-2 py-1 rounded-full items-center justify-center hover:border-white cursor-pointer'> 
            <Icon icon="ion:earth" />
            <div className='ml-2 text-sm font-semibold'>English</div>
          </div>
        </div>
    
      </div> 
      {/* // this will be your right panel main content */}
      <div className='h-full w-full bg-app-black overflow-auto'>
        <div className='navbar w-full h-1/10 bg-black flex items-center justify-end'>
          <div className='w-1/2 flex h-full'>
            <div className='w-2/3 flex justify-around items-center'>
            <TextWithHover displayText={"Premium"} />
          <TextWithHover displayText={"Support"} />
          <TextWithHover displayText={"Download"} />
          <div className='h-1/2 border-r border-white'></div>
            </div>
          <div className='1/3 flex justify-around h-full items-center'>
          <TextWithHover displayText={"Upload Song"} />
          <div className='bg-white w-10 h-10  flex items-center justify-center font-semibold 
          rounded-full cursor-pointer'>RA</div>
          </div>
        
        </div> 
          </div>
      {/* //Main Content */}
        <div className='content p-7 pt-0 overflow-auto'>
        
                <div className='text-2xl font-semibold mb-5 text-white mt-8'>Upload Your music</div>
            <div className='w-2/3 flex space-x-3'>
                <div className='w-1/2'>
                        <TextInput label={"name"} labelClassName={"text-white"}
                        placeholder={"Name"}/>
                </div>
                <div className='w-1/2'>
                        <TextInput label={"Thumbnail"} labelClassName={"text-white"}
                        placeholder={"Thumbnail"}/>
                </div>

               
                
            </div>  
            <div className='mt-5'>
            <CloudinaryUpload />
            </div>
           
        </div>  
      
      </div>
     
      
    </div>
   
  )
};
const PlayListView = ({titleText, cardsData}) => {
  return (
    <div className='text-white mt-8'>
      <div className='text-2xl font-semibold mb-5'>{titleText}</div>
        <div className='w-full flex justify-between space-x-4'>
          {
            //cards data will be an Array

            cardsData.map((item)=>{
              return(
                <Card
                title={item.title}
                description={item.description}
                imgUrl={item.imgUrl}
                />
              )
            })
          }
         
        </div>
      
      
    </div>
  )
}

const Card = ({title,description,imgUrl}) => {
  return (
    <div className='bg-black bg-opacity-60 w-1/6 px-5 py-2 rounded-lg'>
      <div className='py-4'> 
        <img className='w-full rounded-md h-40'
        src={imgUrl}
        alt='label'/>
      </div>
      <div className='text-white text-sm font-semibold py-3'>{title}</div>
      <div className='text-gray-500 text-sm'>{description}</div>
    </div>
  )
}

export default UploadSong


import React from 'react';
import { Icon } from '@iconify/react';
import IconText from '../shared/IconText';
import TextWithHover from '../shared/TextWithHover';

const focusCardsData = [
  {
    title:"Peaceful Piano",
    description:"Relax and Indulge with beautiful piano pieces",
    imgUrl:"https://images.unsplash.com/photo-1682687220247-9f786e34d472?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80"
  },
  { 
    title:"Deep Focus",
     description:"Relax and Indulge with beautiful piano pieces",
     imgUrl:"https://images.unsplash.com/photo-1682685797818-c9dc151d241e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
},
  {
    title:"Instrumental Study",
    description:"Relax and Indulge with beautiful piano pieces",
    imgUrl:"https://images.unsplash.com/photo-1695192686113-87005310369c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    
  },
  {
    title:"Focus Flow",
    description:"Relax and Indulge with beautiful piano pieces",
    imgUrl:"https://images.unsplash.com/photo-1695121767703-3dfaf0b62d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
    
  },
  {
    title:"Beats to think to",
    description:"Relax and Indulge with beautiful piano pieces",
    imgUrl:"https://images.unsplash.com/photo-1693103846224-ff23e91ef751?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    
  }
];

const SpotifyfocusCardsData = [
  {
    title:"Peaceful Piano 1",
    description:"Relax and Indulge with beautiful piano pieces",
    imgUrl:"https://media.istockphoto.com/id/1134112833/photo/banff-national-park-in-alberta-canada.jpg?s=2048x2048&w=is&k=20&c=51WA2TrU9k5RFTMaiU5Sc_0Y7-V3lczYQCE3-FD-A9Q="
  },
  { 
    title:"Deep Focus",
     description:"Relax and Indulge with beautiful piano pieces",
     imgUrl:"https://media.istockphoto.com/id/1493781376/photo/close-up-of-piano-keys-piano-black-and-white-keys-and-piano-keyboard-musical-instrument.jpg?s=2048x2048&w=is&k=20&c=Y16K86MNW_YGa8ehKult_hxd--0Scocdi7XkRkqnrEA="
},
  {
    title:"Instrumental Study",
    description:"Relax and Indulge with beautiful piano pieces",
    imgUrl:"https://images.unsplash.com/photo-1523308458373-c6f61ae1fd21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80"
    
  },
  {
    title:"Focus Flow",
    description:"Relax and Indulge with beautiful piano pieces",
    imgUrl:"https://images.unsplash.com/photo-1603481502506-275d81ffcdef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80"
    
  },
  {
    title:"Beats to think to",
    description:"Relax and Indulge with beautiful piano pieces",
    imgUrl:"https://plus.unsplash.com/premium_photo-1661340624430-55ba84a270f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    
  }
];
const SoundOfIndiaCardsData = [
  {
    title:"Peaceful Piano 12",
    description:"Relax and Indulge with beautiful piano pieces",
    imgUrl:"https://images.unsplash.com/photo-1615804815586-80d2a750f1bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
  },
  { 
    title:"Deep Focus",
     description:"Relax and Indulge with beautiful piano pieces",
     imgUrl:"https://images.unsplash.com/photo-1513925619563-269fc5fbdd89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
},
  {
    title:"Instrumental Study",
    description:"Relax and Indulge with beautiful piano pieces",
    imgUrl:"https://images.unsplash.com/photo-1623184158370-e306f4634af7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80"
    
  },
  {
    title:"Focus Flow",
    description:"Relax and Indulge with beautiful piano pieces",
    imgUrl:"https://plus.unsplash.com/premium_photo-1681682669168-78b3d3b4dce8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
    
  },
  {
    title:"Beats to think to",
    description:"Relax and Indulge with beautiful piano pieces",
    imgUrl:"https://images.unsplash.com/photo-1459305272254-33a7d593a851?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
    
  }
];

/* <Card 
          title="Peaceful Piano"
          description={"Relax and Indulge with beautiful piano pieces"}
          imgUrl="https://images.unsplash.com/photo-1682687220247-9f786e34d472?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80"
          />
          <Card 
          title="Peaceful Piano"
          description={"Relax and Indulge with beautiful piano pieces"}
          imgUrl="https://images.unsplash.com/photo-1682685797818-c9dc151d241e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
          />
          <Card 
          title="Peaceful Piano"
          description={"Relax and Indulge with beautiful piano pieces"}
          imgUrl="https://images.unsplash.com/photo-1695192686113-87005310369c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          />
          <Card 
          title="Peaceful Piano"
          description={"Relax and Indulge with beautiful piano pieces"}
          imgUrl="https://images.unsplash.com/photo-1695121767703-3dfaf0b62d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
          />
          <Card 
          title="Peaceful Piano"
          description={"Relax and Indulge with beautiful piano pieces"}
          imgUrl="https://images.unsplash.com/photo-1693103846224-ff23e91ef751?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          /> */
function LoggedInHome() {
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
      
        <div className='content p-7 pt-0 overflow-auto'>
        <PlayListView titleText="Focus" cardsData={focusCardsData} />
        <PlayListView titleText="Spotify Playlists" cardsData={SpotifyfocusCardsData} />
        <PlayListView titleText="Sound of India" cardsData={SoundOfIndiaCardsData} />
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

export default LoggedInHome

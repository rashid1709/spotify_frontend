import { Icon } from "@iconify/react";


const IconText = ({iconName,displayText,active}) => {
    return(

        <div className="flex items-center justify-start cursor-pointer">
            <div className="px-3 py-1">
                
                <Icon icon ={iconName} color={active ? "white" : "gray"} fontSize={15}/>
            </div>
            <div className={`${active ? "text-white" : "text-gray-400"} hover:text-white`}>{displayText}</div>
        </div>

    )
}

export default IconText;
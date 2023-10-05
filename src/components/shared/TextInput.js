
const TextInput = ({label,placeholder,className,value,setValue,labelClassName}) =>{


    return(
    <div className={`textInputDiv flex flex-col space-y-2 w-full${className}`}>
        <label for={label} className={`font-semibold ${labelClassName}`} >
          {label}
        </label>
   
    <input type="text" 
    placeholder={placeholder}
    className="p-3 border-gray-400 border border-solid rounded placeholder-gray-400"
    value={value}
    onChange={(e)=>{setValue(e.target.value)}}
     />
    </div>
    ) 
}

export default TextInput;
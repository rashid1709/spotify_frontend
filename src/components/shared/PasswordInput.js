
const PasswordInput = ({label,placeholder,className,value,setValue}) =>{
    return(
    <div className={`textInputDiv flex flex-col space-y-2 w-full${className}`}>
        <label for={label} className="font-semibold">
          {label}
        </label>
   
    <input type="password" 
    placeholder={placeholder}
    className="p-2 border-gray-400 border border-solid rounded placeholder-gray-400"
    value={value}
    onChange={(e)=>{setValue(e.target.value)}}
    >
    </input>
    </div>
    ) 
}

export default PasswordInput;
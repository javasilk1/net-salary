import React from "react";
import '../App.css'

interface CustomInputProps  {
    value: number | string;
    name: string;
    label?: string;
    type?: string;
    error?: string;
    index:number;
    variant?:string;
    //onChange: (id:number, field: string, value:string) => void;
    onChange: (event: React.ChangeEvent<any>) => void;

    //onChange: (index: number, key: string, value: string) => void;
}


const CustomInput: React.FC<CustomInputProps> = ({ index, type,value, error,label,onChange,name,variant}) => {

    return (
/*
        <>
        <input  type={type} className="field-input w-input" id={index.toString()} className={'field-input custom-input'}  placeholder={label} value={value} onChange={onChange}/>
        </>
*/

    <div className={'form-wrap'}>

        <input type={type} className="field-input custom-input" maxLength={256} name={name}
                    placeholder={label} id={index.toString()} onChange={onChange}/>
            {error && <div>{error}</div>}
        </div>

    );
};

export default CustomInput;


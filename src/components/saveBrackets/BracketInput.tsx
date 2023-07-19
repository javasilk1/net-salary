import React from "react";
import TextField from "@material-ui/core/TextField";

interface BracketInputProps  {
    value: number | string;
    name: string;
    label?: string;
    type?: string;
    error?: string;
    index:number;
    variant?:string;
    onChange: (id:number, field: string, value:string) => void;

    //onChange: (index: number, key: string, value: string) => void;
}


const BracketInput: React.FC<BracketInputProps> = ({ index, type,value, error,label,onChange,name,variant}) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(index, name, e.target.value);
    };

    return (
        <div>

            <TextField
                variant="outlined"
                //name={name}
                label={name}
                type={type}
                value={value}
                onChange={handleChange}
            />
            {error && <div>{error}</div>}
        </div>

    );
};

export default BracketInput;

/*
const CustomText: React.FC<InputProps> = ({
                                         name,
                                         label,
                                         type = "text",
                                         value,
                                         onChange,
                                         index,
                                         error,
                                     }) => {
    return (
        <div>
            {label && <label htmlFor={name}>{label}</label>}
            <TextField
                id={name}
                name={name}
                type={type}
                value={value}
                onChange={(e) => onChange(index, e.target.value)}
            />
            {error && <div>{error}</div>}
        </div>
    );
};

export default CustomText;
*/

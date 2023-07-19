import React, {ChangeEvent} from "react";
import {ProfitabilityIndex} from "../interfaces/config";
import "../App.css"

interface selectInputProps  {
    options: ProfitabilityIndex<string, number, string>[]
    name: string;
    value: any;
    label?: string;
    type?: string;
    error?: string;
    variant?:string;
    onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

const CustomSelect: React.FC<selectInputProps> = ({ type,value, error,label,onChange,name,options}) => {
    return (
        <div className="custom-select">
            <select id="select-default" name={name}
                    value={value}
                    onChange={onChange}
            >
                <option value="" >Seleziona settore attività</option>
                {options.map((option, index) => {
                    return <option key={index} value={option.code}>{option.label}</option>
                })}
            </select>
        </div>
    );
}

export default CustomSelect;


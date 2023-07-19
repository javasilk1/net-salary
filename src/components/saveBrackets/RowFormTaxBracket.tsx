import React from 'react';
import {BracketTax} from "../../interfaces/bracketTax";
import BracketInput from "./BracketInput";
import {Stack} from "@mui/material";

interface RowFormTaxIndex extends BracketTax {
    index: number;
    onChange: (id:number, field: string, value:string) => void;
}

const RowFormTaxBracket: React.FC<RowFormTaxIndex> = ({ min, max,aliquota, index, onChange}) => {
    return (
<>
                <Stack key={index} direction="row" padding={5} alignItems={'center'}>
                    <BracketInput
                        type="number"
                        value={min}
                        variant="outlined"
                        label={"min"}
                        name={'min'}
                        index={index}
                        onChange={onChange}
                    />
                    <BracketInput
                        type="number"
                        value={max}
                        variant="outlined"
                        label={"max"}
                        name={'max'}
                        index={index}
                        onChange={onChange}

                    />
                    <BracketInput
                        type="number"
                        value={aliquota}
                        variant="outlined"
                        label={"aliquota"}
                        name={'aliquota'}
                        index={index}
                        onChange={onChange}

                    />
                </Stack>

</>
    );
};

export default RowFormTaxBracket;

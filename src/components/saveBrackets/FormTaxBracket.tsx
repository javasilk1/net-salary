import React from 'react';
import {useFormik} from 'formik';
import {Button, Stack, TextField, Typography} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {bracketsTaxSelector, setBracketsTax} from "../../store/BracketsSlice";
import RowFormTaxBracket from "./RowFormTaxBracket";
import {BracketsTax} from "../../interfaces/bracketsTax";
import {BracketTax} from "../../interfaces/bracketTax";

const FormTaxBracket: React.FC = () => {
    const dispatch = useAppDispatch()
    const bracketsTaxRedux = useAppSelector(bracketsTaxSelector)

    const {year: yearRedux}: any = bracketsTaxRedux;
    const {items: itemsRedux}: any = bracketsTaxRedux;

    const formik = useFormik<BracketsTax>({
        initialValues: {
            year: yearRedux,
            items:itemsRedux
        },
        onSubmit: (values) => {
            dispatch(setBracketsTax(values))
        },
    });

    const handleBracketChange = (index: number, field: keyof BracketTax | string, value:string):void => {
        //const value = e.target.value;
        const brackets = [...formik.values.items];
        brackets[index][field as keyof BracketTax] = parseInt(value);
        formik.setFieldValue("items", brackets);
    };

    const handleAddBracket = () => {
        const brackets = [...formik.values.items, { min: 0, max: 0 }];
        formik.setFieldValue("items", brackets);
    };

    const handleRemoveBracket = (index: number) => {
        const brackets = [...formik.values.items];
        brackets.splice(index, 1);
        formik.setFieldValue("items", brackets);
    };

    return (
        <form onSubmit={formik.handleSubmit}>
            <Typography variant="h4" color="primary" align="center">
                Inserisci scaglioni
            </Typography>
            <Stack textAlign={'justify'} alignContent={'space-between'} alignItems={'center'}>
            <label htmlFor="year">Year:</label>
            <TextField
                type={'text'}
                //id="year"
                name="year"
                label={'fff'}
                onChange={formik.handleChange}
                value={formik.values.year}
                variant="outlined" />

            {formik.values.items.map((brackets, index) => (
                <Stack key={index} direction="row" padding={5} alignItems={'center'}>
                    <RowFormTaxBracket index={index} onChange={handleBracketChange} min={brackets.min} max={brackets.max} aliquota={brackets.aliquota}/>
                    <button type="button" onClick={() => handleRemoveBracket(index)}>
                        Remove
                    </button>
                </Stack>
            ))}

            <Stack direction={'row'}>
                <Button variant="contained" color="primary" onClick={handleAddBracket}>
                    Aggiungi scaglione
                </Button>

            <Button type="submit">Submit</Button>
            </Stack>
            </Stack>
        </form>
    );
};

export default FormTaxBracket;

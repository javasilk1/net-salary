import React from 'react';
import {useFormik} from 'formik';
import {Stack, Typography} from "@mui/material";
import useCalculateNetSalary from "./hooks/useCalculateNetSalary";
import {BaseSalary, ComposedSalary} from "../../types/BaseSalary";
import {config} from "../../config";
import CustomInput from "../CustomInput";
import CustomSelect from "../CustomSelect";
import CustomGroup from "../CustomGroup";

interface formProps {
    salary: BaseSalary;
    setSalary: React.Dispatch<React.SetStateAction<ComposedSalary>>;
}

const FormNetSalary: React.FC<formProps> = (props) => {
    const { salary, setSalary } = props;
    const optionsRadio = [
        {
            code: config.taxType.FLAT5,
            label: "Forfettario(5)",
            rate: 1
        },

        {
            code: config.taxType.FLAT15,
            label: "Forfettario(15)",
            rate: 1
        },
        {
            code: config.taxType.ORDINARY,
            label: "Ordinario",
            rate: 1
        }

    ]

    const {calculateNetSalary} = useCalculateNetSalary()

    interface formDefaultValues {
        grossSalary: number
        taxType: string,
        profession: string
    }

    const formik = useFormik<formDefaultValues>({
        initialValues: {
            grossSalary: 0,
            taxType: config.taxType.FLAT5,
            profession: "",
        },
        onSubmit: (values) => {
            const calulateSalary = handleCalculateNetSalary(values.grossSalary, values.taxType, values.profession)
            setSalary(calulateSalary)
        },
    });

    const handleCalculateNetSalary = (grossSalary: number, taxType: string, profession: string) : ComposedSalary => {
        return calculateNetSalary(grossSalary, taxType, profession)
    };

    return (
        <form onSubmit={formik.handleSubmit}>
            <Stack alignContent={'center'} alignItems={'center'} justifyContent={'center'} justifyItems={'center'}>
                <Typography variant={'h3'} sx={{fontFamily: "Poppins", fontWeight:700}} pb={5}>Calcola il netto</Typography>
                {/*<input  className={'field-input custom-input'} placeholder={'Fatturato'} value={formik.values.grossSalary} onChange={formik}/>*/}
                <CustomInput
                    index={1}
                    type={'number'}
                    //id="year"
                    label={'Fatturato (annuo)'}
                    name="grossSalary"
                    onChange={formik.handleChange}
                    value={''}
                    variant="outlined" />

                <Stack pt={3}>
                <Typography  sx={{fontFamily: "Poppins", fontWeight:400, fontSize:16 }} pb={1}>Tipo di contabilità</Typography>
                    <CustomGroup options={optionsRadio} value={formik.values.taxType}
                                 name={'taxType'}                  onChange={formik.handleChange}
                    />
                </Stack>
                <Stack pt={3}>

                <CustomSelect
                    options={config.inps.profitabilityIndex}
                    name={'profession'}
                    value={formik.values.profession}
                    label={"Settore Attività"}
                    onChange={formik.handleChange}
                />
                    </Stack>


            </Stack>


            <Stack direction={'row'} pt={5}>
                <button   className={'button button5'} type="submit">Calcola</button>


            </Stack>

        </form>
    );
};

export default FormNetSalary;

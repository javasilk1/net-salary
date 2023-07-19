import {useAppSelector} from "../../../hooks/redux";
import {bracketsTaxSelector} from "../../../store/BracketsSlice";
import {BracketsTax} from "../../../interfaces/bracketsTax";
import {BaseSalary, ComposedSalary} from "../../../types/BaseSalary";
import {DataInputCalculate} from "../../../types/DataInputCalculate";
import {config} from "../../../config";

const useCalculateNetSalary = () => {
    const bracketsTaxRedux = useAppSelector(bracketsTaxSelector)
    const initialValues = 0 ;

    const {year: yearRedux}: any = bracketsTaxRedux;
    const {items: itemsRedux}: any = bracketsTaxRedux;

    const bracketsTaxReduxCompose = {
        year: yearRedux,
        items:itemsRedux
    } as BracketsTax


    const calculateRegularTaxes = (grossSalary: number, inps: number): BaseSalary => {
        let taxes = 0;
        const taxable = grossSalary - inps;
        bracketsTaxReduxCompose.items.map((bracket) => {
                let bracketTax = 0;
                if (taxable < bracket.min) {
                    return;
                }
                if (taxable >= bracket.max) {
                    bracketTax = (bracket.aliquota / 100) * (bracket.max - bracket.min);
                } else {
                    bracketTax = (bracket.aliquota / 100) * (taxable - bracket.min)
                }
                taxes += bracketTax
            }
        )
        return {taxes :taxes, taxable: taxable};

    }

    const calculateFlatTax = (grossSalary: number, dataInput:DataInputCalculate, inps:number): BaseSalary => {
        const taxable = (dataInput.profitabilityIndex / 100) * (grossSalary - inps)
        const taxes = (dataInput.rate / 100) * taxable;
        return {taxes :taxes, taxable: taxable};
    }

    const calculateInps = (grossSalary: number, dataInput:DataInputCalculate): number => {
        const thresholdMin = config.inps.thresholdMin;
        const flatInps = config.inps.flatInps;
        const profitabilityIndex = dataInput.profitabilityIndex;
        if (grossSalary <= thresholdMin){
            return flatInps
        }
        const taxableVariable = (profitabilityIndex /100) * (grossSalary);
        const variableInps = (config.inps.rateVariable /100) * (taxableVariable - thresholdMin)
        return   (variableInps + flatInps);
    }

    const getDataInputIrpefByProfession = (profession: string): DataInputCalculate => {
        const profitabilityIndexes = config.irpef.profitabilityIndex;
        let profitabilityIndexProfession = profitabilityIndexes.find(rateIndex => rateIndex.code === profession);

        return  {
            rate:0,
            profitabilityIndex:profitabilityIndexProfession?.rate
        } as DataInputCalculate
    }

    const getDataInputInpsByProfession = (profession: string): DataInputCalculate => {
        const profitabilityIndexes = config.inps.profitabilityIndex;
        let profitabilityIndexProfession = profitabilityIndexes.find(rateIndex => rateIndex.code == profession);
         return  {
            rate:0,
            profitabilityIndex:profitabilityIndexProfession?.rate
        } as DataInputCalculate
    }

    const calculateIrpefByType = (taxType: string, grossSalary: number, profession: string, inps: number):number => {
        let scomposedGrossSalary = {
            taxes:0,
            taxable:0,
        } as BaseSalary

        const dataInputIrpef = getDataInputIrpefByProfession(profession)
        switch (taxType) {
            case "ord":
                scomposedGrossSalary = calculateRegularTaxes(grossSalary, inps);
                break;
            case "F5":
                dataInputIrpef.rate = 5
                scomposedGrossSalary = calculateFlatTax(grossSalary, dataInputIrpef, inps);
                break;
            case "F15":
                dataInputIrpef.rate = 15
                scomposedGrossSalary = calculateFlatTax(grossSalary, dataInputIrpef, inps);
                break;
            default:
                scomposedGrossSalary = calculateRegularTaxes(grossSalary, inps) ;
        }
        return scomposedGrossSalary.taxes
    }
    const calculateInpsByType = (profession: string, grossSalary: number):number => {
        const dataInputInps = getDataInputInpsByProfession(profession)
        return calculateInps(grossSalary, dataInputInps);
    }

    const calculateNetSalary = (grossSalary:number, type: string, profession: string):ComposedSalary => {
        let salary = {
            taxes:0,
            taxable:0,
            net:0,
            inps:0
        } as ComposedSalary


        const inps = calculateInpsByType(profession, grossSalary)
        salary.inps = inps;
        const taxes = calculateIrpefByType(type, grossSalary, profession, inps);
        salary.taxes = taxes;
        salary.net = grossSalary - taxes - inps;
        return salary
    }


    const resetNetSalary = () => {
        //setNetSalary(initialValues)
    }

    return {
        calculateNetSalary,
        resetNetSalary
    }
};

export default useCalculateNetSalary

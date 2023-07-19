export interface ProfitabilityIndex<Type, Rate, Code> {
    label: Type;
    rate: Rate;
    code: Code;
}


export interface Config {
    taxType :{
        ORDINARY: string
        FLAT15: string
        FLAT5: string
    },
    professionalType :{
        FREELANCE:"freelance",
        TRADER:"trader",
    },
    inps: {
        thresholdMin: number
        profitabilityIndex: ProfitabilityIndex<string, number, string>[]
        flatInps: number
        rateVariable: number
        reteVariableMin21:number
    },
    irpef : {
        profitabilityIndex: ProfitabilityIndex<string, number, string>[]

    }
}


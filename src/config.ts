import {Config} from "./interfaces/config";

export const config: Config = {
    taxType :{
        ORDINARY: "ord",
        FLAT15: "F15",
        FLAT5: "F5",
    },
    professionalType :{
        FREELANCE:"freelance",
        TRADER:"trader",
    },



inps: {
        thresholdMin: 16243,
        profitabilityIndex: [
            {
                label: "Industrie alimentari e delle bevande",
                code: "Industrie alimentari e delle bevande",
                rate:40
            },
            {
                label: "Commercio all’ingrosso e al dettaglio",
                code: "Commercio all’ingrosso e al dettaglio",
                rate:40
            },
            {
                label: "Commercio ambulante di prodotti alimentari e bevande",
                code: "Commercio ambulante di prodotti alimentari e bevande",
                rate:40
            },
            {
                label: "Commercio ambulante di altri prodotti",
                code: "Commercio ambulante di altri prodotti",
                rate:54
            },
            {
                label: "Costruzioni e attività immobiliari",
                code: "Costruzioni e attività immobiliari",
                rate:86
            },
            {
                label: "Intermediari del commercio",
                code: "Intermediari del commercio",
                rate:62
            },
            {
                label: "Commercio ambulante di altri prodotti",
                code: "Commercio ambulante di altri prodotti",
                rate:54
            },
            {
                label: "Attività professionali, scientifiche, tecniche, sanitarie, di istruzione, servizi finanziari ed assicurativi",
                code: "Attivita professionali",
                rate:78
            },
            {
                label: "Altre attività economiche",
                code: "Altre attività economiche",
                rate:67
            },
        ],
        flatInps: 3983.73,
        rateVariable: 24,
        reteVariableMin21:21,

    },
    irpef : {
        profitabilityIndex: [
            {
                label: "Industrie alimentari e delle bevande",
                code: "Industrie alimentari e delle bevande",
                rate:40
            },
            {
                label: "Commercio all’ingrosso e al dettaglio",
                code: "Commercio all’ingrosso e al dettaglio",
                rate:40
            },
            {
                label: "Commercio ambulante di prodotti alimentari e bevande",
                code: "Commercio ambulante di prodotti alimentari e bevande",
                rate:40
            },
            {
                label: "Commercio ambulante di altri prodotti",
                code: "Commercio ambulante di altri prodotti",
                rate:54
            },
            {
                label: "Costruzioni e attività immobiliari",
                code: "Costruzioni e attività immobiliari",
                rate:86
            },
            {
                label: "Intermediari del commercio",
                code: "Intermediari del commercio",
                rate:62
            },
            {
                label: "Commercio ambulante di altri prodotti",
                code: "Commercio ambulante di altri prodotti",
                rate:54
            },
            {
                label: "Attività professionali, scientifiche, tecniche, sanitarie, di istruzione, servizi finanziari ed assicurativi",
                code: "Attivita professionali",
                rate:78
            },
            {
                label: "Altre attività economiche",
                code: "Altre attività economiche",
                rate:67
            },
        ],

    }

}

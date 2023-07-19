export type BaseSalary =  {
    taxable:  number,
    taxes:  number,
}

export type Taxes  = {
    net:  number,
    inps:number
}

export type ComposedSalary =  Taxes & BaseSalary;


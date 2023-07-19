import React, {useEffect, useState} from 'react';
import '../App.css';
import FormNetSalary from "../components/NetSalary/FormNetSalary";
import {ComposedSalary} from "../types/BaseSalary";
import {Stack} from "@mui/material";
import TableResult from "../components/home/tableResult";
import Layout from "../components/Layout";

const Home: React.FC = () => {
    const [salary, setSalary] = useState<ComposedSalary>({    taxable:  0,
        taxes:  0,
        net:  0,
        inps: 0
    })

    useEffect(()=> {

        if (salary.net === undefined || salary.net === 0) {
            const defaultSalary = {    taxable:  0,
                taxes:  0,
                net:  0,
                inps: 0
            }
            setSalary(defaultSalary)
        }

    },[])


    return (
        <Layout>
      <div className="App">
        <FormNetSalary salary={salary} setSalary={setSalary}/>
          {salary &&
              <Stack alignItems={'center'} alignContent={'center'} justifyItems={'center'} justifyContent={'center'} pt={5}>

                   <TableResult inps={salary.inps} irpef={salary.taxes} net={salary.net}/>

              </Stack>
          }
      </div>
        </Layout>

  )
}
export default Home;


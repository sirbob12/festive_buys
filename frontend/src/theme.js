import {createTheme} from '@mui/material/styles';
import { red } from '@mui/material/colors';


export const theme = createTheme({
   palette:{
    primary:{
        main:'#382C67',
        light:'#04214f'
    },

    secondary:{
        main:'#F05AB4'
    }
   },

   typography:{
      fontFamily:'jost',

      fontweightLight:400,
      fontWeightRegular:500,
      fontWeightMedium:700,
      fontWeightBold:900

    
      
   
   }
})
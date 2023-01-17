import { useState } from "react"

import { Barcode } from "../../../barcode/barcode"
import { PrepDescBloc } from "./prepDescBloc"
import { PrepInfoBloc } from "./prepInfoBloc"

export const ReagentTable = () => {

   
   return(
         <>
            <PrepInfoBloc/>
            <PrepDescBloc />
         </>
         )

}
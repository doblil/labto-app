import { useState } from "react"

import { Barcode } from "../../../barcode/barcode"
import { PrepDescBloc } from "./prepDescBloc"
import { PrepInfoBloc } from "./prepInfoBloc"

export const ReagentTable = () => {
   const [showBarcode, setShowBarcode] = useState(true) 
   
   return(
         <>
            <PrepInfoBloc/>
            <PrepDescBloc setShowBarcode = {setShowBarcode}/>
            <Barcode setShowBarcode = {setShowBarcode} showBarcode = {showBarcode}/>
         </>
         )

}
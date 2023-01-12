import { PrepDescBloc } from "./prep/prepDescBloc"
import { PrepInfoBloc } from "./prep/prepInfoBloc"
import { PrepMenu } from "./prep/prepMenu"
import { Header } from "../header/header"

import './screen.scss'
import { AddReag } from "./prep/add/addReag"
export const Screen = () => {
  return(
    <>
      <Header/>
      <div className="screen">
          <PrepMenu/>
          {/* <PrepInfoBloc/>
          <PrepDescBloc /> */}
          <AddReag/>
      </div>
    </>
  )
}
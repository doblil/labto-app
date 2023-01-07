import { PrepDescBloc } from "./prep/prepDescBloc"
import { PrepInfoBloc } from "./prep/prepInfoBloc"
import { PrepMenu } from "./prep/prepMenu"

import './screen.scss'
export const Screen = () => {
  return(
    <div className="screen">
        <PrepMenu/>
        <PrepInfoBloc/>
        <PrepDescBloc/>
    </div>
  )
}
import { useSelector } from "react-redux"
import { AuthForm } from "../authForm/authForm";
import { Screen } from "../screens/screen";

export const Start = () => {
    const {isAuth} = useSelector(state => state.auth);

    if (!isAuth) {
        return <AuthForm/>
    }

    return <Screen/>
}
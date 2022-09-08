import { User } from "firebase/auth";
import { atom } from "recoil";




const initalValues = {
    name:'',
    email:'',
}

export type FormValuesProps = {
    name:string,
    email:string,
}

export const formValues = atom<FormValuesProps>({
    key:'formValues',
    default:initalValues
})


export const user = atom<User>({
    key:'user',
    default:{} as User
})
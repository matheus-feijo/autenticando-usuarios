import { useSetRecoilState } from "recoil"
import { formValues, FormValuesProps } from "../atom"


export const useSetFormValues = ()=>{
    const setFormValues = useSetRecoilState<FormValuesProps>(formValues);

    return (value:FormValuesProps)=>{
        return setFormValues(value);
    }

}
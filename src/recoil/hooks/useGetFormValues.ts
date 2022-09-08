import { useRecoilState, useRecoilValue } from "recoil"
import { formValues } from "../atom"


export const useGetFormValues = () =>{
    return useRecoilValue(formValues);

}
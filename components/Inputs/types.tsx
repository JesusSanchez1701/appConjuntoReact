import { KeyboardTypeOptions } from "react-native";

type InputComponent ={
    _type?: KeyboardTypeOptions,
    _placeholder?:string,
    _id?:string,
    _name?:string,  
    _defaultValue?:string,
    _secureTextEntry?:boolean // campo protegido para las passwords
    _onChange?: (text: string) => void,
    onChange?: (text: string) => void,
    onBlur?: () => void,
    value?: string
}

export type { InputComponent };

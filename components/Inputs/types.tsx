import { KeyboardTypeOptions } from "react-native";

type InputComponent ={
    _type?: KeyboardTypeOptions,
    _placeholder?:string,
    _id?:string,
    _name?:string,  
    _defaultValue?:string,
    _secureTextEntry?:boolean // campo protegido para las passwords
}

export type { InputComponent };

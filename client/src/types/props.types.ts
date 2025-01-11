import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { HTMLInputAutoCompleteAttribute, HTMLInputTypeAttribute } from "react";

export type NavItemPropsType = {
    Icon: any;
    text: string;
    href: string;
}

export type InputFormPropsType = {
    type: HTMLInputTypeAttribute; 
    id: string; 
    name: string; 
    register: string; 
    autoComplete: HTMLInputAutoCompleteAttribute; 
    autoFocus: boolean;
    max: number;
}

export type QuestionAuthPropsType = {
    route: string;
    action: string;
    question: string;
}

export type ButtonsHeaderPropsType = {
    pathname: string;
    router: AppRouterInstance
}
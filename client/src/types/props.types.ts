import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { HTMLInputAutoCompleteAttribute, HTMLInputTypeAttribute } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

export type NavItemPropsType = {
    Icon: any;
    text: string;
    href: string;
    pathname: string;
}

export type InputFormPropsType = {
    type: HTMLInputTypeAttribute;
    label: string;
    name: string;
    errors: FieldError;
    register: UseFormRegisterReturn<any>;
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
    router: AppRouterInstance;
    isLoggedIn: boolean;
    setIsMenu: (isMenu: boolean) => void;
    isMenu: boolean;
    logout: () => void;
}

export type SumbitPropsType = {
    text: string;
    isDisabled: boolean;
}

export type NavMenuPropsType = {
    Icon: any;
    setIsMenu: (isMenu: boolean) => void;
    title: string;
    href: string;
}

export type MenuPropsType = {
    setIsMenu: (isMenu: boolean) => void;
    isLoggedIn: boolean;
    router: AppRouterInstance;
    logout: () => void;
}
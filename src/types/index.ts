import { CSSProperties } from "react";

export interface Bike {
    title: string;
    image: string;
    description: string;
    url: string
}

export interface Article {
    title: string;
    content: any;
    image: string;
    url: string;
    buttonText: string,
    style?: CSSProperties
}
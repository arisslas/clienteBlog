export interface IDate {
    year: number,
    month: number,
    day: number
}

export interface ITime {
    hour: number,
    minute: number
}

export interface IFecha {
    date: IDate,
    time: ITime
}

export interface IPost {
    id: number,
    titulo: string,
    cuerpo: string,
    fecha: IFecha,
    etiquetas: string,
    visible: boolean,
    imagen: string,
    autor: string,
    valoracion: number,
    numeroValoraciones:number
}

export interface IPage {
    content: IPost[];
    totalElements: number,
    totalPages: number
}

export interface IPost2Send {
    id: number,
    titulo: string,
    cuerpo: string,
    fecha: string,
    etiquetas: string,
    visible: boolean,
    imagen: string,
    autor: string,
    valoracion: number,
    numeroValoraciones:number
}
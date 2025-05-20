export type Category = "2D" | "3D" ;

export type Censorship = "Free" | "10 years" | "12 years" | "14 years" | "16 years";


export interface Movie {
    id: number;
    src: string;
    alt: string;
    title: string;
    category: Category
    censorship: Censorship,
    genre: string;
    duration: number;
}
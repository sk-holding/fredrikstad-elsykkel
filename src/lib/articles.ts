import { Article } from "@/types"

interface Articles extends Array<Article> {}

export const articles: Articles = [
    {
        image: "/",
        title: "Kajakk & Fritid feirer 20 år!",
        content: "Vi er stolte av å markere vårt 20-års jubileum med en ekstraordinær feiring med fantastiske tilbud! Dette er en unik mulighet for deg til å sikre deg en av våre bestselgende elsykler til rekordpriser. Enten du er en erfaren syklist eller nybegynner, har vi den perfekte elsykkelen som vil ta dine eventyr til neste nivå.",
        url: "https://www.kajakk-fritid.no/salg",
        buttonText: "Se tilbud",
    },
    {
        image: "/images/emexx.webp",
        title: "Service av elsykler i hjertet av Drammen",
        content: "Hos oss er du alltid i trygge hender når det gjelder elsykkelproblemer og service. Våre E-mexx servicesentre er tilgjengelige i store byer som Oslo, Trondheim og Bergen, men også her i Drammen. Selv om du bor langt unna våre hovedsteder, trenger du ikke bekymre deg. Vi samarbeider tett med lokale verksteder eller dekker fraktkostnadene til vårt hovedverksted.",
        url: "/verksted",
        buttonText: "Les mer"
    }
]

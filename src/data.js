import p1 from "./assets/project-1.webp";
import p2 from "./assets/project-2.webp";
import p3 from "./assets/project-3.webp";
import p4 from "./assets/project-4.webp";


export const filters = [
    {
        name: "All",
        id: "all",
    },
    {
        name: "WordPress",
        id: "wordpress",
    },
    {
        name: "Web Shop",
        id: "web-shop",
    },
    {
        name: "Custome Website",
        id: "custome-website",
    },
];

export const projects = [
    {
        name: "Clean & neat bussines web presentation ",
        image: p1,
        alt: "grif",
        tags: ["react", "onepage-site"],
        url: "https://grif.rs",
    },
    {
        name: "Professional web-shop with administrator dashboard",
        image: p2,
        alt: "himtex",
        tags: ["react", "next", "web-shop"],
        url: "https://himtexcompany.com/",
    },
    {
        name: "Joint Project - business tools for users",
        image: p3,
        alt: "sustan",
        tags: ["react", "dot-net", "joint-project"],
        url: "https://sustan.rs/",
    },
    {
        name: "All in One - Business presentation and web-shop",
        image: p4,
        alt: "decorambient",
        tags: ["wordpress", "web-shop"],
        url: "https://decorambient.com/",
    },
    // {
    //     name: "The English Tea Ceremony",
    //     image: p5,
    //     tags: ["web-shop", "custome-website"],
    // },
    // {
    //     name: "Saving Photo Memories",
    //     image: p6,
    //     tags: ["website"],
    // },
];

export const achievements = [
    {
        id: 1,
        year: 20,
        description: "SUCCESSFULLY<br />COMPLETED<br />PROJECTS",
    },
    {
        id: 2,
        year: 5,
        description: "YEARS OF<br />EXPERIENCE",
    },
    {
        id: 3,
        year: 15,
        description: "TECHNOLOGIES",
    },
    {
        id: 4,
        year: 70,
        description: "SATISFIED<br />CUSTOMERS",
    },
];

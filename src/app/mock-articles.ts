import { Article } from './article';

export const ARTICLES: Article[] =[
    {
        id: 1,
        title: "My First Article",
        content : '',
        description : "This is my first article! It's great. Please read it. :",
        key : 'my-first-articles',
        date : new Date(),
        imageUrl : "https://angular.io/assets/images/logos/angular/angular.png",
    },
    {
        id: 2,
        title: "My Second Article",
        content : '',
        description : "Also a great articles!",
        key : 'my-second-articles',
        date : new Date(),
        imageUrl : "https://angular.io/assets/images/logos/angular/angular_solidBlack.png",
    }
]

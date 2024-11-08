import { defineStore } from "pinia";

export const useArrayLetters = defineStore("arrayLetters", {
    state: () => ({
        arrayLetters: [
            {
                id: 1,
                letter: "A",
                slides: [
                    {
                        id: 1,
                        title: "Арбус",
                        slideImg: 'https://avatars.mds.yandex.net/i?id=8b1f43849e924ce4e472347c1588e63e_l-5222188-images-thumbs&n=13'
                    },
                    {
                        id: 2,
                        title: "Антелопа",
                        slideImg: "https://avatars.mds.yandex.net/i?id=b53950f842e2651247412354ad241da4d6d43dda-7662303-images-thumbs&n=13"
                    },
                    {
                        id: 3,
                        title: "Айсберг",
                        slideImg: "https://i.pinimg.com/originals/94/4c/3a/944c3a678bb15fbc91f7cf24ca9e8c5e.jpg"
                    },
                ]
            },
            {
                id: 2,
                letter: "B",
                slides: [
                    {
                        id: 1,
                        title: "Белка",
                        slideImg: "https://i.pinimg.com/originals/26/9f/9e/269f9ea3e03c1de310ac101dde1f328d.jpg",
                    },
                    {
                        id: 2,
                        title: "Булка",
                        slideImg: "https://pic.rutubelist.ru/video/8a/1e/8a1ea97f37dbc6e13506376daf84a6d0.jpg"
                    },
                    {
                        id: 3,
                        title: "беседка",
                        slideImg: "https://design-homes.ru/images/galery/3186/obshit-besedku-snaruzhi_613650a8746cc.jpg",
                    },
                   
                ]
            },
        ],
    }),
});

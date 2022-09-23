import { v4 as uuidV4 } from 'uuid'

const now = () => new Date()

const second = 1000
const minute = second * 60
const hour = minute * 60
const day = hour * 24
const week = day * 7
const month = Math.floor((day * 365.25)/12)

let twoDaysAgo = (now()-(day*2))
let threeMinutesAgo = (now()-(minute))
let aWeekAgo = (now()-week)
let aMonthAgo = (now()-month)

export const feed = [
    {
        id: {
            $oid: "6329db9efc13ae4e220001b2"
        },
        author: {
            userId: "f4782f49-aaf0-43ae-bb20-615aaf9e3cc7",
            firstName: "Cindie",
            lastName: "Reilly",
            img: `https://picsum.photos/seed/${uuidV4()}/150/150`
        },
        content: "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.",
        datePosted: now() // just now
    },
    {
        id: {
            $oid: "6329db9efc13ae4e220001b3"
        },
        author: {
            userId: "c15b6a05-8fc2-4978-bdfa-c5522ae55b33",
            firstName: "Debee",
            lastName: "Colledge",
            img: `https://picsum.photos/seed/${uuidV4()}/150/150`
        },
        content: "Duis bibendum.",
        datePosted: threeMinutesAgo
    },
    {
        id: {
            $oid: "6329db9efc13ae4e220001b4"
        },
        author: {
            userId: "bf1b6dce-39f4-45ae-bdb0-7b03f645f27a",
            firstName: "Nickie",
            lastName: "Igounet",
            img: `https://picsum.photos/seed/${uuidV4()}/150/150`
        },
        content: "Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.",
        datePosted: twoDaysAgo
    },
    {
        id: {
            $oid: "6329db9efc13ae4e220001b5"
        },
        author: {
            userId: "950e629b-ffd7-4b0b-945f-a8aa97690866",
            firstName: "Brianne",
            lastName: "Exton",
            img: `https://picsum.photos/seed/${uuidV4()}/150/150`
        },
        content: "Proin at turpis a pede posuere nonummy. Integer non velit. ",
        datePosted: aWeekAgo
    },
    {
        id: {
            $oid: "6329db9efc13ae4e220001b6"
        },
        author: {
            userId: "6e7ea386-c12f-45d1-9364-39bb13bc3729",
            firstName: "Sascha",
            lastName: "Tiesman",
            img: `https://picsum.photos/seed/${uuidV4()}/150/150`
        },
        content: "Sed ante.",
        datePosted: aMonthAgo
    },
    {
        id: {
            $oid: "6329db9efc13ae4e220001b7"
        },
        author: {
            userId: "8da8e7da-7b83-47ab-b19c-d165cf41b582",
            firstName: "Wittie",
            lastName: "Farlham",
            img: `https://picsum.photos/seed/${uuidV4()}/150/150`
        },
        content: "Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
        datePosted: "1661173598000"
    },
    {
        id: {
            $oid: "6329db9efc13ae4e220001b8"
        },
        author: {
            userId: "1e2abece-89cb-4b18-b76b-62a3f8931560",
            firstName: "Arne",
            lastName: "Rudledge",
            img: `https://picsum.photos/seed/${uuidV4()}/150/150`
        },
        content: "Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.",
        datePosted: "1646329655000"
    },
    {
        id: {
            $oid: "6329db9efc13ae4e220001b9"
        },
        author: {
            userId: "cf27a1a9-07b1-4015-afb2-e283bd924957",
            firstName: "Lelia",
            lastName: "Lamburn",
            img: `https://picsum.photos/seed/${uuidV4()}/150/150`
        },
        content: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.",
        datePosted: "1636224272000"
    },
    {
        id: {
            $oid: "6329db9efc13ae4e220001ba"
        },
        author: {
            userId: "eda5d4ad-4e9f-4434-944d-e023c3330623",
            firstName: "Ferdy",
            lastName: "Bourhill",
            img: `https://picsum.photos/seed/${uuidV4()}/150/150`
        },
        content: "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.",
        datePosted: "1643479778000"
    },
    {
        id: {
            $oid: "6329db9efc13ae4e220001bb"
        },
        author: {
            userId: "3b14d673-b31b-40ec-a294-00440401d98f",
            firstName: "Roanne",
            lastName: "Adcock",
            img: `https://picsum.photos/seed/${uuidV4()}/150/150`
        },
        content: "Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
        datePosted: "1658470899000"
    },
    {
        id: {
            $oid: "6329db9efc13ae4e220001bc"
        },
        author: {
            userId: "8e4f783f-e4ce-460e-8861-f042b4cd6be8",
            firstName: "Irv",
            lastName: "Pearman",
            img: `https://picsum.photos/seed/${uuidV4()}/150/150`
        },
        content: "In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
        datePosted: "1655063192000"
    },
    {
        id: {
            $oid: "6329db9efc13ae4e220001bd"
        },
        author: {
            userId: "d06bd434-6d9c-490f-b733-f2aeb5a9b776",
            firstName: "Elnora",
            lastName: "Colquhoun",
            img: `https://picsum.photos/seed/${uuidV4()}/150/150`
        },
        content: "Suspendisse accumsan tortor quis turpis.",
        datePosted: "1635764877000"
    },
    {
        id: {
            $oid: "6329db9efc13ae4e220001be"
        },
        author: {
            userId: "180e999c-769c-47ac-887b-edbfb2eba4b4",
            firstName: "Hershel",
            lastName: "Wellbank",
            img: `https://picsum.photos/seed/${uuidV4()}/150/150`
        },
        content: "Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.",
        datePosted: "1636534632000"
    },
    {
        id: {
            $oid: "6329db9efc13ae4e220001bf"
        },
        author: {
            userId: "a63f84a2-00c5-4b00-9773-ef7674adae6e",
            firstName: "Neddie",
            lastName: "Licence",
            img: `https://picsum.photos/seed/${uuidV4()}/150/150`
        },
        content: "Morbi porttitor lorem id ligula.",
        datePosted: "1646020744000"
    },
    {
        id: {
            $oid: "6329db9efc13ae4e220001c0"
        },
        author: {
            userId: "8fe698a8-e8f6-4d00-b3e7-bb96a11c23ae",
            firstName: "Lanita",
            lastName: "Gallager",
            img: `https://picsum.photos/seed/${uuidV4()}/150/150`
        },
        content: "In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum.",
        datePosted: "1642605503000"
    },
    {
        id: {
            $oid: "6329db9efc13ae4e220001c1"
        },
        author: {
            userId: "d028696c-62f0-47a7-82d3-bb7337bd5102",
            firstName: "Lethia",
            lastName: "Humblestone",
            img: `https://picsum.photos/seed/${uuidV4()}/150/150`
        },
        content: "Morbi non quam nec dui luctus rutrum. Nulla tellus.",
        datePosted: "1638337001000"
    },
    {
        id: {
            $oid: "6329db9efc13ae4e220001c2"
        },
        author: {
            userId: "f5745ad4-2d92-4d64-8d3e-3bfd691426cd",
            firstName: "Cheslie",
            lastName: "Burchnall",
            img: `https://picsum.photos/seed/${uuidV4()}/150/150`
        },
        content: "Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.",
        datePosted: "1657794188000"
    },
    {
        id: {
            $oid: "6329db9efc13ae4e220001c3"
        },
        author: {
            userId: "23fe9ee1-1363-45f7-aca6-dcce7c36d761",
            firstName: "Wade",
            lastName: "Pautot",
            img: `https://picsum.photos/seed/${uuidV4()}/150/150`
        },
        content: "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis.",
        datePosted: "1653828902000"
    },
    {
        id: {
            $oid: "6329db9efc13ae4e220001c4"
        },
        author: {
            userId: "cb18519e-f8e0-44de-9ad0-7620a7bfc961",
            firstName: "Inger",
            lastName: "Prantoni",
            img: `https://picsum.photos/seed/${uuidV4()}/150/150`
        },
        content: "Fusce consequat. Nulla nisl. Nunc nisl.",
        datePosted: "1661814609000"
    },
    {
        id: {
            $oid: "6329db9ffc13ae4e220001c5"
        },
        author: {
            userId: "e71259aa-4151-4fe4-b3d2-a96f3a8dd8b2",
            firstName: "Chuck",
            lastName: "Sahlstrom",
            img: `https://picsum.photos/seed/${uuidV4()}/150/150`
        },
        content: "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
        datePosted: "1663100235000"
    },
    {
        id: {
            $oid: "6329db9ffc13ae4e220001c6"
        },
        author: {
            userId: "e7c8a4c8-fdc1-4ab4-a853-5a437bbcfedd",
            firstName: "Frannie",
            lastName: "Pybus",
            img: `https://picsum.photos/seed/${uuidV4()}/150/150`
        },
        content: "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
        datePosted: "1662101825000"
    },
    {
        id: {
            $oid: "6329db9ffc13ae4e220001c7"
        },
        author: {
            userId: "970ca17d-1163-452f-84c5-b71dc10ef80b",
            firstName: "Wini",
            lastName: "MacMechan",
            img: `https://picsum.photos/seed/${uuidV4()}/150/150`
        },
        content: "Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.",
        datePosted: "1660101747000"
    },
]
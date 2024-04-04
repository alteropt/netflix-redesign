const moviesData = [
    {
        "title": "Outlander",
        "image": "https://m.media-amazon.com/images/I/713a-JKD5NL._AC_SX679_.jpg",
        "description": "This epic tale adapted from Diana Gabaldon's popular series of fantasy-romance novels focuses on the drama of two time-crossed lovers.",
        "ageLimit": 18,
        "yearRelease": 2014,
        "genres": ["Drama"],
        "seasonsAmount": 7,
        "starring": ["Caitriona Balfe", "Sam Heughan", "Tobias Menzies"],
        "creators": ["Ronald D. Moore"],
        "isFavourite": false,
        "isInWatchList": false
    },
    {
        "title": "Stranger Things",
        "image": "https://m.media-amazon.com/images/I/71S1-mL8znL._AC_SY879_.jpg",
        "description": "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.",
        "ageLimit": 16,
        "yearRelease": 2016,
        "genres": ["Sci-fi"],
        "seasonsAmount": 4, 
        "starring": ["Winona Ryder", "David Harbour", "Millie Bobby Brown"],
        "creators": ["The Duffer Brothers"],
        "isFavourite": true,
        "isInWatchList": false
    },
    {
        "title": "Money Heist",
        "image": "https://m.media-amazon.com/images/I/71mxPPEIqoL._AC_SY879_.jpg",
        "description": "Eight thieves take hostages and lock themselves in the Royal Mint of Spain as a criminal mastermind manipulates the police to carry out his plan.",
        "ageLimit": 18,
        "yearRelease": 2017,
        "genres": ["Thriller"],
        "seasonsAmount": 4, 
        "starring": ["Úrsula Corberó", "Álvaro Morte", "Itziar Ituño"],
        "creators": ["Álex Pina"],
        "isFavourite": true,
        "isInWatchList": false
    },
    {
        "title": "Avatar The Last Airbender",
        "image": "https://pbs.twimg.com/media/F-asKW7bcAAC2ru.jpg:large",
        "description": "A young boy known as the Avatar must master the four elemental powers to save a world at war — and fight a ruthless enemy bent on stopping him.",
        "ageLimit": 13,
        "yearRelease": 2024,
        "genres": ["Fantasy"],
        "seasonsAmount": 1,
        "starring": ["Gordon Cormier", "Kiawentiio", "Ian Ousley"],
        "creators": null,
        "isFavourite": false,
        "isInWatchList": true
    },
    {
        "title": "The Queen's Gambit",
        "image": "https://m.media-amazon.com/images/M/MV5BM2EwMmRhMmUtMzBmMS00ZDQ3LTg4OGEtNjlkODk3ZTMxMmJlXkEyXkFqcGdeQXVyMjM5ODk1NDU@._V1_.jpg",
        "description": "In a 1950s orphanage, a young girl reveals an astonishing talent for chess and begins an unlikely journey to stardom while grappling with addiction.",
        "ageLimit": 18,
        "yearRelease": 2020,
        "genres": ["Drama"],
        "seasonsAmount": 1,
        "starring": ["Anya Taylor-Joy", "Bill Camp", "Marielle Heller"],
        "creators": ["Scott Frank", "Allan Scott"],
        "isFavourite": false,
        "isInWatchList": true
    },
    {
        "title": "The Rookie",
        "image": "https://lumiere-a.akamaihd.net/v1/images/p_therookie_19914_618175ec.jpeg",
        "description": "A life-changing incident pushes a 45-year-old man to chase his dream of becoming a cop. But he must prove himself to his LAPD superiors to make the cut.",
        "ageLimit": 16,
        "yearRelease": 2018,
        "genres": ["Drama"],
        "seasonsAmount": 4,
        "starring": ["Nathan Fillion", "Alyssa Diaz", "Richard T. Jones"],
        "creators": ["Alexi Hawley"],
        "isFavourite": false,
        "isInWatchList": false
    },
    {
        "title": "Love Is Blind",
        "image": "https://m.media-amazon.com/images/M/MV5BMDc0MGJkNDMtZDA4Zi00MWQxLTk3M2ItNmRmZGY0NjAxOTRiXkEyXkFqcGdeQXVyMjExMjI5NzI@._V1_.jpg",
        "description": "Nick and Vanessa Lachey host this social experiment where single men and women look for love and get engaged, all before meeting in person.",
        "ageLimit": 18,
        "yearRelease": 2020,
        "genres": ["Reality TV"],
        "seasonsAmount": 6,
        "starring": ["Nick Lachey", "Vanessa Lachey"],
        "creators": null,
        "isFavourite": false,
        "isInWatchList": false
    },
    {
        "title": "Beckham",
        "image": "https://m.media-amazon.com/images/M/MV5BM2Q0Y2Q1ZmUtN2RhMy00M2MwLWJiOWQtYzU1N2Q1ZjFlZGNjXkEyXkFqcGdeQXVyMjQ2MTk1OTE@._V1_.jpg",
        "description": "With never-before-seen footage, this docuseries follows David Beckham's meteoric rise from humble beginnings to global football stardom.",
        "ageLimit": 16,
        "yearRelease": 2023,
        "genres": ["Documentary"],
        "seasonsAmount": 1,
        "starring": ["David Beckham"],
        "creators": null,
        "isFavourite": false,
        "isInWatchList": true
    },
    {
        "title": "Peaky Blinders",
        "image": "https://www.tallengestore.com/cdn/shop/products/PeakyBlinders-ThomasShelby-GarrisonBombing-NetflixTVShow-ArtPoster_7fef60c1-eddd-41e8-89fd-ac6edeba5038.jpg?v=1619864662",
        "description": "A notorious gang in 1919 Birmingham, England, is led by the fierce Tommy Shelby, a crime boss set on moving up in the world no matter the cost.",
        "ageLimit": 18,
        "yearRelease": 2013,
        "genres": ["Drama"],
        "seasonsAmount": 6,
        "starring": ["Cillian Murphy", "Sam Neill", "Helen McCrory"],
        "creators": ["Steven Knight"],
        "isFavourite": false,
        "isInWatchList": true
    },
    {
        "title": "Sex Education",
        "image": "https://m.media-amazon.com/images/I/51zvkux8mUL._AC_UF894,1000_QL80_.jpg",
        "description": "Insecure Otis has all the answers when it comes to sex advice, thanks to his therapist mother. So rebel Maeve proposes a school sex-therapy clinic.",
        "ageLimit": 18,
        "yearRelease": 2019,
        "genres": ["Comedy"],
        "seasonsAmount": 4,
        "starring": ["Asa Butterfield", "Gillian Anderson", "Ncuti Gatwa"],
        "creators": ["Laurie Nunn"],
        "isFavourite": false,
        "isInWatchList": false
    },
  	{
      	"title": "The Crown",
        "image": "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/rockcms/2022-10/crown-season-5-posters-mc-221018-04-157c09.jpg",
        "description": "Inspired by real events, this fictional dramatization tells the story of Queen Elizabeth II and the political and personal events that shaped her reign.",
        "ageLimit": 18,
        "yearRelease": 2016,
        "genres": ["Drama"],
        "seasonsAmount": 6,
        "starring": ["Imelda Staunton", "Jonathan Pryce", "Lesley Manville"],
        "creators": ["Peter Morgan"],
        "isFavourite": false,
        "isInWatchList": false
    },
		{
      	"title": "Berlin",
        "image": "https://m.media-amazon.com/images/M/MV5BZmNjMGViNTQtODFhNy00YzE1LTkyN2MtNzE0MzM1MzA2NDEzXkEyXkFqcGdeQXVyMTUyMzg5NzM2._V1_.jpg",
        "description": "During his glory days, Berlin and a gang assembled in Paris for one of his greatest plans ever: stealing 44 million euros' worth of jewels in one night.",
        "ageLimit": 18,
        "yearRelease": 2023,
        "genres": ["Drama"],
        "seasonsAmount": 1,
        "starring": ["Pedro Alonso", "Michelle Jenner", "Tristán Ulloa"],
        "creators": ["Esther Martínez Lobato", "Álex Pina"],
        "isFavourite": false,
        "isInWatchList": true
    },
		{
      	"title": "Wednesday",
        "image": "https://m.media-amazon.com/images/I/71M8YFEakfL.jpg",
        "description": "Smart, sarcastic and a little dead inside, Wednesday Addams investigates a murder spree while making new friends — and foes — at Nevermore Academy.",
        "ageLimit": 16,
        "yearRelease": 2022,
        "genres": ["Fantasy"],
        "seasonsAmount": 1,
        "starring": ["Jenna Ortega", "Gwendoline Christie", "Riki Lindhome"],
        "creators": ["Alfred Gough", "Miles Millar"],
        "isFavourite": false,
        "isInWatchList": false
    },
		{
      	"title": "The Witcher",
        "image": "https://files.ekmcdn.com/allwallpapers/images/the-witcher-poster-61cm-x-91.5cm-24-x-36-36346-p.jpg",
        "description": "Geralt of Rivia, a mutated monster-hunter for hire, journeys toward his destiny in a turbulent world where people often prove more wicked than beasts.",
        "ageLimit": 18,
        "yearRelease": 2019,
        "genres": ["Fantasy"],
        "seasonsAmount": 3,
        "starring": ["Henry Cavill", "Anya Chalotra", "Freya Allan"],
        "creators": ["Lauren Schmidt Hissrich"],
        "isFavourite": true,
        "isInWatchList": false
    },
		{
      	"title": "Squid Game",
        "image": "https://m.media-amazon.com/images/M/MV5BYWE3MDVkN2EtNjQ5MS00ZDQ4LTliNzYtMjc2YWMzMDEwMTA3XkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_.jpg",
        "description": "Hundreds of cash-strapped players accept a strange invitation to compete in children's games. Inside, a tempting prize awaits — with deadly high stakes.",
        "ageLimit": 18,
        "yearRelease": 2021,
        "genres": ["Thriller"],
        "seasonsAmount": 1,
        "starring": ["Lee Jung-jae", "Park Hae-soo", "Wi Ha-jun"],
        "creators": ["Hwang Dong-hyuk"],
        "isFavourite": false,
        "isInWatchList": true
    }
]

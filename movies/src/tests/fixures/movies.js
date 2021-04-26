export default {
    title: 'test moive 1',
    releaseDate: 1983,
    synopsis: 'Test sysnopsis of the movie',
    imageUrl: 'testurl.jpg'
};
export const movieList = [{ 
    "id": 2, 
    "type": "poster", 
    "rank": 2, 
    "synopsis": "Epic tale in which an intrepid archaeologist tries to beat a band of Nazis to a unique religious relic which is central to their plans for world domination. Battling against a snake phobia and a vengeful ex-girlfriend, Indiana Jones is in constant peril, making hair's-breadth escapes at every turn in this celebration of the innocent adventure movies of an earlier era.", "title": "Raiders of the Lost Ark", "imageUrl": "https://preview.ibb.co/fn5Xyp/raiders.jpg", 
    "releaseDate": 1981 
}]

export const sortOrder = [{ 
    "label": "Release Date", 
    "valueToOrderBy": "releaseDate" }, { 
        "label": "Rank", 
        "valueToOrderBy": "rank" 
    }]
import { useState } from "react"

 

const gameList = [
    {

        Title: "Painting",
        description: "ABCya Paint is a great way for kids to engage in digital storytelling! Fun tools and accessories such as stickers, coloring pages, spray paint, stamps, typing, and rainbow brushes help kids' stories come to life. Images can be saved and printed and shared with classmates and families.",
        original_location: "https://www.abcya.com/",
        cover_image: <img src= ""/>,
        Play_Link: "https://www.abcya.com/games/abcya_paint"
    },
    {
        Title: "Same and different",
        description: "Learning to compare has never tasted so sweet! Same & Different teaches color and shape comparison with an abundance of vibrant, fun donuts. In each set of donuts, find the pair with the same shape or color (or the donut with a unique shape and color) to progress through the game and unlock the Make a Donut bonus game! If all those comparisons made you hungry, treat yourself and create a donut of your very own. You can choose the donut shape, the icing color, and even the type of sprinkles. Don’t forget to “eat” it when you’re done! Same & Different is a fun treat that proves that comparing shapes and colors is sweeter by the dozen.",
        original_location: "https://www.abcya.com/",
        cover_image: <img src=''/>,
        Play_Link: "https://www.abcya.com/games/same-different"
    },
    {
        Title: "Dress for the Weather",
        description: "Woof woof...do you know how to dress for the weather? Pick a puppy and take a look outside. Is it cold? Don’t forget a sweater! Is it sunny? Grab your sunglasses! In this game, kids will have fun while learning which items are appropriate to wear in all types of weather.",
        original_location: "https://www.abcya.com/",
        cover_image: <img src=''/>,
        Play_Link: "https://www.abcya.com/games/dress_for_the_weather"

    },
    {
        Title: "Memory",
        description: "Matching game to help toddler work on Focus, Agility, and recollection.",
        original_location: "https://www.memozor.com",
        cover_image: <img src=""/>,
        Play_Link: "https://www.memozor.com/memory-games/for-toddlers-babies/easy-learn-the-alphabet"
    },
    {
        Title: "Tracing The alphabet",
        Desription: "Learn and practice alphabets along with this free online alphabet tracing game for kids. It is a fun platform designed for kids of all ages to broadcast their creativity by tracing A to Z letters with colors of their choice. Teachers can incorporate this into their learning session to grab the attention of the little learners while trace the alphabet. This is great for nurturing creativity and teaching alphabet to Childs. Learning through books and worksheets at times become boring and draft away the attention of children’s, this online alphabet tracing for toddlers is going to make it fun and engaging. Be it an activity session, teaching letterto trace to Childs or practice this game is for all.",
        original_location: "https://www.thelearningapps.com/",
        cover_image: <img src=''/>,
        Play_Link:"https://www.thelearningapps.com/alphabet-tracing-game-for-kids/"


}
]


const Games = () => {
    const [gamesList, setGameList] = useState(gameList)
    console.log(gamesList)
  return (
    <div>
        <h1>Games</h1>
        <div className="frame" onClick={()=> console.log("clicking")}>
        <iframe 
        src="https://www.thelearningapps.com/alphabet-tracing-game-for-kids/"
        // title="title"
      ></iframe>
      </div>
        {
            gamesList.map((game)=> {
                return (
                    <>
                    {game.Title}
                    </>
                )
            })



        }
    </div>
  )
}

export default Games
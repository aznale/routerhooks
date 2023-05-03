import PersonCard from "./PersonCard.jsx";
import { Grid } from "semantic-ui-react";


function People() {
    // array with json-person structure
    const people = [
        {
            image: "https://i.imgur.com/MK3eW3As.jpg",
            name: "Katherine",
            surname: "Johnson",
            age: 101,
            job: "mathematician",
        },
        {
            image:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/N.Tesla.JPG/800px-N.Tesla.JPG",
            name: "Nicola",
            surname: "Telsa",
            age: 36,
            job: "mathematician",
        },
        {
            image:
                "https://upload.wikimedia.org/wikipedia/commons/e/eb/Stephen_Hawking.StarChild.jpg",
            name: "Stephen",
            surname: "Hawking",
            age: 85,
            job: "software engineer",
        },
        {
            image:
                "https://i1.sndcdn.com/avatars-000009799632-tqwjcs-t500x500.jpg",
            name: "Glenn",
            surname: "Gould",
            age: 36,
            job: "musician",
        },
        {
            image:
                "https://media.revistavanityfair.es/photos/60e8447abb9e71d46fd8cdd0/master/w_1600%2Cc_limit/150408.jpg",
            name: "Fernando",
            surname: "Higueras",
            age: 56,
            job: "architect, musician etc.",
        },
        {
            image:
                "https://i.scdn.co/image/ab6761610000e5ebbdecce2bd79edb70e3372679",
            name: "Pepe",
            surname: "Sales",
            age: 36,
            job: "musician, artist etc.",
        },
        {
            image:
                "    https://s1.ppllstatics.com/diariovasco/www/pre2017/multimedia/noticias/201504/15/media/DF0J8QO1--490x578.jpg",
            name: "Elena",
            surname: "Asins",
            age: 36,
            job: "artist",
        }
    ];


    return (
        <>
            <h1 style={{ padding: "20px", backgroundColor: "lightgreen" }}>Grid with spread operator</h1>

            <Grid columns={4} doubling stackable style={{ padding: "20px", backgroundColor: "whitesmoke" }}>

                {people.map((person, index) => (
                    <Grid.Column key={index}>
                        <PersonCard {...person} />
                    </Grid.Column>
                ))}
            </Grid>

        </>

    );

}

export default People;


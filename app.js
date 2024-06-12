const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Ahoj. Úděléj úkol pro společnost KOALA42 na pozici Junior Backend (Node.js) ');
});

app.get('/data', (req, res) => {
    const data = {
        characters_count: 42,
        average_age: 42,
        average_weight: 42,
        genders: {
            female: 42,
            male: 42,
            other: 42,
        },
        characters: [{
            data: {
                id: 44,
                name: "Trillian",
                gender: "female",
                ability: "mathematician",
                minimal_distance: "6.2000000000",
                weight: 49,
                born: "Mon Dec 14 00:00:00 CET 1994",
                in_space_since: "Wed Dec 24 17:21:50 CET 2014",
                beer_consumption: 6704,
                knows_the_answer: true
            },
            children: {
                has_nemesis: {
                    records: {
                        data: {
                            id: 1007,
                            character_id: 44,
                            is_alive: true,
                            years: 29
                        },
                        children: {
                            has_secret: {
                                records: [
                                    {
                                        data: {
                                            id: 2008,
                                            nemesis_id: 1007,
                                            secret_code: 1799820570
                                        },
                                        children: {}
                                    }
                                ]
                            }
                        }
                    }
                }
            }
        }]
    };

    res.json(data);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
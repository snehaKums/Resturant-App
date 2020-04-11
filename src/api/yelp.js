import axios from 'axios';

export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization:'Bearer yg5Vg4ikSU9jHJNfHrWP25m5h2RiJyGw6rHgQnuUUueJ-frbnB0IN9JjCbqsyc2bQHFYUyPMAZvG-eeRicZAtrgxjm-egjepiAwLsRw6PlfXAGk_xkFe7-OGvqaQXnYx'
    }
});


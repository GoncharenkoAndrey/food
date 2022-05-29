import axios from "axios";

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization: "Bearer qE7fejDLgSMWnFXvjUmASp3f0yePZkDLZTDQZ8s2GL9o2ijtqUWm0ss2v9Ds5L_2vq2gMCA-1cFCGdROKIQ9uH5GQWxyhgC7eKcShDytunOa6L5KRQ57xn9u5PORYnYx"
    }
});
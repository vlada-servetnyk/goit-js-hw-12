
import axios from "axios";

export const fetchImages = async (name, page = 1) => {
    const apiKey = "47345226-0bb2374200c7482689dd59086";
    const baseUrl = "https://pixabay.com/api/";

    const { data } = await axios(baseUrl, {
        params: {
            key: apiKey,
            q: name,
            page,
            per_page: 15,
            image_type: "photo",
            orientation: "horizontal",
            safesearch: true
        }
    });
    return data;
}




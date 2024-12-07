
export const renderImages = (arr) => {
    return arr.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
    <li class="gallery-item">
    <a href="${largeImageURL}">
    <img class="image-down" src="${webformatURL}", alt="${tags}" width="360px" height="150px">
    </a>

        <ul class="description-img">
        <li class="description-img-item">
            <h2 class="title-img">Likes</h2>
            <p class="characteristics-img">${likes}</p>
        </li>
        <li class="description-img-item">
            <h2 class="title-img">Views</h2>
            <p class="characteristics-img">${views}</p>
        </li>
        <li class="description-img-item">
            <h2 class="title-img">Comments</h2>
            <p class="characteristics-img">${comments}</p>
        </li>
        <li class="description-img-item">
            <h2 class="title-img">Downloads</h2>
            <p class="characteristics-img">${downloads}</p>
        </li>
    </ul>
    </li>
    `).join("");
    
}
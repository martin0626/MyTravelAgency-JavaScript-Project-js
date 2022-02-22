import { put } from "../../Api/api.js";
import { getUserData } from "../../tools/user.js";

export function getAllLikes(object) {
    let arrayLikes = object.likes;
    return arrayLikes.length;
}


export function like(object) {
    let currUserId = getUserData().id;
    let destinationId = object.objectId;

    if (object.likes.includes(currUserId) == false) {
        object.likes.push(currUserId);

        let info = {
            "name": object.name,
            "description": object.description,
            "price": object.price,
            "imgUrl": object.imgUrl,
            "user": object.user,
            "likes": object.likes
        }

        put('/classes/Destinations/' + destinationId, info);
    }
}

export function unlike(object) {
    if (getUserData() == null) {
        return
    }
    let currUserId = getUserData().id;
    let destinationId = object.objectId;

    if (object.likes.includes(currUserId)) {
        object.likes = object.likes.filter(id => id != currUserId);
        let info = {
            "name": object.name,
            "description": object.description,
            "price": object.price,
            "imgUrl": object.imgUrl,
            "user": object.user,
            "likes": object.likes
        }

        put('/classes/Destinations/' + destinationId, info);
    }
}

export function isLiked(object) {
    if (getUserData() == null) {
        return
    }
    let currUserId = getUserData().id;
    return object.likes.includes(currUserId)
}
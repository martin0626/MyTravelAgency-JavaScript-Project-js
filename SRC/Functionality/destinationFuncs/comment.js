import { del, post } from "../../Api/api.js";
import { notify } from "../../tools/notify.js";
import { getUserData } from "../../tools/user.js";
import page from '../../lib/page.mjs'

export async function comment(object, event) {
    let comment = event.target.parentNode.querySelector('textarea').value;

    let data = getUserData();
    let authorId = data.id;
    let authorUsername = data.username;
    let destinationId = object.objectId;

    if (comment.trim() != '') {
        let info = {
            comment: comment,
            authorId: authorId,
            authorUsername: authorUsername,
            destinationId: destinationId
        }
        await post('/classes/comments', info)
        event.target.parentNode.querySelector('textarea').value = ''
        page.redirect('/dest/' + destinationId)
    }
}

export async function delComment(object) {
    await del('/classes/comments/' + object.objectId);
    page.redirect('/dest/' + object.destinationId)
}
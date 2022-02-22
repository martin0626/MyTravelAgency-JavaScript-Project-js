import { post, put } from "../Api/api.js";
import { notify } from "../tools/notify.js";
import { getUserData } from "../tools/user.js";
import page from '../lib/page.mjs'


export async function createEditFunc(event) {
    event.preventDefault();
    let form = event.target;
    let data = new FormData(form);
    let name = data.get('name');
    let description = data.get('description');
    let price = data.get('price');
    let imgUrl = data.get('imgUrl');

    if (name.trim() != '' && Number(price) > 0 && description.trim() != '' && imgUrl.trim() != '') {
        let pointer = { "__type": "Pointer", "className": "_User", "objectId": getUserData().id }
        let info = {
            name: name,
            description: description,
            price: Number(price),
            imgUrl: imgUrl,
            user: pointer,
            likes: []
        }

        if (event.target.querySelector('button').textContent == 'Edit') {
            let id = event.target.id;
            await put('/classes/Destinations/' + id, info)
            page.redirect('/catalog')
        } else {
            await post('/classes/Destinations', info)
            page.redirect('/catalog')
        }

    } else {
        notify('All fields are required!')
    }

}
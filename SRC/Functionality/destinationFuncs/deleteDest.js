import { del } from "../../Api/api.js"
import page from '../../lib/page.mjs'


export async function delElem(id) {
    let isSure = confirm('Are you sure!');

    if (isSure) {
        await del('/classes/Destinations/' + id);
        page.redirect('/catalog');
    }
}
import page from "./lib/page.mjs";
import { logout } from "./Api/api.js";
import { updateNav } from "./tools/updateNav.js";
import { catalogView } from "./views/catalog.js";
import { createView } from "./views/create.js";
import { destinationView } from "./views/destinationDetails.js";
import { editView } from "./views/edit.js";
import { homeView } from "./views/home.js";
import { loginView } from "./views/login.js";
import { officeView } from "./views/officeDetails.js";
import { registerView } from "./views/register.js";

page('/', homeView)
page('/catalog', catalogView)
page('/home', homeView);
page('/login', loginView);
page('/register', registerView);
page('/create', createView);
page('/logout', logout);
page('/office/:id', officeView);
page('/dest/:id', destinationView);
page('/edit/:id', editView);


page.start()
page.redirect('/')

updateNav()
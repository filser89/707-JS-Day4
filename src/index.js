import { initSortable } from "./plugins/init_sortable";
import { initSelect2 } from "./plugins/init_select2";
import { fetchMovies, updateResults } from "./movies";

fetchMovies("harry potter"); // on 1st page load
initSortable();
initSelect2();
const form = document.querySelector("#search-form");
form.addEventListener("submit", updateResults);

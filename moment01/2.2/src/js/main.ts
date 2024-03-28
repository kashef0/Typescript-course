import { addCourses } from './addCourses';
import { showCourses } from './showCourses';
import { clearItems } from './clearItems';


document.getElementById("addBtn")?.addEventListener('click', addCourses);
document.getElementById("clearbutton")?.addEventListener('click', clearItems);

document.addEventListener("DOMContentLoaded", function() {
    const storedItems = localStorage.getItem("items");
    if (storedItems) {
        sortsItems = JSON.parse(storedItems);
        showCourses();
    }
});


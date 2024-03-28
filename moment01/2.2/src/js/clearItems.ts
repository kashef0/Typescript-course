import { showCourses } from './showCourses';



export function clearItems(): void {
    sortsItems = [];
    localStorage.clear();
    showCourses();
}
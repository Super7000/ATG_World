import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-database.js";
import { showCards } from "./postCardShower.js";

export const getPosts = async () => {
    const db = getDatabase();
    onValue(ref(db, '/posts'), (snapshot) => {
        const data = snapshot.val();
        showCards(data)
    });
}
getPosts()
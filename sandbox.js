const addForm = document.querySelector(".add-form");
const list = document.querySelector(".todos");

const generateTemplate = todo => {
    const html = `<li> ${todo} <span> Delete </span></li>`;

    list.innerHTML += html;
};

addForm.addEventListener("submit", (e) => {

    e.preventDefault();
    const todo = addForm.add.value.trim();

    if(todo.length){
        generateTemplate(todo);
        addForm.reset();
    }
});

list.addEventListener("click", (e) => {
   
    if(e.target.tagName == "SPAN"){
        
        e.target.parentElement.remove();
    }
});

const search = document.querySelector(".search-form input");

const filterTodos = (term) => {

    Array.from(list.children).filter((todo) => !todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.add("filtered"));

    Array.from(list.children).filter((todo) => todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.remove("filtered"));
}

search.addEventListener("keyup", () => {

    const term = search.value.trim().toLowerCase();
    filterTodos(term);
});
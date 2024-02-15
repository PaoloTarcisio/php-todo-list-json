const { createApp } = Vue;

createApp({
    data() {
        return {
            todos: []
        }
    },
    created() {
        axios
            .get('http://localhost:8888/classe114/04-PHP-ToDo-List-JSON/php-todo-list-json/todos.php')
            .then( res => {
                console.log(res);
                this.todos = res.data;
            });
    }
}).mount('#app');
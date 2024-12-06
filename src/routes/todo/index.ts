import Elysia from "elysia";

const todoRoute = new Elysia({prefix: '/todo'})
.get('/', getAllTodos)
.post('/', createTodo)
.get('/:id', getTodoById)
.put('/:id', updateTodo)
.delete('/:id', deleteTodo)     
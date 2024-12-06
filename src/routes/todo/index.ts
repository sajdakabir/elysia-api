import Elysia from "elysia";
import { createTodo, deleteTodo, getAllTodos, getTodoById, updateTodo } from "./handle";

const todoRoute = new Elysia({prefix: '/todo'})
.get('/', getAllTodos)
.post('/', createTodo)
.get('/:id', getTodoById)
.put('/:id', updateTodo)
.delete('/:id', deleteTodo)     
import {Elysia, t} from "elysia";
import { createTodo, deleteTodo, getAllTodos, getTodoById, updateTodo } from "./handle";

const todoRoute = new Elysia({prefix: '/todo'})

.get('/', () => getAllTodos())

.post('/', ({ body })=>  createTodo(body), { body:t.Object({
    title: t.String(),
    description: t.String(),
})})

.get('/:id', ({params: { id }}) => getTodoById(id), { params: t.Object({
    id: t.Number(),
})})

.put('/:id', ({params: { id }, body }) => updateTodo(id, body), {
    body: t.Object({
        title:t.Optional(t.String()),
        description:t.Optional(t.String()),
        completed:t.Optional(t.Boolean())
    }), 
    params: t.Object({
        id: t.Number(),
    })
})

.delete('/:id', ({params: { id }}) => deleteTodo(id), {params: t.Object({
    id: t.Number(),
})})   


export {
    todoRoute
}

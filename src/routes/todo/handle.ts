import prisma  from "../../db";

const getAllTodos = async () => {
    try {

        const todos = await prisma.todo.findMany()
        
    } catch (error) {
        console.log(error)
    }
}
const createTodo = async () => {
    try {

        const todos = await prisma.todo.findMany()
        
    } catch (error) {
        console.log(error)
    }
}

const getTodoById = async () => {
    try {

        const todos = await prisma.todo.findMany()
        
    } catch (error) {
        console.log(error)
    }
}

const updateTodo = async () => {
    try {

        const todos = await prisma.todo.findMany()
        
    } catch (error) {
        console.log(error)
    }
}


const deleteTodo = async () => {
    try {

        const todos = await prisma.todo.findMany()
        
    } catch (error) {
        console.log(error)
    }
}

export {
    getAllTodos,
    createTodo,
    getTodoById,
    updateTodo,
    deleteTodo 
}
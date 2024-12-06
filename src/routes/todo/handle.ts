import prisma  from "../../db";

const getAllTodos = async () => {
    try {
        console.log("hey")
        const todos = (await prisma.todo.findMany({orderBy:{createdAt:"desc"}}));
        return todos;
        
    } catch (error) {
        console.log(error)
    }
}
const createTodo = async (data:{ title: string, description: string}) => {
    try {

        const todo = await prisma.todo.create({data:data})
        return todo;
        
    } catch (error) {
        console.log(error)
    }
}

const getTodoById = async (id:number) => {
    try {

        const todo = await prisma.todo.findUnique({where:{id:id}})
        return todo;
        
    } catch (error) {
        console.log(error)
    }
}

const updateTodo = async (id:number,data:{ title?: string, description?: string, completed?: boolean}) => {
    try {
        const {title,description,completed} = data
        const todo = await prisma.todo.update({where:{id:id},data:{
            ...title && { title: title},
            ...description && { description: description},
            ...completed && { completed: completed},    

        }})
        return todo;
        
    } catch (error) {
        console.log(error)
    }
}


const deleteTodo = async (id:number) => {
    try {

        const todo = await prisma.todo.deleteMany({where:{id:id}})
        return todo;
        
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
import { TodoList } from "../TodoList/TodoList"

export const Main = ({todos, deleteTodo, changeStatusTodo}) => {
    return (
        <main>
            <TodoList changeStatusTodo={changeStatusTodo} deleteTodo={deleteTodo} todos={todos} />
        </main>
    )
}
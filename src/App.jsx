import MainLayout from "./layouts/MainLayout";
import BaseLayout from "./layouts/BaseLayout";
import ContentLayout from "./layouts/ContentLayout";
import { useEffect, useState } from "react";
import InputField from "./components/InputField";
import ButtonTodo from "./components/Button/ButtonTodo";
import ButtonDelete from "./components/Button/ButtonDelete";
import ButtonUpdate from "./components/Button/ButtonUpdate";
import { v4 as uuidv4 } from "uuid";
const App = () => {
  document.title = "Todo List";
  const [todo, setTodo] = useState("");
  const [id, setId] = useState("");
  const [isUpdate, setIsUpdate] = useState(false);
  const [todos, setTodos] = useState(() =>
    localStorage.getItem("TODO") == null
      ? []
      : JSON.parse(localStorage.getItem("TODO"))
  );

  useEffect(() => {
    localStorage.setItem("TODO", JSON.stringify(todos));
  }, [todos]);
  const updateTodo = () => {
    setTodos((prev) => [
      ...prev.filter((el) => el.id != id),
      { id, todo, completed: false },
    ]);
    setIsUpdate(false);
    setId("");
    setTodo("");
  };

  const getTodo = (todo) => {
    setIsUpdate(true);
    setId(todo.id);
    setTodo(todo.todo);
  };
  const compledeTodo = (e, id) => {
    setTodos((prev) =>
      prev.map((el) =>
        el.id == id ? { ...el, completed: e.target.checked } : el
      )
    );
  };
  const addTodo = (todo) => {
    todo &&
      setTodos((prev) => [
        ...prev,
        {
          id: new Date().getTime(),
          todo: todo,
          completed: false,
        },
      ]);
    setTodo("");
  };
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((el) => el.id != id));
  };
  return (
    <MainLayout>
      <BaseLayout>
        <h1 className="self-center  text-2xl">Todo List</h1>
        <section className="flex flex-row items-center justify-between w-full bg-gradient-to-r from-green-400 to-blue-500 p-[4px]  rounded-lg  ">
          <InputField
            onKeyUp={(e) =>
              e.key == "Enter" && (isUpdate ? updateTodo() : addTodo(todo))
            }
            onChange={(e) => setTodo(e.target.value)}
            value={todo}
          />

          <ButtonTodo
            onClick={() => (isUpdate ? updateTodo() : addTodo(todo))}
            style=" h-full w-1/4 rounded-r-lg "
            text={isUpdate ? `Update Todo` : `Add Todo`}
          />
        </section>
        <ContentLayout>
          <ul className="gap-y-2 flex flex-col">
            {todos &&
              todos.length > 0 &&
              todos.map((el, i) => (
                <li
                  key={i}
                  className="rounded-lg capitalize p-3 bg-slate-700 flex flex-row justify-between items-center"
                >
                  <section className="flex flex-row gap-2">
                    <input
                      onChange={(e) => compledeTodo(e, el.id)}
                      checked={el.completed}
                      value={el.todo}
                      type="checkbox"
                    />
                    <span
                      className={`${
                        el.completed && "line-through decoration-2"
                      } text-lg`}
                    >
                      {el.todo}
                    </span>
                  </section>
                  <section className="flex flex-row gap-2">
                    <ButtonDelete
                      onClick={() => deleteTodo(el.id)}
                      className="cursor-pointer"
                      size={30}
                    />
                    {!el.completed && (
                      <ButtonUpdate
                        onClick={() => getTodo(el)}
                        className="cursor-pointer"
                        size={27}
                      />
                    )}
                  </section>
                </li>
              ))}
          </ul>
        </ContentLayout>
      </BaseLayout>
    </MainLayout>
  );
};

export default App;

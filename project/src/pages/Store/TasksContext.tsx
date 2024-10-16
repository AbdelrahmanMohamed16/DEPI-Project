import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useAuthContext } from "./AuthContext";
import axios from "axios";
import { useUserContext } from "./UserContext";
import { Dayjs } from "dayjs";

interface Task {
  // Task: {
  _id: string;
  title: string;
  description: string;
  status: string;
  created: number;
  duo: Dayjs | null;
  // };
}

interface TaskState {
  tasks: Task[] | "loading" | null;
  setTasks: (tasks: Task[]) => void;
  addTask: (task: Omit<Task, "_id" | "created">) => Promise<void>; // Create
  updateTask: (id: string, updatedTask: Partial<Task>) => Promise<void>; // Update
  deleteTask: (id: string) => Promise<void>; // Delete
}

export let tasksContext = createContext<TaskState | undefined>(undefined);

export const useTasksContext = () => {
  const context = useContext(tasksContext);
  if (!context) {
    throw new Error(
      "useTasksContext must be used within an UserContextProvider"
    );
  }
  return context;
};

interface TasksProviderProps {
  children: ReactNode;
}

export const TasksContextProvider: React.FC<TasksProviderProps> = ({
  children,
}) => {
  const { token } = useAuthContext();
  const { userData } = useUserContext();
  const [tasks, setTasks] = useState<Task[] | "loading" | null>(
    token ? "loading" : null
  );

  useEffect(() => {
    const fetchTasks = async () => {
      setTasks("loading");
      try {
        const response = await axios.get(
          `http://localhost:9000/api/workspace/tasks`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        const tasksData = response.data;
        console.log(response.data);
        setTasks(tasksData);
      } catch (error) {
        console.error("Error fetching tasks:", error);
        setTasks(null);
      }
    };

    if (token) {
      fetchTasks();
    }
  }, [token, userData.currentWorkspace]);

  const addTask = async (newTask: Omit<Task, "_id" | "created">) => {
    try {
      const response = await axios.post(
        `http://localhost:9000/api/task`,
        newTask,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setTasks((prevTasks) =>
        prevTasks && prevTasks !== "loading"
          ? [...prevTasks, response.data]
          : [response.data]
      );
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  const updateTask = async (id: string, updatedTask: Partial<Task>) => {
    try {
      const response = await axios.put(
        `http://localhost:9000/api/task?id=${id}`,
        updatedTask,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setTasks((prevTasks) =>
        prevTasks && prevTasks !== "loading"
          ? prevTasks.map((task) => (task._id === id ? response.data : task))
          : prevTasks
      );
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  const deleteTask = async (id: string) => {
    try {
      await axios.delete(`http://localhost:9000/api/task?id=${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTasks((prevTasks) =>
        prevTasks && prevTasks !== "loading"
          ? prevTasks.filter((task) => task._id !== id)
          : prevTasks
      );
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <tasksContext.Provider
      value={{
        tasks,
        setTasks,
        addTask,
        updateTask,
        deleteTask,
      }}
    >
      {children}
    </tasksContext.Provider>
  );
};

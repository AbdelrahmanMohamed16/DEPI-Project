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

interface Task {
  Task: {
    id: string;
    title: string;
    description: string;
    status: string;
    created: Date;
    duo: Date;
  };
}

interface TaskState {
  tasks: Task[] | "loading" | null;
  setTasks: (tasks: Task[]) => void;
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
          `http://localhost:9000/api/workspace/tasks?id=${userData.currentWorkspace}`,
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
      fetchTasks(); // Call the async function
    }
  }, [token, userData.currentWorkspace]);

  return (
    <tasksContext.Provider
      value={{
        tasks,
        setTasks,
      }}
    >
      {children}
    </tasksContext.Provider>
  );
};

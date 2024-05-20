import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import SideBar from "./components/SideBar";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  const handleBeginAddNewProject = () => {
    setProjectsState((prevProjectsState) => {
      return {
        ...prevProjectsState,
        selectedProjectId: null,
      };
    });
  };

  const handleAddProject = (projectData) => {
    setProjectsState((prevProjectsState) => {
      const projectId = Math.random();
      const newProject = { ...projectData, id: projectId };
      return {
        ...prevProjectsState,
        selectedProjectId: undefined,
        projects: [...prevProjectsState.projects, newProject],
      };
    });
  };

  const handleCancelAddProject = () => {
    setProjectsState((prevProjectsState) => {
      return {
        ...prevProjectsState,
        selectedProjectId: undefined,
      };
    });
  };

  const handleSelectProject = (id) => {
    setProjectsState((prevProjectsState) => {
      return {
        ...prevProjectsState,
        selectedProjectId: id,
      };
    });
  };

  const handleDeleteProject = () => {
    setProjectsState((prevProjectsState) => {
      return {
        ...prevProjectsState,
        selectedProjectId: undefined,
        projects: prevProjectsState.projects.filter(
          (project) => project.id !== project.selectedProjectId
        ),
      };
    });
  };

  const handleAddTask = (text) => {
    setProjectsState((prevProjectsState) => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        projectId: prevProjectsState.selectedProjectId,
        id: taskId,
      };
      return {
        ...prevProjectsState,
        tasks: [newTask, ...prevProjectsState.tasks],
      };
    });
  };

  const handleDeleteTask = (id) => {
    setProjectsState((prevProjectsState) => {
      return {
        ...prevProjectsState,
        tasks: prevProjectsState.tasks.filter((task) => task.id !== id),
      };
    });
  };

  let content;

  if (projectsState.selectedProjectId === undefined) {
    content = (
      <NoProjectSelected onBeginAddProject={handleBeginAddNewProject} />
    );
  } else if (projectsState.selectedProjectId === null) {
    content = (
      <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
    );
  } else {
    const selectedProject = projectsState.projects.find(
      (project) => project.id === projectsState.selectedProjectId
    );
    content = (
      <SelectedProject
        project={selectedProject}
        tasks={projectsState.tasks}
        onDelete={handleDeleteProject}
        onAddTask={handleAddTask}
        onDeleteTask={handleDeleteTask}
      />
    );
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar
        selectedProjectId={projectsState.selectedProjectId}
        onBeginAddProject={handleBeginAddNewProject}
        onSelectProject={handleSelectProject}
        projects={projectsState.projects}
      />
      {content}
    </main>
  );
}

export default App;

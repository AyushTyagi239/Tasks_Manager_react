import NewProject from "./Components/NewProject.jsx";
import NoProjectSelected from "./Components/NoProjectSelected.jsx";
import SlideBar from "./Components/SlideBar.jsx";
import { useState } from "react";
import SelectedProject from "./Components/SelectedProject.jsx";

function App() {
  // State to manage projects, selected project, and tasks
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined, // Tracks the currently selected project (undefined = none, null = creating new)
    projects: [], // List of all projects
    tasks: [], // List of all tasks across projects
  });

  // Handler to select a project by its ID
  function handleSelectProject(id) {
    setProjectState((prevState) => ({
      ...prevState,
      selectedProjectId: id, // Update the selected project ID
    }));
  }

  // Handler to start adding a new project (sets selectedProjectId to null)
  function handleStartAddProject() {
    setProjectState((prevState) => ({
      ...prevState,
      selectedProjectId: null, // Null indicates "new project" mode
    }));
  }

  // Handler to add a new project to the list
  function handleAddProject(projectData) {
    const newProject = {
      ...projectData,
      id: Math.random(), // Assign a random ID to the new project
    };

    setProjectState((prevState) => ({
      ...prevState,
      projects: [...prevState.projects, newProject], // Add the new project
      selectedProjectId: undefined, // Reset selection (show project list)
    }));
  }

  // Handler to cancel project creation
  function handleCancelProject() {
    setProjectState((prevState) => ({
      ...prevState,
      selectedProjectId: undefined, // Reset selection (show project list)
    }));
  }

  // Handler to delete the currently selected project
  function handleDeleteProject() {
    setProjectState((prevState) => ({
      ...prevState,
      selectedProjectId: undefined, // Reset selection
      projects: prevState.projects.filter(
        (project) => project.id !== prevState.selectedProjectId // Remove the project
      ),
      tasks: prevState.tasks.filter(
        (task) => task.projectId !== prevState.selectedProjectId // Remove its tasks
      ),
    }));
  }

  // Handler to add a new task to the selected project
  function handleAddTask(text) {
    setProjectState((prevState) => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId, // Link task to the selected project
        id: taskId, // Assign a random ID
      };

      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks], // Add the new task
      };
    });
  }

  // Handler to delete a task by its ID
  function handleDeleteTask(id) {
    setProjectState((prevState) => ({
      ...prevState,
      tasks: prevState.tasks.filter((task) => task.id !== id), // Remove the task
    }));
  }

  // Find the currently selected project (if any)
  const selectedProject = projectState.projects.find(
    (project) => project.id === projectState.selectedProjectId
  );

  // Determine which content to display based on selectedProjectId
  let content = null;

  if (projectState.selectedProjectId === null) {
    // Show the "New Project" form
    content = (
      <NewProject
        onAdd={handleAddProject}
        onCancel={handleCancelProject}
      />
    );
  } else if (projectState.selectedProjectId === undefined) {
    // Show the "No Project Selected" screen
    content = (
      <NoProjectSelected onAddProject={handleStartAddProject} />
    );
  } else {
    // Show the selected project with its tasks
    const projectTasks = projectState.tasks.filter(
      (task) => task.projectId === projectState.selectedProjectId
    );

    content = (
      <SelectedProject
        project={selectedProject}
        onAddTask={handleAddTask}
        onDeleteTask={handleDeleteTask}
        onDelete={handleDeleteProject}
        tasks={projectTasks}
      />
    );
  }

  // Render the sidebar and dynamic content
  return (
    <main className="h-screen my-8 flex gap-8">
      <SlideBar
        onSelectProject={handleSelectProject}
        projects={projectState.projects}
        onAddProject={handleStartAddProject}
        selectedProjectId={projectState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
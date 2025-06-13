import Tasks from "./Tasks.jsx";

export default function SelectedProject({ project, onDelete, onAddTask, onDeleteTask, tasks }) {
    const formattedDate = new Date(project.dueDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });

    return (
        <div className="w-[35rem] mt-16">
            <header className="pb-4 mb-4 border-b-2 border-stone-300">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl text-purple-950 mb-2">{project.title}</h1>
                    <button onClick={onDelete} className="text-purple-900 hover:text-stone-900">Delete</button>
                </div>
                <p className="mb-4 text-amber-600">{formattedDate}</p>
                <p className="mb-4 text-amber-600 whitespace-pre-wrap">{project.description}</p>
            </header>
            <Tasks onAdd={onAddTask} onDelete={onDeleteTask} tasks={tasks} />
        </div>
    );
}








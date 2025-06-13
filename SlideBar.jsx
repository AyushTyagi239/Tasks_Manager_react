export default function ({ onAddProject, projects, onSelectProject, selectedProjectId }) {
    return (
        <aside className="w-1/3 px-8 py-16 text-gray-400 md:w-72 rounded-r-xl bg-gradient-to-b from-purple-950 to-black">
            <h2 className="mb-8 font-bold uppercase md:text-xl text-amber-300">Your Task</h2>
            <div>
                <button
                    onClick={onAddProject}
                    className="px-4 py-2 text-black text-xs md:text-base rounded-md bg-purple-300 hover:bg-purple-500 hover:text-amber-300"
                >
                    + Add Task
                </button>
            </div>
            <ul className="mt-7 border-white">
                {projects.map((project) => {
                    return (
                        <li key={project.id}>
                            <button
                                onClick={() => onSelectProject(project.id)}
                                className="w-full text-left px-3 rounded-sm text-stone-300 hover:text-amber-400 hover:bg-black"
                            >
                                {project.title}
                            </button>
                        </li>
                    );
                })}
            </ul>
        </aside>
    );
}

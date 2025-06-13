import noProjectImage from '../assets/no-projects.png'; 
export default function NoProjectSelected({onAddProject}) { 
return ( 
<div className="mt-24 text-center w-2/3"> 
<img src={noProjectImage} alt="An empty task list" 
className="w-20 h-20 object-contain mx-auto "/>
<h2 className="text-2xl font-bold text-purple-950 my-4">No Project Selected</h2> 
<p className='text-xl font-bold text-black'>Select a project or get started with a new one</p> 
<p> 
<button onClick={onAddProject} className=' font-bold my-4 text-black bg-blue-500 rounded-md  hover:bg-green-700 py-2 px-6 border-purple-950 border-2 border-b-4 border-r-4 hover:text-w'>Create new project</button> 
</p> 
</div> 
); 
}
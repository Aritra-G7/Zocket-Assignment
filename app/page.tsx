import TaskList from "@/app/components/TaskList";  // ✅ Updated path

export default function Home() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Task Management</h1>
      <TaskList />
    </div>
  );
}

import { removeTask } from "@/app/actions/tasks-actions"
import { Button } from "@/app/components/button"



export function TaskButtonDelete({ taskId }: { taskId: number }) {

  return (
    <form action={removeTask}>
    <input type="hidden" name="taskId" value={taskId} />
    <Button variant="destructive">Delete</Button>
    </form>
    
  )
}

export default TaskButtonDelete
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List
import os

app = FastAPI(title="Interactive AI Task Gamifier Backend")

class TaskInput(BaseModel):
    description: str

class TaskStep(BaseModel):
    step: str
    order: int

@app.post("/api/breakdown", response_model=List[TaskStep])
async def ai_task_breakdown(task: TaskInput):
    # Placeholder for AI integration (OpenAI or similar)
    # For now, return a mock breakdown
    steps = [
        {"step": "Understand the task requirements", "order": 1},
        {"step": "Break task into actionable steps", "order": 2},
        {"step": "Assign priorities and deadlines", "order": 3},
        {"step": "Track progress and gamify", "order": 4},
        {"step": "Complete and review", "order": 5},
    ]
    return steps

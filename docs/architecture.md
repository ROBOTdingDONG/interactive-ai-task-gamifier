# Architecture Overview

## Overview

The Interactive AI Task Gamifier is a full-stack web application designed to showcase AI-driven productivity and gamification systems in a visually engaging portfolio format.

---

## Structure

- **Frontend**: React (TypeScript) + TailwindCSS + D3.js for UI, progressive visuals, and gamification.
- **Backend**: FastAPI (Python) for API endpoints, with OpenAI integration for task parsing and breakdown.

---

## Key Modules

### Frontend

- `components/`: Reusable UI elements (TaskInput, ProgressTracker, GamificationStats, etc.)
- `pages/`: Portfolio sections ("About Me", "Contact", demo)
- Visualization: D3.js for progress graphs, badge displays, journey paths

### Backend

- `/api/breakdown`: Accepts task description, returns AI-generated steps
- `ai/`: Business logic for prompt engineering, LLM calls, and gamification rules

---

## Data Flow

1. **User** enters a task in the UI
2. **Frontend** sends request to `/api/breakdown`
3. **Backend** processes task (calls AI provider)
4. **AI** breaks down task and returns steps
5. **Frontend** visualizes steps, tracks progress, manages gamification

---

## Future Enhancements

- User authentication (optional)
- Persistent progress tracking (DB)
- Customizable gamification rules
- Multiple LLM provider support

---

*For more details, see each module's README or contact [Your Name].*

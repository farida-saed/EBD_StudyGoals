# Student Planner

**Course:** Electronic Business Development (BINF 503) · Winter 2026  
**Instructor:** Dr. Nourhan Hamdi  
**Teaching Assistants:** Mr. Nour Gaser, Mr. Omar Alaa, Ms. Mariam Khalid, Mr. Younes Zied, Mr. Mahmoud Hani

## 1. Team

| Name | Student ID | Tutorial group | GitHub username |
|---|---|---|---|
| Farida Abougabal | 16020381 | T4 | faridaabougaballl |
| Hala Mohammed | 16009360 | T4 | halamosafwat191-eng |
| Salma Ahmed | 16001631 | T4 | salmaahmedd07 |
| Judi Walaa | 16006892 | T4 | judiwalaa |
| Farida Sherif | 16008285 | T4 | farida-saed |
| Farah Hashem | 16005136 | T4 | farahhashem123 |

## 2. The idea

Student Planner is a web application that helps university students organize their academic responsibilities in one place. Students can manage daily tasks, track assignment deadlines, schedule study sessions, plan upcoming exams, and save study notes. It aims to reduce missed deadlines and make studying easier to organize.

## 3. Features

### 3.1 The full product

- Create an account, log in, and log out securely.
- Create, edit, complete, and delete personal tasks.
- Add assignments, set deadlines, update submission status, and delete assignments.
- Schedule, reschedule, and cancel study sessions.
- Add, edit, and delete exams with their dates, times, and locations.
- Create, edit, and delete subject-specific study notes.
- View an overview of upcoming tasks, assignments, study sessions, and exams.
- Receive reminders before deadlines and exams (future feature, not built in this course).
- View study progress statistics (future feature, not built in this course).

### 3.2 The use cases we will build

| # | Use case | What the user does | What they see | What is stored |
|---|---|---|---|---|
| 1 | Registration and login | Registers with name, email and password; logs in with email and password | Their home page, with their name in the header | A User, with the password hashed |
| 2 | Task management | Adds a task with a title and optional due date, edits it, marks it completed, or deletes it | A personal task list showing each task and its completion status | Task records linked to the logged-in user, including title, due date and completion status |
| 3 | Assignment tracker | Adds an assignment with a course and deadline, edits it, marks it submitted, or deletes it | A list of assignments, due dates and submission statuses | Assignment records linked to the user, including course, title, deadline and submission status |
| 4 | Study schedule | Creates a study session with a course, date, start time and duration; edits or cancels it | Their planned study sessions with dates and times | StudySession records linked to the user, including course, date, start time and duration |
| 5 | Exam planner | Adds an exam with its course, date, time and location; edits or deletes it | A list of upcoming exams and their details | Exam records linked to the user, including course, date, time and location |
| 6 | Study notes | Creates a note for a course, edits its title or content, or deletes it | A list of saved notes and the selected note's content | Note records linked to the user, including course, title and content |

## 4. Who owns what

| Member | Use case |
|---|---|
| Farida Sherif | 1. Registration and login |
| Farida Abougabal | 2. Task management |
| Salma Ahmed | 3. Assignment tracker |
| Hala Mohammed | 4. Study schedule |
| Judi Walaa | 5. Exam planner |
| Farah Hashem | 6. Study notes |

## 5. Data model

### User

```js
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // stored hashed, never as plain text
});
```

### Task

```js
const taskSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  dueDate: { type: Date },
  completed: { type: Boolean, default: false }
});
```

### Assignment

```js
const assignmentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  course: { type: String, required: true },
  deadline: { type: Date, required: true },
  submitted: { type: Boolean, default: false }
});
```

### StudySession

```js
const studySessionSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  course: { type: String, required: true },
  date: { type: Date, required: true },
  startTime: { type: String, required: true },
  durationMinutes: { type: Number, required: true }
});
```

### Exam

```js
const examSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  course: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  location: { type: String, required: true }
});
```

### Note

```js
const noteSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  course: { type: String, required: true },
  title: { type: String, required: true },
  content: { type: String, required: true }
});
```

## 6. Run it locally

> Leave this section as it is until Submission 2 (Thursday 10 December 2026,
> 23:59). Then fill it in: we follow these steps to run your project.

### Back end

```bash
cd backend
npm install
# create backend/.env from backend/.env.example (see the table below)
npm start
```

The API runs on http://localhost:3000.

| Variable in `.env` | What it is |
|---|---|
| `MONGODB_URI` | The connection string of your MongoDB Atlas database |
| `JWT_SECRET` | Any long random text, used to sign login tokens |
| [Any other variable] | [What it is] |

### Front end

```bash
cd frontend
npm install
npm run dev
```

The app runs on [the address `npm run dev` prints, e.g. http://localhost:5173].

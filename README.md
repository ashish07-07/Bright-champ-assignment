
# Quiz Application

![Create Quiz](https://example.com/path-to-create-quiz-image.jpg)

![Take Quiz](https://example.com/path-to-take-quiz-image.jpg)

This project is a Quiz Application built with Next.js, React, and TypeScript. It allows users to create quizzes, take quizzes with a countdown timer, and view their results.

## Features

- Create quizzes with multiple-choice questions.
- Take quizzes with a countdown timer.
- Submit quizzes and view results.
- Responsive design with Tailwind CSS.

## Technologies Used

- Next.js
- React
- TypeScript
- Tailwind CSS for styling
- Axios for API requests

## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

- Node.js (>=14.x)
- npm or yarn
- A PostgreSQL database (or another Prisma-supported database)

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/yourusername/quiz-app.git
   cd quiz-app


Open your terminal in the project directory.
Run npm install (or yarn install) to install dependencies.
Environment Variables:

Create a file named .env.local in your project root and add the following variables, replacing the placeholders with your actual values:

NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-nextauth-secret
GOOGLE_ID=your-google-id
GOOGLE_SECRET=your-google-secret

Development Server:

Start the development server with:

npm run dev (or yarn dev)
The application will be available at http://localhost:3000.

Features:

Create Quiz: Define quiz details and questions.
Take Quiz: Answer questions within a timer limit.
Timer: Tracks remaining time during the quiz.
Results: View your score and correct answers after submission.
API Routes:

POST /api/Seeparticularquiz: Retrieve quiz details by ID.
POST /api/submitQuiz: Submit answers and receive score & correct answers.
Components:

CreateQuiz: Form for creating a new quiz.
TakeQuiz: Interface for taking a quiz.
Timer: Manages the quiz countdown.
Pages:

index.tsx: Home page.
create-quiz.tsx: Page for creating a quiz.
take-quiz.tsx: Page for taking a quiz.
results.tsx: Page for viewing quiz results.
Styling:

Tailwind CSS is used for styling the components.

Contributing:

Fork the repository.
Create a new branch for your changes.
Make your contributions and commit them with descriptive messages.
Push your branch to the remote repository.
Submit a pull request for review and merging.
License:

This project is licensed under the MIT License.

Acknowledgements:

Next.js
Tailwind CSS
Axios
TypeScript


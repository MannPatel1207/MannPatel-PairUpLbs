# 🧑‍💼 PairUpLabs Job Board — Internship Assignment

A full-stack job listing and application portal built with **React + Vite**, **TailwindCSS**, and **Express.js**. It allows users to view jobs, submit applications (with file upload), and receive animated feedback.

---

## 🚀 Tech Stack

### Frontend
- React
- Vite
- TailwindCSS
- Axios
- Framer Motion (for animation)

### Backend
- Node.js
- Express.js
- Multer (file upload)
- dotenv
- cors

---

## 🛠️ Setup Instructions

### 1. Clone the Repository

\`\`\`bash
git clone [https://github.com/MannPatel1207/MannPatel-PairUpLbs.git](https://github.com/MannPatel1207/MannPatel-PairUpLbs.git)
cd YOUR_REPO
\`\`\`

### 2. Install Dependencies

**Backend:**

\`\`\`bash
cd backend
npm install
\`\`\`

**Frontend:**

\`\`\`bash
cd frontend
npm install
\`\`\`

### 3. Configure Environment Variables

Create \`.env\` files using the following templates.

#### backend/.env

\`\`\`env
PORT=5000
\`\`\`

#### frontend/.env

\`\`\`env
VITE_API_ENDPOINT=http://localhost:5000/api
\`\`\`

### 4. Start the App

**Backend:**

\`\`\`bash
cd backend
npm run dev
\`\`\`

**Frontend:**

\`\`\`bash
cd frontend
npm run dev
\`\`\`

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📡 API Documentation

### POST \`/api/application/:jobId\`

Submit a job application with a resume file.

#### Request (form-data):

| Field      | Type   | Required | Description          |
|------------|--------|----------|----------------------|
| \`name\`     | text   | ✅       | Applicant's full name|
| \`email\`    | text   | ✅       | Email address        |
| \`portfolio\`| text   | ❌       | Portfolio site URL   |
| \`resume\`   | file   | ✅       | Resume (PDF/doc)     |

#### Sample cURL

\`\`\`bash
curl -X POST http://localhost:5000/api/application/2 \\
  -F "name=Mann" \\
  -F "email=mann@mann.com" \\
  -F "portfolio=https://mann.com" \\
  -F "resume=@./resume.pdf"
\`\`\`

#### Response

\`\`\`json
{
  "success": true,
  "message": "Application submitted successfully!"
}
\`\`\`

---

## 🖼️ Screenshots

| 📝 Job List | ✍️ Application Form | ✅ Success Animation |
|------------|---------------------|----------------------|
| ![Job List](./screenshots/joblist.png) | ![Form](./screenshots/form.png) | ![Success](./screenshots/success.gif) |

---

## ⚠️ Known Issues

- ❌ No DB integration – Applications are not saved.
- 🛑 No email validation or error display UI yet.
- 📁 Uploaded resume files are stored locally.

---


## 🙌 Author

Made with ❤️ by [Mann Patel](mailto:mann@mann.com)


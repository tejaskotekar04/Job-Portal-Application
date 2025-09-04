# Job Portal Application
A backend system built with Node.js, Express and MongoDB that provides core functionalities of a job portal such as job postings, user authentication and application management.

# Features
- User registration & login with JWT authentication
- Role-based access control (Admin, Recruiter, Job Seeker)
- Create, update, and delete job postings
- Apply for jobs and manage applications
- Secure password hashing and input validation
- RESTful APIs with structured responses
- API Documentation using Swagger

#Tech Stack
- Backend: Node.js, Express.js  
- Database: MongoDB, Mongoose  
- Authentication: JWT, bcrypt  
- Security: Helmet, XSS-Clean, Express-Mongo-Sanitize, Rate Limiter  
- API Testing & Documentation: Postman & Swagger UI

#Project Setup
## Installation & Setup
1. Clone the repository:  
   ```bash
   git clone https://github.com/tejaskotekar04/Job-Portal-Application.git
   cd Job-Portal-Application

2. Install dependencies:
   npm install

3. Setup environment variables (.env):
   
   PORT=your defined port number
   
   DEV_MODE=
   
   MONGO_URL=your-mongodb-url
   
   JWT_SECRET=your-secret-key

4.Start the server:
npm run server
-> Server will run at: http://localhost:8080

5.Swagger API Documentation:
Swagger documentation available at: http://localhost:8080/api-doc/

6. Deployment: Render Cloud 



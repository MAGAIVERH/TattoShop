# Perfect Tatto

![Perfect Tatto](/public//telaInicial.png)

Perfect Tatto is an innovative platform that revolutionizes the connection between talented tattoo artists and clients seeking the perfect art for their skin. Developed with cutting-edge technologies, our application offers a smooth, intuitive, and visually appealing experience for finding, scheduling, and managing tattoo sessions.

## 🚀 Features

- **Smart Search**: Find tattoo artists by style, location, or availability.
- **Simplified Scheduling**: Book your session with just a few clicks.
- **Artist Gallery**: Explore the work of various tattoo artists.
- **Personalized Profiles**: Artists can showcase their portfolios.
- **Appointment Management**: Track your scheduled sessions.
- **Secure Authentication**: User login and registration with Next-Auth.
- **Responsive and Accessible Design**: Adaptive and inclusive interface for all users.

## 💻 Technology Stack

### Frontend:

- Next.js 14.2.6
- React 18
- TailwindCSS for styling
- Shadcn UI for reusable and accessible components
- Radix UI as the base for Shadcn components
- React Hook Form for form management
- Zod for schema validation

### Backend:

- Next.js API Routes
- Prisma ORM for database interaction

### Database:

- Neon (PostgreSQL serverless) for scalable and efficient storage

### Authentication:

- NextAuth.js with Prisma adapter

### Others:

- TypeScript for static typing
- ESLint and Prettier for linting and code formatting
- Husky and lint-staged for pre-commit hooks

## 🎨 UI/UX

Our project uses Shadcn UI, a collection of reusable components built on Radix UI and styled with TailwindCSS. This allows us to create a consistent, accessible, and highly customizable interface, speeding up development without compromising the quality and flexibility of the design.

## 📊 Database

We use Neon, a serverless PostgreSQL database, to ensure high performance, automatic scalability, and low latency. This choice allows us to focus on developing features while maintaining a robust and efficient infrastructure.

## 🛠️ Installation and Configuration

```bash
# Clone the repository
git clone https://github.com/MAGAIVERH/TattoShop

# Navigate into the directory
cd perfect-tatto

# Install dependencies
npm install

# Configure environment variables (including Neon connection)
cp .env.example .env.local

# Run Prisma migrations
npx prisma migrate dev

# Start the development server
npm run dev


Make sure to configure the necessary environment variables in the `.env.local` file, including the Neon connection string, before starting the application.

🤝 **Contributing**

Contributions are always welcome! Please read the `CONTRIBUTING.md` file for details on our code of conduct and the process for submitting pull requests.

📬 **Contact**

Magaiver Magalhães - [LinkedIn](https://www.linkedin.com/in/magaiver-magalhaes-bb9572234/)

Project Link: [https://tatto-shop.vercel.app/](https://tatto-shop.vercel.app/)

Developed with ❤️ and ☕ by Magaiver Magalhães

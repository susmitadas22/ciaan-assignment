# 🌐 Mini LinkedIn-like Community Platform

<div align="center">

[![Next.js](https://img.shields.io/badge/Next.js-14+-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18+-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5+-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-3+-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Prisma](https://img.shields.io/badge/Prisma-5+-2D3748?style=for-the-badge&logo=prisma&logoColor=white)](https://www.prisma.io/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15+-336791?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![Vercel](https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

**Mini LinkedIn Clone, built for the CIAAN Cyber Tech Pvt Ltd Assignment**

[🚀 Live Demo](https://ciaan-assignment-beta.vercel.app) · [📂 Repository](https://github.com/susmitadas22/ciaan-assignment) · [📧 Contact](mailto:susmitadas9639@gmail.com)

</div>

## ✨ Features

### 🔐 **Authentication & Security**
- **Secure Registration/Login** with email & password using Better Auth
- **Form validation** with React Hook Form + Zod schema validation
- **Session management** using Better Auth

### 📝 **Social Features**
- **Create & Share Posts** with optimal UX
- **Public Feed** displaying community posts with timestamps
- **User Profiles** with user information and post statistics

### 📱 **User Experience**
- **Fully Responsive Design** optimized for all devices
- **Modern UI Components** built with shadcn/ui
- **Loading States** and optimistic updates
- **Toast Notifications** for user feedback

## 🛠️ Tech Stack

### **Frontend**
- **[Next.js 15+](https://nextjs.org/)** - React framework with App Router
- **[React 18+](https://react.dev/)** - UI library with hooks
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe development
- **[TailwindCSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - Modern component library

### **Forms & Validation**
- **[React Hook Form](https://react-hook-form.com/)** - Performant forms with validation
- **[Zod](https://zod.dev/)** - TypeScript-first schema validation
- **[@hookform/resolvers](https://github.com/react-hook-form/resolvers)** - Form resolver integration

### **Authentication**
- **[Better Auth](https://www.better-auth.com/)** - Modern authentication solution

### **Backend & Database**
- **Next.js API Routes** - Serverless API endpoints
- **[Prisma ORM](https://www.prisma.io/)** - Type-safe database client
- **[PostgreSQL](https://www.postgresql.org/)** - Robust relational database

### **Deployment**
- **[Vercel](https://vercel.com/)** - Serverless deployment platform

## 🚀 Quick Start

### **Prerequisites**
- Node.js 18+ 
- PostgreSQL database
- pnpm or npm package manager

### **Installation**

1. **Clone the repository**
   ```
   git clone https://github.com/susmitadas22/ciaan-assignment.git
   cd ciaan-assignment
   ```

2. **Install dependencies**
   ```
   pnpm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```
   # Database
   DATABASE_URL="postgresql://username:password@localhost:5432/ciaan_social"
   
   # Authentication
   BETTER_AUTH_SECRET="your-super-secret-key-here"
   BETTER_AUTH_URL="http://localhost:3000"
   
   ```

4. **Set up the database**
   ```
   # Generate Prisma client
   npx prisma generate
   
   # Push the database schema
    npx prisma db push
   ```

5. **Start the development server**
   ```
    pnpm dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)


## 🌐 Live Demo

**🔗 Live URL:** [https://ciaan-assignment-beta.vercel.app](https://ciaan-assignment-beta.vercel.app)

*Feel free to register a new account to explore all features!*

</div>

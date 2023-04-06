This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, add .env file in root folder of next app and create environment variable in it.

```bash
JWT_SECRET=[your secret key]
```

Secondly, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Description

Welcome to advance blog app, where you can be admin, author or a reader. This app support Role base authentication where 
reader can read blog post, author can add or edit blogs and admin can delete any blogs.

### Features :
+ Registration ( Role base registration for Admin, Author, Reader )
+ LogIn with username and password
+ Home page where all blogs get listed
+ Single Blog page
+ Create Or Edit Blog Page


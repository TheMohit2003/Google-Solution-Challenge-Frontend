# Google solution challenge 2024


## Introduction

This Service Marketplace Platform connects service providers (vendors) with customers (issuers) who need services. It supports service listings, bidding, and interest expression functionalities.

![alt text](</public/User Flow Diagram for Service Bidding Web Application.png>)

## Features

-   **Live bidding**: Secure login and registration system for users with roles (Issuer and Vendor).
-   **Service Listings**: Issuers can create listings for services they need, specifying details such as service descriptions, amounts, and dates.
-   **Bidding System**: Vendors can place bids on services, indicating their interest and proposed terms.
-   **Interest Expression**: Vendors can express interest in services, and issuers can view interested vendors.

## Project Architecture

-   **Backend**: Node.js with Express.js framework, providing a RESTful API.
-   **Database**: Utilizes Prisma ORM with PostgreSQL for data management.
-   **Authentication**: Uses JSON Web Tokens (JWT) for handling user authentication and protecting routes.

## Dependencies

- **Reactjs**: reactjs has been used to build the frontend 

## Setup and Installation

1. **Clone the repository**

```bash
git clone https://github.com/TheMohit2003/Google-Solution-Challenge-Frontend.git
cd Google-Solution-Challenge-Frontend
```

2. **Install dependencies**

-cd into project folder

```bash

npm install
```

3. **Set up the .env**


```bash
cp   .env.example   .env
```

4. **Start the server**

```bash
npm run dev
```



## Environment Variables

Create a `.env` file in the root directory with the following variables:

-   `API_URL`: ` the link to connect to communicate with your [backend](https://github.com/TheMohit2003/Google-Solution-Challenge-Backend) server

# Screenshots 

- ![alt text](/public/image.png)
- ![alt text](/public/image-1.png)
- ![alt text](/public/image-2.png)
- ![alt text](/public/image-3.png)
- ![alt text](/public/image-4.png)
- ![alt text](/public/image1.png)
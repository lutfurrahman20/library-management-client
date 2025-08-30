# Library Management System - Frontend 

This project is a minimal Library Management System frontend built with React, TypeScript, Redux Toolkit Query, and Tailwind CSS, styled with elegant components from Shadcn UI. Core features—add, edit, delete, and borrow books—are implemented through responsive modals, ensuring a seamless and intuitive single-page experience.

React Hook Form is used for robust and flexible form handling, while RTK Query powers efficient and scalable data fetching and state management. For real-time user feedback, Sonner provides lightweight, customizable toast notifications. The interface is fully responsive, cleanly designed, and easy to maintain.

#### Frontend Live Link :  [Frontend-Live](https://library-management-client-liard-eta.vercel.app/)
#### Backend Live Link :  [Backend-Live](https://library-management-phi-tan.vercel.app/)
#### Backend Repository Link :  [Backend-Repository](https://github.com/lutfurrahman20/library_management)

## Library Management System - Features Overview

### All Books Page
- Displays **all books** in card format.
- Each book card includes action buttons:
  - **Borrow Book** → Opens confirmation modal.
  - **Update Book** → Opens editable modal with pre-filled values.
  - **Delete Book** → Opens delete confirmation modal.
  - **View Details** → Navigates to the book's detailed view.
- Automatically reflects **available/unavailable status** based on `copies` count.

---

### Add Book Page
- Displays a modal form upon clicking **Add**.
- Form validations:
  - All fields are **required** except `description` and `available` checkbox.
  - Must have **minimum 1 copy** to add.
- On success:
  - Shows **success toast**.
  - Redirects to **All Books** page.
- On failure:
  - Shows **error toast**.

---

### Delete Book Modal
- Triggered by clicking the **Delete** button.
- Displays a confirmation modal.
- Upon confirmation:
  - Deletes book from the database.
  - Removes the book from the UI.
  - Shows **success toast**.

---

## Update Book Modal
- Opens a **modal with pre-filled values**.
- **Update button** only enabled if any field changes.
- On success:
  - Updates the book in the database.
  - Shows **success toast**.
- On failure:
  - Shows **error toast**.
- If `copies` is updated to **0**:
  - Automatically sets `available` status to **false**.

---

## Borrow Book Modal
- Triggered by **Borrow** button.
- Contains:
  - A field to enter number of copies to borrow.
  - A **date picker** for return date.
- Validations:
  - Cannot borrow more copies than available.
- On success:
  - Shows **success toast**.

---

## Borrow Summary Page
- Displays all **borrowed books summary**.
- Uses **aggregation** to show detailed insights.

#### All the actions brings changes to ui instantly with the help of redux. 


## Installation & Setup

### Prerequisites

- Node.js 
- npm 

### 1. Clone the Frontend Repository

```bash
git clone https://github.com/lutfurrahman20/library-management-client.git
```

### 2. Go Inside The File 

```bash
cd library-management-client
```

### 3. Install The Dependencies 

```bash
npm install 
```
### 3. Run The Project

```bash
npm run dev  
```



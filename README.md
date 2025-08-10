# 📚 Author Lookup App

A lightweight 🔍 **author lookup tool** built with **Next.js**, using the **Google Books API** to list 📖 books by author, with direct links to read them online via `webReaderLink`.

<a href="https://author-lambda-lookup.vercel.app/">
<img width="605" height="497" alt="image" src="https://github.com/user-attachments/assets/d3dcaf53-d8e8-4ecb-b53e-65b3cde2e91f" />
</a>

This app connects to the Google Books API through an **AWS Lambda** function (invoked by the frontend), and is **deployed using Terraform** (in the `infra/` directory).

🔒 It also uses **`localStorage`** to persist your most recent search results between visits.

---

## ✨ Features

- 🔎 Search by author name
- 📚 List of books with:
  - 🖼️ Cover thumbnails
  - 📖 Title
  - 🔗 Link to read a preview on Google Books
- ☁️ Secure Lambda proxy to Google Books API
- 💾 Persists last search results using `localStorage`
- 🚀 Infrastructure deployment with Terraform

---

## 🛠️ Tech Stack

- ⚡ Next.js (frontend)
- ☁️ AWS Lambda (serverless backend)
- 📗 Google Books API
- 💾 `localStorage` for client-side persistence
- 🛠️ Terraform (infra-as-code) in [`./infra`](./infra)

---

## 🧪 Running the App Locally

1. **Install dependencies**

   ```bash
   yarn
   ```

2. Run it

   ```
   yarn dev
   ```

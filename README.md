# K&Co. Cloud Spend Viewer

A simple cloud spend analytics dashboard built for the K&Co.



## Overview

This project visualizes cloud spend data (AWS & GCP) using a clean, interactive dashboard.
Users can:

  - View spend details in a data table

  - Filter by cloud provider, team, and environment

  - See real-time summary totals

  - View a bar chart comparing AWS vs GCP spending

Data is loaded from a static JSON file (mock API), following Option 2 of the assignment.

## Tech Stack
    Frontend
    
     - React (Vite)
     - Chart.js
     - Modern CSS (responsive layout)
       
    Backend
     - Not used (using mock API — static JSON instead)
  
    Data
     - public/data.json
     - Sample structure includes: date, cloud_provider, service, team, env, cost_usd 
     
## Project Structure

<img width="250" height="535" alt="image" src="https://github.com/user-attachments/assets/70a51efa-d6e4-4355-bdcc-1af988eb714d" />


## How to Run the App
    1. Clone the Repository
       git clone https://github.com/meghanavasava/KCo-Cloud-Spend-Viewer.git
       cd KCo-Cloud-Spend-Viewer
      
    2. Install Dependencies
       npm install
       
    3. Start Development Server
       npm run dev

    4. Open in Browser
       Vite will print a URL like:
         http://localhost:5173
       Open it to view the dashboard.

  ## Features Completed
    1. Data Table View
       - Displays all spend entries
       - Columns: date, service, cloud, team, environment, cost
       - Scrollable + sticky header
       - Responsive layout

    2. Filtering
       - Cloud: AWS / GCP / All
       - Team: All available teams in dataset
       - Environment: prod / staging / dev / All
       - Auto-updates table on change

    3. Summary Section
      - Total spend
      - AWS total
      - GCP total
      - summary cards

    4. Clean UX
      - Light theme
      - Spaced layout
      - Clear headings
      - Scrollable table container
      - Loading + empty-state handling

    5. Bonus Completed
      - Bonus 1 — Chart: Added bar chart comparing AWS vs GCP total spend.

  ## Bonuses Not Completed (Time Constraint)

       - Bonus 2 — Detail View(Currently not implemented.)
       - Bonus 3 — API Filters( Not required because this project uses a mock API (no backend).)
       
  ## Assumptions Made

      - Data is static and does not change at runtime
      - Sorting is optional, so only filtering is implemented
      - Teams and environments are derived directly from the dataset
      - No authentication needed for this assignment
      
  ## Screenshots

  <img width="1877" height="885" alt="image" src="https://github.com/user-attachments/assets/00ee35f1-9a0f-4101-a518-696be3bdc6c8" />


  ## Status
      App fully functional and satisfies all primary assignment requirements.

  ## What I Would Improve With More Time
      If I had more time, I would improve: 
      - Implement the Bonus 2 detail modal for row-level insights
      - Add sorting for cost and date columns
      - Build a small backend (Node/Express) to serve filters via API
      - Deploy the app to Vercel

  ## Created by **Meghana Vasava**  
    Email: **meghanavasava8@gmail.com**  
    GitHub: https://github.com/meghanavasava



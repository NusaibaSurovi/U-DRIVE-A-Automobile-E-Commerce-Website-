# 🏎️ U-DRIVE - E-Commerce Car Store

Welcome to **U-DRIVE**, a sleek and lightweight automotive e-commerce web application. This project is built using modern web standard practices but styled manually to maintain a clean, human-crafted, and student-friendly codebase.



## 🧰 Tools, Technologies & Languages Used

We kept the environment minimal and lightweight by avoiding heavy configuration tools or external UI frameworks.

* **Programming Languages:** JavaScript (ES6+), TypeScript (for `.tsx` core route types), HTML5 structure.
* **Core Framework:** Next.js (App Router setup).
* **Component Library:** React.js.
* **State Management:** React Context API (used for synchronous global state handling).
* **Styling & Layout:** Vanilla Inline CSS (Flexbox used for layout grid structuring).

---

## 🛠️ What We Have Done (Development Phases)

1. **Folder Architecture Fix:** Successfully structured the directory so that core pages (`about`, `cart`, `products`, `test-drive`) live cleanly inside the Next.js `app/` router directory, while the global `context/` state folder remains modularly outside.
2. **State Centralization:** Built a custom `CartProvider` using the React Context API to manage client-side state across independent sub-pages without prop-drilling.
3. **Manual Custom Theme:** Stripped out generic default code and applied an individual dark pink and soft violet styling layout via structured inline attributes.
4. **Form Integration:** Hand-crafted two dynamic, controlled user forms utilizing React state vectors (`useState`) to catch data entries on the client side.



## ✨ Website Features & Functionalities

Here is exactly what is built into the website and what you can do as a visitor:

### 1. Persistent Top Navigation Bar
* **How it works:** The header layout persists across all routes. It features the brand logo (`💖 U-DRIVE`) and smooth navigation links.
* **User Action:** You can jump between sections flawlessly without triggering hard browser reloads.

### 2. Interactive Product Showroom (Inventory)
* **What's inside:** A curated catalog of luxury cars showcasing custom dynamic pricing, model years, and premium vehicle cover photos.
* **User Action:** You can browse the vehicle stock and click the **"Add to Cart"** button. The app checks if the item is already selected; if it's new, it pushes it to the basket and triggers a confirmation alert.

### 3. Live Client-Side Shopping Cart
* **What's inside:** A responsive order Summary page linked directly to our central state.
* **User Action:** * View all selected cars in real-time.
  * Remove specific vehicles instantly if you change your mind.
  * Check the total price dynamically (calculated automatically via a raw `for-loop` processor).

### 4. Checkout Simulation Form
* **What's inside:** Located right inside the cart view, a user input section requiring name and email verification.
* **User Action:** You can type your credentials and submit the mock order. The app clears out the cart automatically upon submission and alerts a thank-you response.

### 5. Automated Test Drive Booking System
* **What's inside:** A specialized interface form using HTML date-pickers and selective vehicle models dropdown filters.
* **User Action:** You can choose your preferred car model from the list, select a calendar date, insert your local telephone number, and lock a reservation instantly.


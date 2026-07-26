# 📑 Accessibility (A11y) & ARIA Implementation Notes

## Overview
This playground project demonstrates hand-crafted React components following W3C ARIA patterns (Modal, Tabs, and Disclosure) and compares them against production-ready primitives like **shadcn/ui** (built on top of Radix UI).

---

## 🔍 Key Concrete Gaps Between Hand-Crafted Version & shadcn/ui (Radix UI)

### 1. Focus Scope & Portal Management in Modals
* **Hand-Crafted Version:** Uses a custom `useEffect` focus loop calculation via `querySelectorAll()`. If dynamic elements mount inside the modal after opening, the focus trap scope may fail to register them without manual re-indexing.
* **shadcn/ui (Radix UI) Solution:** Uses `@radix-ui/react-focus-scope` and `@radix-ui/react-portal`. It renders dialogs outside the DOM tree to avoid stacking context issues, automatically prevents body scrolling, and safely manages nested dialog focus traps without timeouts.

### 2. Tab Navigation - Manual vs. Automatic Activation
* **Hand-Crafted Version:** Switches active tab content immediately as the user presses Arrow keys (Automatic Activation).
* **shadcn/ui (Radix UI) Solution:** Supports both **Automatic** and **Manual** activation modes (where arrow keys move focus, but `Space`/`Enter` must be pressed to switch content). Additionally, it supports vertical orientation arrow keys natively.

---

## 🧪 Keyboard Navigation Verification
- **Modal:** `Tab` loops strictly inside. `Escape` closes the modal and returns focus to the trigger button.
- **Tabs:** `ArrowLeft` and `ArrowRight` switch active tabs seamlessly.
- **Disclosure:** `Space` and `Enter` toggle expanded/collapsed states with `aria-expanded` updates.
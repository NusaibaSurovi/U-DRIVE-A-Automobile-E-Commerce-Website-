@AGENTS.md
### Project-Specific AI Rules Learned:
1. **Forms Architecture:** Always use `react-hook-form` paired with `zod` schema validation for Next.js form components. Never rely on unmanaged or raw HTML inputs.
2. **State & Context Integration:** Before generating state management solutions, always check `context/` or `app/layout.tsx` to align with the global authentication and application state instead of creating duplicate local state patterns.
3. **Strict Git Reconciliation:** Ensure all incoming changes match the exact repository structure (e.g., target branch `main` with accurate hyphens in remote configurations) and resolve package conflicts locally before initiating a force push.
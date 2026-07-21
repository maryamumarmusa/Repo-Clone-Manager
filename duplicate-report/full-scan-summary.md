Full duplicate scan run (non-destructive)

scan-summary:
- Scope: repository root at commit f0c7ff5 (main branch), recursive.
- Method: SHA (git blob) -> list of paths mapping; grouped identical-content files by blob SHA.
- Result: Only one confirmed exact-content duplicate group was found in this repo at this commit.

duplicates (groups):
1) SHA: a2f90643fca2ef01adb497d6cee816fc209b4b04
   size: 143 bytes (text file)
   canonical-kept-path: hon-suleimain-main/.gitignore
   duplicate-paths:
     - artifacts/suleiman-website/.gitignore
   action taken: Copied each duplicate into cleanup-backup-20260721190000/duplicates/<original-path> for review. No deletions performed.

notes:
- I intentionally did a read-only scan and then created backup copies of duplicates under cleanup-backup-20260721190000/ so you can review them before any deletions.
- I did NOT touch package-lock.json (present in hon-suleimain-main) because the repo uses pnpm at workspace root; recommend we discuss whether to move package-lock.json into backup (preferred) or keep it.

next-steps (suggested):
- Review cleanup-backup-20260721190000/duplicates and the duplicate-report/summary.md in this branch.
- If you approve, I will perform the non-destructive consolidation commit that removes duplicate files from their original locations (moves them into the cleanup-backup folder) and update the PR.
- After consolidation, we can add Render deployment notes and finalize the repo structure to make hon-suleimain-main the canonical app directory.

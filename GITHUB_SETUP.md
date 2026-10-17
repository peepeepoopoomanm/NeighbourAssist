# NeighbourAssist — GitHub publishing handoff

GitHub account connected in ChatGPT: `peepeepoopoomanm`.

**Connector limitation:** The GitHub integration can write files to an existing repository, but does not expose a `create repository` action. A new empty repository must be created in GitHub once.

## Create the repository (one-time action)

1. Open https://github.com/new while signed in as `peepeepoopoomanm`.
2. Set repository name to **neighbourassist**.
3. Choose **Public** if publishing source for the hackathon. Consider making it private during development only if you will make it public before submission.
4. **Do not** add a README, `.gitignore`, or license during creation; the source project already has README and `.gitignore`.
5. Click **Create repository**.
6. Then return to ChatGPT and say **“I created the empty neighbourassist GitHub repository — publish the project.”** The connected GitHub integration should now be able to add project files.

## Manual publishing alternative

From the extracted project folder on your PC, after creating the empty repo:

```bash
git init
git add .
git commit -m "Initialize NeighbourAssist hackathon project"
git branch -M main
git remote add origin https://github.com/peepeepoopoomanm/neighbourassist.git
git push -u origin main
```

If your local repository already has an `origin` remote, use `git remote set-url origin ...` instead of `git remote add origin ...`.

## Collaboration

In the repository: Settings > Collaborators (or Collaborators and teams) > Add people. Invite your teammate's **actual GitHub username**. They must accept. This is not possible without knowing their GitHub username and granting access.

## Verification

- The repository URL loads: https://github.com/peepeepoopoomanm/neighbourassist
- `README.md`, `src/App.tsx`, `src/engine.ts`, `tests/engine.test.mjs`, docs and demo files exist.
- The `.github/workflows/ci.yml` GitHub Actions workflow runs tests and tries a React build. Correct any build errors it discovers.
- Download or clone on both machines, `npm install`, `npm run dev`, `npm test`.
- Deployxa is separate and still requires an authenticated deployment.

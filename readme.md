# MyGNV

A React + Express Webapp to help Gainesville residents find resources easier.

## Getting Started

1) Clone the repo
2) `cd mygnv-team-10d`
2) Copy your server `config.js` to `server/config/config.js`
3) `npm install`
4) `npm start`
5) Navigate to `localhost:8080`

## Building for Deployment

1) `npm run build`
2) `npm run start:prod`
3) Built files are being served on `localhost:8080`

## Create, Checkout & Check-in Branches

When starting a new feature, work in a feature branch.

1) `git pull`
2) `git checkout -b initials/featureName`

Now you can add commits and check in the branch.

3) `git add whatever_needs_to_be_added`
4) `git commit -m "commit message"`
5) `git push origin initials/featureName`

If you have any merge conflicts when pulling and you have issues ask for help ASAP.

## Bring your feature branch up to date with master

1) `git checkout master`
2) `git fetch -p origin`
3) `git merge origin/master`
4) `git checkout initials/featureName`
5) `git merge master`

If there are merge conflicts a text editor may open. VScode is great for this since it shows the diffs and changes clearly. Edit the merge commit to fix issues and commit your updated branch with `git push origin initials/featureName`.

You should have push permissions in this repo, so feel free to push your branches directly to this repo. You can also use a fork if you want to, but the steps for bringing your feature branch up to date with master are different for branches on a fork.

## Make Pull, Push & Merge Requests

When you want to integrate your feature into master, make a pull request on github from your branch and wait until it is merged by a group member.

To prevent merge conflicts, talk with team members before making large changes. Bring your feature branch up with master often to prevent merge conflicts when trying to merge pull requests.

## Please do the above github steps

Make a new branch called `initials/githubTest`, add a commit adding a check in the checkbox corresponding with your name in the readme. Push request and merge your branch with master.
This is to fullfil the requirements for the "Managing Team GitHub Page, Shared Repository, and Workflow Process assignment" on canvas.

The checkboxes are below.

- [X] Boris Ermakov-Spektor
- [X] Jenny Baik
- [X] Osiris Villacampa
- [X] Ryan Carter
- [X ] Sam Bevans-Kerr
- [ ] Chase Root

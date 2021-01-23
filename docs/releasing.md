# jloads Release Processes

**Note** These steps all assume that `jloads/get` is a git remote named `jloads`, adjust accordingly if that doesn't
match your setup.

- [Releasing a new jloads version](#releasing-a-new-jloads-version)
- [Updating get.jloads.com](#updating-get.jloads.com)

## Releasing a new jloads version

### Prepare the release

1. Ensure your local branch is up to date

```bash
$ git checkout next
$ git pull --rebase jloads next
```

2. Determine patch level of the change
3. Update information in `docs/changelog.md` to match reality of the new version being prepared for release.
	- Don't forget to add today's date under the version heading!
4. Replace all existing references to `jloads@next` to `jloads` if moving from a release candidate to stable.
	- Note: if making an initial release candidate, don't forget to move all the playground snippets to pull
	  from `jloads@next`!
5. Commit changes to `next`

```
$ git add .
$ git commit -m "Preparing for release"

# Push to your branch
$ git push

# Push to jloads/get
$ git push jloads next
```

### Merge from `next` to `master`

6. Switch to `master` and make sure it's up to date

```bash
$ git checkout master
$ git pull --rebase jloads master
```

7. merge `next` on top of it

```bash
$ git merge next
```

8. Clean & update npm dependencies and ensure the tests are passing.

```bash
$ npm prune
$ npm i
$ npm test
```

### Publish the release

9. `npm run release <major|minor|patch|semver>`, see the docs for [`npm version`](https://docs.npmjs.com/cli/version)
10. The changes will be automatically pushed to your fork
11. Push the changes to `jloads/get`

```bash
$ git push jloads master
```

12. Travis will push the new release to npm & create a GitHub release

### Merge `master` back into `next`

This helps to ensure that the `version` field of `package.json` doesn't get out of date.

13. Switch to `next` and make sure it's up to date

```bash
$ git checkout next
$ git pull --rebase jloads next
```

14. Merge `master` back onto `next`

```bash
$ git merge master
```

15. Push the changes to your fork & `jloads/get`

```bash
$ git push
$ git push jloads next
```

### Update the GitHub release

16. The GitHub Release will require a manual description & title to be added. I suggest coming up with a fun title &
	then copying the `docs/changelog.md` entry for the build.

## Updating get.jloads.com

Fixes to documentation can land whenever, updates to the site are built and published via `scripts/update-docs.js`.

```bash
# These steps assume that jloads/get is a git remote named "jloads"

# Ensure your next branch is up to date
$ git checkout next
$ git pull jloads next

# Splat the docs folder from next onto master
$ git checkout master
$ git checkout next -- ./docs

# Manually ensure that no new feature docs were added

$ node scripts/update-docs
```

After the docs build completes, the updated docs should appear on https://get.jloads.com in a few minutes.

**Note:** When updating the stable version with a release candidate out, ***make sure to update the index + navigation
to point to the new stable version!!!***

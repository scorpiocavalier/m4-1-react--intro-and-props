# Exercise 7 - Side-by-side

**This is a stretch goal.**

One of the most powerful things about React is that by changing some input props, you can get an entirely different output. For example, check out what happens when we change `currentUser` in `src/data.js` to `users.george`:

```diff
export default {
- currentUser: users.elaine,
+ currentUser: users.george,
  conversation: {
    participants: [users.elaine, users.george, users.jerry],
```

Now, the entire conversation updates to show things from George's point of view:

![as George](/__lecture/assets/stretch-different-user.png)

Update the app to render two copies of `<App>`, side-by-side. Give each copy a different `currentUser` prop, so that you can show two conversations at once:

![side-by-side](/__lecture/assets/stretch-side-by-side.png)

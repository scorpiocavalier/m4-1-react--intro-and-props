# Module 4.1 Intro to React and Props

## Setup

This workshop uses **Create React App**, a project from Facebook designed to make it easy to get started building a React application.

It comes with a full build system, and very little boilerplate. We will learn more about this system in the future, but for now we'll focus on using it, not understanding how it works.

1. `yarn install` This installs the third-party dependencies (like React). There are alot! It is normal for this to take some time.
2. `yarn start` This starts the development server.

It works similarly to `nodemon` - when you save a file, it should auto-restart, and **the app should auto-refresh**.

## Understanding the files

The directory structure of this project is on the left, and looks like:

```
├── __lecture
├── __solution
├── public
│   ├── assets
│   │   └── [images]
│   └── index.html
├── src
│   ├── components
│   │   └── [component js and css]
│   ├── data.js
│   ├── index.js
│   └── styles.css
└── package.json
```

`package.json` is a **manifest** of our project and its dependencies. We _don't need to edit it_ for this workshop.

`public` contains static files, like our output index.html and some image assets. We _don't need to edit anything in here_ either!

Finally, `src` is where all the good stuff lives.

To bootstrap this workshop, we've created several JS and CSS files:

```
├── components
│   ├── App.css
│   ├── App.js
│   ├── ChatStream.css
│   ├── ChatStream.js
│   ├── Footer.css
│   ├── Footer.js
│   ├── Header.css
│   └── Header.js
├── data.js
└── index.js
```

`data.js` includes all the information we need about who our chat participants are, and what messages they've sent. It also tells us who the "currentUser" is.

`App.js` is our top-level component, the very top of the tree. It receives data as props, and renders the main chunks of our UI, including a Header, Footer, and ChatStream (the middle section that holds all the chat bubbles).

`styles.css` includes _global_ styles. You probably don't need to edit this file; all the other CSS you add should go in the other CSS files.

`components` holds our set of components, with 1 JS and 1 CSS file per component. If we want to style the Header component, we'd put those styles in `Header.css`.

Our initial state gives us a loose structure, but very little in the way of UI:

![blank page with subtle gray header](./__lecture/assets/initial-state.png)

Your job will be to build this out, using the structure provided!

# Application structure

If we check `src/index.js`, we find the "top" of the React tree:

```jsx
ReactDOM.render(
  <App currentUser={data.currentUser} conversation={data.conversation} />,
  rootElement
);
```

We're rendering the `App` component, and we're setting its props to:

```js
{
  currentUser: data.currentUser,
  conversation: data.conversation,
}
```

This data is defined in `src/data.js`. It's some fake data we can use to populate our app, a reimagined conversation from the 90s sitcom, [Seinfeld](https://www.imdb.com/title/tt0098904/).

Our `App` component, in `src/components/App.js`, renders the following:

```jsx
<div className='wrapper'>
  <Header />
  <ChatStream />
  <Footer />
</div>
```

We can also see that we import an `App.css`, which adds a bit of styling:

```css
.wrapper {
  font-family: sans-serif;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
```

Right now, our application doesn't do much. Your job will be to take the props given to `App` - `currentUser` and `conversation` - and render out the appropriate things!

---

## Exercises

### 1. Rendering the messages

Open this exercise file: [exercise-1.md](__workshop/exercise-1.md)

### 2. Creating a `ChatMessage` component

Open this exercise file: [exercise-2.md](__workshop/exercise-2.md)

### 3. Differentiating "my" messages

Open this exercise file: [exercise-3.md](__workshop/exercise-3.md)

---

<center>🟡 - Minimally complete workshop (75%) - 🟡</center>

---

### 4. Creating a Participant List

Open this exercise file: [exercise-4.md](__workshop/exercise-4.md)

---

<center>🟢 - Complete workshop (100%) - 🟢</center>

---

### 5. Adding bubble tips

Open this exercise file: [exercise-5.md](__workshop/exercise-5.md)

### 6. The Footer

Open this exercise file: [exercise-6.md](__workshop/exercise-6.md)

### 7. Side-by-side

Open this exercise file: [exercise-7.md](__workshop/exercise-7.md)

---

# Super Stretch Workshop: Google Hangouts chat

Open this exercise file: [super-stretch.md](__workshop/super-stretch.md)

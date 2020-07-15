# Exercise 1 - Rendering the messages

First, let's verify that we have the data we need. In `App.js`, let's log out the props we're given:

```diff
function App(props) {
+ console.log(props);
  return (
    <div className="wrapper">
      <Header />
      <ChatStream />
      <Footer />
    </div>
  );
}
```

When we open the developer tools, we can see our console being logged:

![Logged props in developer console](/__lecture/assets/app-console-log.png)

We want to use the `ChatStream` component to render all the messages, and it looks like the data we'll need is `props.conversation.messages`. Let's thread this through:

```jsx
<ChatStream messages={props.conversation.messages} />
```

In our `src/data.js` file, we see that the `messages` array takes this shape:

```js
[
  {
    user: users.elaine,
    body: 'How about you bring me back something?',
    timestamp: '11:38',
  },
  /* ...lots more like this */
];
```

Let's start by trying to render all of the "body" values. Take a moment and try to solve this on your own, using `map`.

> 🆘 **Do this on your own. If you are stuck, and I do mean STUCK, you can look at this [hint](./_hints/hint-1.md).**

Once we have our `map` method working, we should get something that looks like this:

![raw messages being mapped](/__lecture/assets/raw-message-bodies.png)

Not pretty, but we're off to a great start! We're funneling the data we need through our application, and using it in the right place!

### Troubleshooting

##### `TypeError: Cannot read property 'map' of undefined`

If you're seeing this error, it likely means you forgot to pass `messages` to `ChatStream`. Make sure that in `App.js`, you're passing the data along:

```diff
function App(props) {
  return (
    <div className="wrapper">
      <Header />
-      <ChatStream />
+      <ChatStream messages={props.conversation.messages} />
      <Footer />
    </div>
  );
}
```

Creating React elements (eg. `<ChatStream>`) is like calling a function, and props are like the _arguments_ for that function. If we don't give the component the props that it needs, it will crash, in the same way as calling a function without passing it the arguments it needs.

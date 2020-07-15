## Exercise 3 - Differentiating "my" messages

In iMessage, the messages that _you_ send don't look the same as messages that others send:

![real iMessage screenshot](/__lecture/assets/real-imessage-screenshot.jpg)

Specifically, these things are different:

- Blue background, white text
- Aligned to the right, not the left
- No username and avatar shown

Inside `data.js`, there's a field, `currentUser`. This tells us which user is the one "logged in". We can use this to determine which messages were sent by our user.

We are going to update the app so that messages sent by the current user match the screenshot above.

---

First, we need to pass the `currentUser` data down through props.

Our `App` component, the top of our React tree, has a `currentUser` prop (passed in `src/index.js` from `src/data.js`). This means that within `App`, we can access it by writing `props.currentUser`.

We aren't yet passing it down to `ChatStream`, so let's add that:

> 🆘 **Do this on your own. If you are stuck, and I do mean STUCK, you can look at this [hint](./_hints/hint-2.md).**

Next, let's update our `ChatStream` component to use this new prop to figure out if each message was sent or received by the current user.

We need to update the callback in our `map` method track a new variable `messageType` to which we will assign value of 'sent' or 'received'.

Once that is done, we need to pass this new value to `ChatMessage`.

> 🆘 **Do this on your own. If you are stuck, and I do mean STUCK, you can look at this [hint](./_hints/hint-3.md).**

Next, we need to update our `ChatMessage` component to do something with this new `messageType` prop.

There are multiple ways to do this, but IMO the simplest is to create two separate components, and pick the appropriate one for the given prop.

Here's our new `ChatMessage` component:

```jsx
const ChatMessage = (props) => {
  if (props.messageType === 'sent') {
    return <SentMessage message={props.message} />;
  } else {
    return <ReceivedMessage message={props.message} />;
  }
};
```

This component doesn't really define any UI of its own; instead, it delegates to two new components, `SentMessage` and `ReceivedMessage`.

These components don't exist yet, so we need to create them. Feel free to create them in the same file, you don't need to create a new file for every single component you create.

The rest of this problem is left as an exercise for you to solve. You should wind up with UI that looks approximately like this:

![sent/received styles](/__lecture/assets/exercise-3-result.png)

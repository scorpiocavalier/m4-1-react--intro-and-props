## Exercise 2 - Creating a `ChatMessage` component

In the "drawing boxes" exercise in class, we learned that repeated chunks of markup should be components.

In the iMessage screenshot, it seems like each message should be its own component! Let's create one.

Create two new files, `src/ChatMessage.js` and `src/ChatMessage.css`. Write the following into the .js file

> **✋ Please do NOT copy/paste!** You'll write _a lot_ of new components over this module. It's worth taking the time to get used to writing them out.

```js
import React from 'react';

import './ChatMessage.css';

const ChatMessage = (props) => {
  return <div className='chat-message'></div>;
};

export default ChatMessage;
```

> You may be wondering: Why do I need to `import React from 'react';`? We aren't using it anywhere!
>
> In fact, we are; that `<div>` getting rendered will be compiled by babel into a `React.createElement()` call. It's being used behind the scenes!

Inside `ChatStream`, we're mapping through each message in the array. Pass that message along to each `ChatMessage` instance:

```jsx
// Inside `ChatStream`
{
  props.messages.map((message) => {
    return <ChatMessage message={message} />;
  });
}
```

Next, update the `ChatMessage` component to render:

- The message body
- The user's name
- The user's avatar

Add some styles to make it look sorta like iMessage. **For now, every message can have the same styles**. You don't need any blue message bubbles, only grey.

After styling, you should wind up with something that looks like this:

How you structure this exactly is up to you, but you should wind up with something similar to this image:

![message list with some styling](/__lecture/assets/exercise-2-result.png)

It's up to you how to structure the HTML content of `ChatMessage`, which CSS properties to use.

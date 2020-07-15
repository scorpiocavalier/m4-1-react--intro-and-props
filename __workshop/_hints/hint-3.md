```diff
function ChatStream(props) {
  return (
    <section className="chat-stream">
      {props.messages.map(message => {
+       let messageType;
+       if (message.user === props.currentUser) {
+         messageType === 'sent';
+       } else {
+         messageType === 'received';
+       }
+
-        return <ChatMessage user={message.user} body={message.body} />;
+        return (
+          <ChatMessage
+            user={message.user}
+            body={message.body}
+            messageType={messageType}
+          />
+        );
      })}
    </section>
  );
}
```

To explain this snippet: we're iterating through each of our messages. The first one looks like this:

```js
{
  user: users.elaine,
  body: "How about you bring me back something?",
  timestamp: "11:38"
}
```

When we compare `message.user`, we're looking at `users.elaine`, and comparing it to `props.currentUser`, which is _also_ `users.elaine`. Both variables are references to the same object! Therefore, they are equal.

If the message's author is the same person as the currently-logged-in user, that means that this message was _sent_; Elaine wrote this message and then sent it to George and Jerry.

The next message in our list is this one:

```js
{
  user: users.george,
  body: "Sure, alright",
  timestamp: "11:39"
}
```

This time, `message.user` does _not_ equal `props.currentUser`, and so the `messageType` gets sent to `received`; Because Elaine didn't write the message, she must have received it.

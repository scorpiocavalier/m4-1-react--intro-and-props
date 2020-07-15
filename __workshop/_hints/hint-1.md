We can solve this by mapping over the `messages` prop we provided to `ChatStream`. Inside the `ChatStream` component, add this code:

```js
return (
  <section className='chat-stream'>
    {props.messages.map((message) => {
      return <div>{message.body}</div>;
    })}
  </section>
);
```

```diff
function App(props) {
  return (
    <div className="wrapper">
      <Header />
-      <ChatStream messages={props.conversation.messages} />
+      <ChatStream
+        messages={props.conversation.messages}
+        currentUser={props.currentUser}
+      />
      <Footer />
    </div>
  );
}
```

## Exercise 4 - Creating a Participant List

In the header, it would be great to show the chat participants, _not including_ the current user. Given that the current user is Elaine, your header should look like this:

![header with George/Jerry avatars](/__lecture/assets/stretch-header.png)

You'll need to use `filter` to get the chat participants who _aren't_ the current user, and `map` to render their faces along the top.

_BONUS_: We now have chat avatars in two places: In the ChatStream, before received messages, and in the header. Create an `Avatar` component which takes two props, `src` and `size`, and update both spots to use that component.

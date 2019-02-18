# Attack

Attack is a Slack clone designed for the heroes in our lives. The app was built using a Ruby on Rails backend framework, and a React/Redux frontend: http://attackslack.herokuapp.com/#/
<kbd>![Splash Page](app/assets/images/splash.png)</kbd>
<kbd>![Alt text](app/assets/images/login.png)</kbd>

## Live Chat
Attack's main feature of live, instant messaging uses the *WebSocket* communication protocol, and in particular Rails's ActionCable module.

* Ability to nest multiple contiguous messages from a user under one "block"
* Hyperlinks to user's profile on messages
* Dark Mode (aka Batman mode)
* Protecting channels from those not registered
* Allowing for multiple ActionCable subscriptions

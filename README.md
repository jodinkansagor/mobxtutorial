# MobX React App

Welcome to the MobX Friday Hack Day! MobX is a straightforward system to manage state in your apps. It is not React specific, you can use it with other frameworks as well. We will be working with React for this session and all resources provided are for React apps.

Global state can be managed in multiple ways including with Redux, the React Context API and Mobx. Mobx applications often use the Context API under the hood to manage their providers. The general gist of this system is that you are wrapping your app in a context provider that gives your app access to a global store. Stores consist of: 
 - <em>Observable values:</em> the state you are tracking 
 - <em>Actions:</em> allow us to change the state (ie the values)
 - <em>Computeds:</em> allow us to derive some value based on 
the state change

By making your components observers, your components abserve and react to changes in the state of the store. The store state changes, your component re-renders. Pretty simple.


#### Let's Get Started!

You are going to want to set up your app. I use create-react-app, you can use the Alchemy bootstrap as well.

You will need to install the following dependencies: 
 - mobx
 - mobx-react or mobx-react-lite (either should work for what we are doing)

 #### Mobx Store Set Up

 You can set up your store either as a class or a function. It's up to you. Just be consistent. You can use a class based store with a fully functional component app (that uses hooks) 

### More Mobx Resources and Tutorials

https://github.com/mobxjs/mobx

https://mobx.js.org/getting-started

https://mobx.js.org/react-integration.html

https://auth0.com/blog/managing-the-state-of-react-apps-with-mobx/

https://www.youtube.com/watch?v=uFWrquw5aHA

https://www.youtube.com/watch?v=MKNls_FReXI

https://www.npmjs.com/package/mobx-react

https://dev.to/rosyshrestha/build-your-first-app-with-mobx-and-react-4896



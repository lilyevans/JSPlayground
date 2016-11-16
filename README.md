This is a template sandbox for creating JS lessons and exercises.

# Getting This Onto Your Computer

Clone the project into your favorite directory:

```
git clone https://github.com/Auroratide/JSPlayground.git
```

Install dependencies (you should have npm installed):
```
npm install
```

# Running the App

```
npm start
```

# Add Some JS

Only add Javascript to the js folder.  There is a public/javascripts folder lying around somewhere, but don't use it.  Generated code goes there.

When you make new modules, they need to be imported into the entry.js file located at the top of the js folder.  This single file is the entry point, and if your code does not go through here, it will not be included.

# Add a route and stuff

This project mimics a super basic, databaseless web server so webby stuff can be used in the Javascript, like DOM manipulation, event handling, jQuery, AJAX calls, and so on.

I'll look into this a little more soon.  You can add new routes and views, but I'm not sure how flexible this node js thing is yet...

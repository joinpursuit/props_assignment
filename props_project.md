referred to (notesJS+HTML/class01172019-react-todos-1) for clarification.

# Create a Blog

A blog is a great example of how props might make our life easier, because it includes a repeated pattern with differing content- the blog posts themselves.

For now, we aren't going to worry about creating an editor for our posts- we are just going to render a list of pre-made posts for the user.

## Getting Started

Take a look at the other file in this repo, `blog_posts.json`. This includes an array which contains objects, each object representing a different blog post.

We are going to create three different components today- `app.js`, `feed.js`, and `post.js`.

- `app.js` is the container component - it's going to hold the state, which is the collection of post objects, and it's going to pass that state down (via props) to our Feed component.
- `feed.js` processes our list of posts and passes each post down (via props) to a different Post component.
- `post.js` accepts a single post and renders it.

Let's start with `app.js` and `feed.js`. Create `app.js` and stick the array from `blog_posts.json` in state as `allPosts` or something similar. Now, in your `render` function, render `<Feed />` and pass `allPosts` in as a prop, called (because we're creative) `allPosts`.

Your Feed component should be functional - instead of a full-on class, just a regular ES6 function. This is because Feed is not storing a state. In that function's body, go ahead and log `props.allPosts` to the console. Run your app and open Chrome Developer Tools. Do you see `allPosts` there?

Cool. Let's move on.

## Giving Feed a Purpose

Wait... Why do we even have a Feed component? We're just passing props through Feed to Posts, so couldn't we just do that in App?

Well, sure, but let's put some functionality in our Feed component that justifies its existence.

Let's make a quick detour to `post.js` and make a Post component that's just a basic functional component. For right now, let's just have it return an `h1` with the word "Post" in it.

Now, inside Feed, let's do two things:

- Loop through each post object from `this.props.allPosts`
- Create an instance of the Post component for each object in the array.

Store those components in a new variable and return them.

Right now, you should just be rendering five `h1` tags with the word "Post" in them. However, they're going to be better soon!

## Rendering Our Posts

Let's take another look at our Post functional component. Go ahead and set it up to accept props (in functional components, simply add a `props` argument), and then use object destructuring to break out our id, title, and body from our `props` object.

In the `return`, place the post's title in an `h3` tag, the body in a `p` tag, and wrap the whole thing in a `section` tag with an `id` attribute corresponding to the `id` prop.

Refresh your page. You should see each post rendering in their entirety.

## Adding Style

Style your page using the design language of [Medium](https://medium.com/).

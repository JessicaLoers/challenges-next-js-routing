# Challenges: Next.js Data Fetching

Copy this [template repository](https://github.com/ahohnsen/challenges-next-js-routing) into your account.

> 💡 Use import, cloning or forking - whatever you like.

We want to prepare to extend our project with some dynamic data. To start mocking up how the application is supposed to work, we'll use this static data.

```js
const coachies = [
  {
    name: "Andrea",
    favorite: "🤿",
  },
  {
    name: "Jessica",
    favorite: "🎨",
  },
  {
    name: "Michael",
    favorite: "☕️",
  },
];
```

- Change the structure of your team page, so that you have a folder `team` with an index page (`index.js`), that displays all our team members names as links. Hardcode the names of the team members at first.
- Add a details page for the team members that uses the path parameter `name`. The page should render/display the value of the path parameter `name`.
- Copy & paste the `coachies` data to all places where needed. Use the data from the array directly.
- On the details page display the information of the respective team member from the `coachies` array.
- Move the array to a helper file and import it to all places you hardcoded the array in. Use the import to replace all local usages.
  > 💡 Use the default export.
- Create the functions `getAllTeamMembers` and `getTeamMemberByName` in the helper file. Use those functions instead of the imported array.
  > 💡 Use the named export.
- Install the `swr` package and use the `useSWR` hook in your components, put in sensible path names and create your _fake fetchers_ using your helper methods. Render error, loading and loaded states.
  > 💡 You can use early returns or conditional rendering to render error, loading or loaded states.

## Bonus Backend Business

- In order to create a team endpoint, create a new `index.js` file in a subfolder of your choice `pages/api/`. Remember that the path on your filesystem reflects the path of the endpoint. Return a status code `200` with a JSON of the team. Try it in your browser.
- Write your actual fetcher in the helper file.

  ```js
  function fetcher(...url) {
    fetch(...url).then((res) => res.json());
  }
  ```

- On the teams page adjust your path if needed and switch from fake fetcher to the actual fetcher from your helpers file to query your new endpoint.

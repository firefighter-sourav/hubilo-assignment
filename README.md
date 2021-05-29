# Assignment Project

## Assignent Details

### Problem Statement

#### Link to fetch data - https://jsonplaceholder.typicode.com/

Create a navigation bar with the following links/tabs - 

Posts, Albums. A dropdown with users and todos fields. (Total of 2 tabs plus a dropdown): All tabs should have a badge reflected showing the count of the particular quantity. 


- Only the first tab should be active. Posts tab. When clicked on the posts tab get the data from the /posts api. Kindly refer to the above link. 
- Only after fetching the data from the POSTS tab , you should enable the Albums tab. Once the data is fetched you need to update the total posts count on the badge. 
- Try to add a post - using the post api from the above link. Whenever you add a post - the count needs to be updated on the badge of the posts tab. 
- When you click on the Albums tab, fetch all the albums list and display it. Only after fetching the albums list - the dropdown should become active. At the same time the albums count on the badge needs to be updated. 
- When clicked on the users dropdown - fetch users data. On the top display the total of posts and albums count which was fetched in the previous tabs.DISPLAY ONLY COUNT above the users list. 
- When clicked on the todos menuitem, fetch the todos data and display the total count of users above the todos list. 


### Use the following for your coding:
- Redux for global state management. 
- UseContext - Where ever necessary.
- Use react hooks and functional components only to implement any logic or build the components.
- Use react-routing for navigating between pages. 
- Use lazy loading and code splitting if possible.
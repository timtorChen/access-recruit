## Access Frontend Exercise

#### Mission 
Build a website which shows the GitHub users in a List

**GitHub API Documentation**
- [List](https://developer.github.com/v3/users/#get-all-users)
- [Pagination](https://developer.github.com/v3/#link-header) ​ (optional)

**Note**
- Please use ​ React hook​ to design your component
- Pagination is a "bonus" item. Please feel free to ignore it.
- Once you finish the exercise, please add a README.txt to explain.
- Anything about UI Spec(size, margin , padding, icon...etc), please feel free to design it 
- If anything in the exercise is unspecified and you need to make assumptions, feel free to do it. Nice to have:​ Redux, Rxjs, Redux-observable

Please kindly be informed that component design and data flow are much more important than a beautiful UI design.

**The List page will look like**
- avatar_url 
- login 
- site_admin (badge) 
- Number of items 
- Paginated (optional)
   - start with since=0, page size = 20
- Non-paginated
  - Limit to 100 users

#### Bonus Mission 
Upon clicking, the login Detail UI will be shown
Please feel free to ignore it if there are no freetime

**GitHub API Documentation**
- [Detail](https://developer.github.com/v3/users/#get-a-single-user)


**The Detail UI will look like:**
- avatar_url
- name
- bio
- login
- site_admin
- location
- blog
# BlogSample

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.3.

## Development server

Run `ng build` then ,

Run `npx scully serve --project blog-sample`

Run the previous 2 commands every time you change /add new md file (blog)

### Add new blog post 

1- Run the following command : 
    `ng generate @scullyio/init:post --name="Title of the post"`

2- Set target folder for the new post by typing `mdfiles` after run the previous command

3- new file is created in mdfiles folder `title-of-post.md` inside the specified folder.

4- open the file and edit the content , make sure that published property is set to true if you want it to be published.

5- Run `npx scully --project blog-sample` to create a route for the newly created blog post. Scully will also update the scully-routes.json file with the new route.
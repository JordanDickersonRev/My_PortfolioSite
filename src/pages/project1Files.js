export const project1 = {
    name : `E-commerce Website`,
    summary :`SkateHouse is a mock up e-commerce website where 
        clients can buy complete skateboards. Upon entering, the 
        client will land on the home page which consist of six links, 
        store, enter the raffle, Twitter, Instagram, Facebook, and 
        Snapchat. The header of the website 
        has five links, log in, sign up, home, store, and bag. The 
        store page has a collection of complete skateboards that the 
        clients can pick from. If the client is looking for a particular 
        skateboard size, the store has six sizes that they can look 
        through. When clicking on a skateboard, the client will be taken 
        to that specific skateboard page where they can do four things, 
        specify how many boards they want to order, check if the skateboard
        is left in stock, add it to their bag, and view a bigger picture
        of the skateboard. The client's bag shows every skateboard that they 
        added, the total due, and a list of their favorite skateboards if 
        the client is logged in. Clients can also add skateboards to the bag
        from their favorites. Scroll down to see my future plans for this
        website.`,
    process : [`SkateHouse was built using MySql, Express, React, and Node.
        Node opens the files on the server and handles file request for the client. 
        MySql stores all of the websites information. Express allowed me 
        to build web pages using the api. React helped me create the client-side 
        of the website and fetch information needed to and from the web 
        pages built from the api.`,

        `Backend dependencies include cors, express, mysql, and nodemon.
        Cors is needed for this website, without it I would not be able
        to access resources from the frontend files. This is important because
        clients must be able to send a request to the backend(node) and then get a
        response from it. Cors allowed me to relax the security that applies to
        the api by allowing resources from another domain to be accessible.
        Express was used to build three web pages that were created using the api,
        /store, /favorites, and /users. These backend web pages(node files/backend files)
        gets requests and sends responses to the frontend files. One example of this
        comes from the /store page. The /store page uses the get, post, and put
        methods from express to select, insert, and update the store in the backend
        web page which then sends a response to the frontend file(store file) in 
        react. I used multiple mysql query statements in the api to store and retrieve 
        records from the database. For example, when a user wants to create an 
        account, that information must be stored in the database. Before that happens, 
        the api checks if the username or email already exists in the database 
        from another user. If that information already exists then the api will 
        send a response message to the frontend files(react files) stating that 
        the username or email already exists. The query method allows the api to make 
        checks so that the database doesn't have duplicate information, it also holds 
        information like skateboards and favorites.`,

        `Frontend dependencies include react, axios, react-bootstrap, react-burger-menu,
        react-dom, react-router-dom, react-hooks-global-state, react-scripts, 
        use-local-storage, and web-vitals. The react library is important because 
        it helped me create client-side web files(react files). It also has helpful 
        tools like hooks(useState, useEffect) that makes it easier to give variables 
        and object properties a value. Axios fetches other domain's data and allows
        the client to make http request to backend web pages(node files) and 
        then gets a response from those pages as well. This is why cors from the 
        backend was so important, axios is trying to access or send resources to 
        a domain in the backend(backend web pages/ node files) and cors has to 
        give axios a pass to do those things. React-bootstrap made it easier to 
        set the value of hooks. Using form and buttons from bootstrap, I was able to 
        set the values of hooks in just one line using the onChange prop inside 
        of a form. Creating a hamburger menu is different in react, so I used 
        react-burger-menu to make the process easy. React-router-dom is used to 
        make this a single page website. This website has many files but the 
        page is never refreshed, instead the content is fetched based off the 
        url. For example, the home page and the store page are technically the 
        same. The html, css, and javascript on the page changes based off the url.
        With react-router-dom you assign files different urls with the route tag. 
        React-hooks-global-state made it easy to assign variables and object 
        properties globally, allowing global hooks to be called in any file 
        as long as the parent file of the global hooks are imported. I created 
        a username global state to create different routes for clients that are 
        not logged in. If a client is logged in, they can't see the information 
        in the login or signup files because they are already logged in. However, 
        if they are not logged in, the information on those files will be available if 
        they visit it. Use-local-storage allowed me to save the theme that the 
        client prefers when they visit the site(light or dark mode). I created
        css variables for light and dark mode, then I created a switch using css.
        If light mode is on when the client clicks the switch then the website
        will change to dark mode and vice versa. Use-local-storage saves the client's
        choice to their local storage so that whenever the client visits the website,
        their preferred mode is already selected. React-dom, react-scripts, and web-vitals 
        comes pre-installed with react.`],
    difficulties : `The hardest parts about making this website were creating some of the
        queries for mysql and figuring out how to display images using the database. In
        college, I took a class on mysql but never used it with node so learning how
        to read variables from the frontend was hard to find. I know reading variables
        from the frontend to the database is a simple method but this project taught me 
        how to properly google questions. I'm the kind of person that doesn't give up when 
        I can't figure out something. When it came to googling questions, I would waste days 
        trying to figure out how to do something that isn't possible all because I didn't 
        ask the right question. It took me awhile to realize this pattern. I realized this was 
        my weakness when I could not figure out how to display images using the database. At first, 
        I thought you had to store the entire image in mysql. Then I googled, "the best practices 
        for images in mysql". I learned that you should store the image path, not the entire image 
        because it takes up a lot of space and slows the project down in terms of speed. Other than 
        that, the website wasn't too bad. It took awhile to make because I had to first scope what 
        the website would look like, and then do a ton of programming.`,
    future : `I'm going to learn JWT access and refresh tokens soon so the client can stay logged
        in even after the page refreshes, or to keep the client logged in for a few days. This is
        the first thing I'm going to learn after I'm finished with my up and coming project that 
        uses firebase. I've seen people do user authentication with npm local-storage and I know 
        that's not the right way to do it. I will dive deeper into node so I can learn this 
        the proper way.`,
    video : `ecommerce`,
    code : `https://github.com/TryHardJ/E_Commerce_WebSite`
};
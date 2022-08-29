export const project2 = {
    name : `AMD & Intel Web Scraper`,
    snippet: `AMD & Intel Web Scraper is website that takes the
        best rated desktops and laptops from AMD and Intel to display
        that information for the client to see. The header...`,
    summary : `AMD & Intel Web Scraper is a website that takes the
        best rated desktops and laptops from AMD and Intel to display
        that information for the client to see. The header includes a 
        link to the home page with a hamburger menu that contains four
        links, AMD laptops, AMD desktops, Intel laptops, and Intel desktops.
        The home page has two links, AMD and Intel. Both links on the home 
        page shows the best rated laptops and desktops put together 
        for said brand. When viewing any link in the website the client
        can see the description of the product and the website it came 
        from. Upon clicking on the description, the client will be redirected 
        to the product itself. Currently, this website only scrapes from
        best buy but the goal is to add more domains. Scroll down to see 
        my future plans for this website.`,
    process : [`The dependencies for this project are express, ejs, axios, and 
        cheerio. Express was used to create seven web pages using the api. The use
        method from express allowed all files in the public folder to be accessible
        and the set method allowed me to set the view engine to ejs. Ejs is a template
        engine used by node that helps create a html template with minimal code.
        Ejs was important because it allowed me to create two html templates that 
        I rely on through out the entire project. The home page template is used once
        under the '/' path and the result page template is used for the rest of 
        the paths. For example, to render all of the results from the web scraper I 
        used the response.render method and inside I put the result page template
        and then the results variable. I did this because on the result page I added
        a JSON.stringify(results) inside of the html. That line of code prints anything
        inside of the results variable. Depending on the path of the web page the results
        variable is different, this makes it possible to have multiple web pages that uses
        the same html template. For example, the /amddesktop path results variable will
        be different from the /intellaptop results variable, this means that those
        are two different web pages because the paths and the information on them are
        different, the html template(result page) is the only thing thats the same
        and ejs allows us to do that. Axios fetches data from urls and cheerio picks out
        html elements from urls. These two work perfectly together for this project. For
        example, after I fetch data using axios I take that response.data and assign it
        to a variable. I then take that variable and use it as a parameter inside the
        cheerio.load() method. I assign cheerio.load(variable) to a variable named $ to
        call upon at anytime. I then use our new variable $ to look for any <a> tag that
        contains whatever element I'm looking for from the url that we fetched using
        axios. The syntax for this process looks like this, $('a:contains("AMD Ryzen")',
        (response.data variable)). For each tag that comes back I take the text and
        the href (syntax is $(this).text() and $(this).attr('href')). After getting that
        information I push all of it inside an array as object properties and that's how
        I scrape the best buy website. Now that I have all the scraped information stored
        inside an array, I use the array as a parameter for my arrayLoop function and
        return the results of that array inside of a variable called results. The arrayLoop
        function also organizes the information of the array into html format. I then take
        that results variable and use it inside the response.render method I talked about
        earlier to pass the web scraped information to the html template I created(results page).
        The results variable is different in each path because I used different parameters
        in the arrayLoop for each path.`],
    difficulties : ``,
    future : ``,
    video : ``,
    code : ``
};
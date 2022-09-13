export const project2 = {
    name : `Web Scraper`,
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
        Best Buy but the goal is to add more domains. Scroll down to see 
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
        different, the html template(result page) is the only thing that's the same
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
        I scrape the Best Buy website. Now that I have all the scraped information stored
        inside an array, I use the array as a parameter for my arrayLoop function and
        return the results of that array inside of a variable called results. The arrayLoop
        function also organizes the information of the array into html format. I then take
        that results variable and use it inside the response.render method I talked about
        earlier to pass the web scraped information to the html template I created(results page).
        The results variable is different in each path because I used different parameters
        in the arrayLoop for each path.`],
    difficulties : `The hardest part about this project was learning how to print variables
        inside of ejs. This was difficult because I've never heard of ejs or JSON.stringify 
        before this project. Some kind of template for html came across my mind when
        I realized that six of the website pages would have the same html, just different
        results. I knew there had to be some kind of html template out there because programming
        always has a template for anything when it comes to repeating the same thing over and 
        over, just look at classes. After looking online I came across ejs. Ejs was easy
        to understand but finding information on how to print variables inside of it took
        a few days because of my work and life schedule. Sometimes it's hard to do projects
        after work. Here's the embarrasing part, all I had to do was read all of the information
        I found online and I would of figured it out fast. After that, I learned to never
        skip over any information, even if I am tired.`,
    future : `I would love to add more websites to the web scraper besides Best Buy. Any website
        that gives me permission to scrape from is a plus. The more information, the better the 
        website. I want to make the website public, that's why adding more sites is important. 
        Having a project with actual users would look great in this portfolio. I also want to 
        add custom designs and change the css too. I would of done all of that before but I had to
        move on from this project at that moment.`,
    video : `webscraper`,
    code : `https://github.com/TryHardJ/AmdIntelWebScraper`
};
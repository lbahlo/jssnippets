Front-end Job Interview Questions


### Software Architecture
Software architecture refers to the high level structures of a software system, the discipline of creating such structures,
and the documentation of these structures. These structures are needed to reason about the software system.

#### Why is Architecture Important?
Like any other complex structure, software must be built on a solid foundation. Failing to consider key scenarios,
failing to design for common problems, or failing to appreciate the long term consequences of key decisions can put your application
at risk. Modern tools and platforms help to simplify the task of building applications, but they do not replace the need to design your
application carefully, based on your specific scenarios and requirements. The risks exposed by poor architecture include software
that is unstable, is unable to support existing or future business requirements, or is difficult to deploy or manage in a production
environment.

Systems should be designed with consideration for the user, the system (the IT infrastructure), and the business goals. For each
of these areas, you should outline key scenarios and identify important quality attributes (for example, reliability or scalability)
and key areas of satisfaction and dissatisfaction. Where possible, develop and consider metrics that measure success in each of
these areas.


### OOP Concepts

#### What is OOP?
Object-oriented programming (OOP) is a programming language model organized around objects rather than "actions" and
data rather than logic. Historically, a program has been viewed as a logical procedure that takes input data, processes it,
and produces output data.

Object-oriented programming takes the view that what we really care about are the objects we want to manipulate rather 
than the logic required to manipulate them. 

In traditional class-based Object-Oriented Programming, a class is a definition of a template for creating objects. 
It consists of member variables (which may or may not be private, but are typically private) and member functions (or methods)
which can act on these member variables. When you instantiate this class, you are creating an instance object at runtime.

Thus, an object consists of (private) state (i.e., the variables), as well as associated behaviour (i.e., the methods).
The object is said to encapsulate both state and behaviour. To get the object to do something, you must invoke one of its methods.
Usually, other functions cannot act on this object.



#### What is an Object?
In pure OOP terms an object is an instance of a class.  Objects are usable instances of classes. 
When you instantiate this class, you are creating an instance object at runtime.


#### What is a Class?
A class is simply a representation of a type of object. It is the blueprint, or plan, or template, that describes
the details of an object. A class is the blueprint from which the individual objects are created. Class is composed
of three things: a name, attributes, and operations.

A class is a definition of a template for creating objects. It consists of member variables (which may or may not be private, but are
typically private) and member functions (or methods) which can act on these member variables



#### What is Polymorphism 
Polymorphism is the capacity to do "the same call" but to have different results (different code being executed)
thanks to some kind of context.

#### What is Encapsulation (or Information Hiding)?



#### What is MVC architecture?

The Model-View-Controller (MVC) architecture separates the modeling of the domain, the presentation,
and the actions based on user input into three separate classes.

Unfortunately, the popularity of this pattern has resulted in a number of faulty usages; each technology (Java, ASP.NET, etc.)
has defined it in their own way making it difficult to understand. In particular, the term "controller" has been used to mean
different things in different contexts. The definitions given bellow are the closes possible ones I found for ASP.NET version of MVC.


**Model:** DataSet and typed DataSet (some times business object, object collection, XML, etc.) are the most common uses of the model.

**View:** The ASPX and ASCX files generally handle the responsibilities of the view.

**Controllers:** The handling of events or the controlling is usually done in the code-behind class.
In a complex n-tier distributed system the MVC architecture place the vital role of organizing the presentation tier of the system.



#### What is SOA?

A service-oriented architecture is essentially a collection of services. These services communicate with each other.
The communication can involve either simple data passing or it could involve two or more services coordinating some activity.
Some means of connecting services to each other is needed.


#### What is the Data Access Layer?

The data access layer (DAL), which is a key part of every n-tier system, is mainly consist of a simple set of code that
does basic interactions with the database or any other storage device. These functionalities are often referred to as
CRUD (Create, Retrieve, Update, and Delete).

The data access layer need to be generic, simple, quick and efficient as much as possible. It should not include complex
application/ business logics.

I have seen systems with lengthy, complex store procedures (SP), which run through several cases before doing a simple retrieval.
They contain not only most part of the business logic, but application logic and user interface logic as well. If SP is 
getting longer and complicated, then it is a good indication that you are burring your business logic inside the data access layer.


### Data structures HashMap,Array,LinkedList,stack,queue -  define/useage

#### Lists represent a sequential ordering of elements.
##### HashMap - every object is a simple hashmap
     Maps are used to represent a collection of key / value pairs.
     
     **Good Uses of:**
      HashMap are efficient for locating a value based on a key and inserting and deleting values based on a key.
      The entries of a HashMap are not ordered.
      
     Array - 
     Good Uses of:
     
     LinkedList - 
     Good Uses of:
     
     Stack - A stack is a container of objects that are inserted and removed according to the last-in first-out (LIFO) principle.
     Good Uses of:
        - The simplest application of a stack is to reverse a word. You push a given word to stack - letter by letter - and then pop letters from the stack.
        - Another application is an "undo" mechanism in text editors; this operation is accomplished by keeping all text changes in a stack.

     Queue - A queue is a container of objects (a linear collection) that are inserted and removed according to the first-in first-out (FIFO) principle. 
          enqueue add to back
          dequeue remove from front
          
     Good Uses of:
          Line analogies, getting in line(queue) to wait to (do) something
     
     
### Describe Restful Routes

    REST (architecture)- representational state transfer. is a style of software architecture. As described in a dissertation by Roy Fielding,
    REST is an "architectural style" that basically exploits the existing technology and protocols of the Web.
    
    The REST style emphasizes that interactions between clients and services is enhanced by having a limited number of operations (verbs). Flexibility is provided by assigning resources (nouns) their own unique Universal Resource Identifiers (URIs). Because each verb has a specific meaning (GET, POST, PUT and DELETE), REST avoids ambiguity.
    
    The "ST" in "REST" stands for "State Transfer", and indeed, in a good REST design operations are self-contained, and each
    request carries with it (transfers) all the information (state) that the server needs in order to complete it.
    
    REST uses a smaller message format than SOAP. SOAP uses XML for all messages, which makes the message size much larger, and thus less efficient. T
    
    RESTful is typically used to refer to web services implementing such an architecture.
    
    RESTful APIS 
    

     
### Code a List <html> javascript

### Simple SQL queries

### Security Question

https://www.sans.org/reading-room/whitepapers/securecode/security-checklist-web-application-design-1389

Risk Assessment
 Authentication
        Authentication is a first line of defense. T

 Authorization and Access Control
        Authentication tells a user “I recognize you as a user.” Authorization says “Now that I
        know who you are I also know what you are allowed to do; what data you are allowed to
        see and modify.” Access control determines where a user can connect from; what time
        they can connect, and the type of encryption required. The goal is to develop a security
        strategy to protect back-end and front-end data and systems. This can be
        accomplished through the use of roles, credentials, and sensitivity labels.8

 Session Management - Project account information and session tokens
    session Id attacks:
        Intercetpion - Encrypting sessions
        prediction - randomly assigned session ids
        brute-force - kibg jetsoaces >
        fixation - forcing assignment and frequent regeneration of session ids 
        
           
 Data and InPut Validation
        Cross-Site Scripting and Command Injection take advantage of a “violation of trust”17
        between a user accessing a known and trusted site and an attacker. The attacker
        bypasses security mechanisms by adding malicious code to open parameters in an
        application. An open parameter could be a URL, QueryString, Header, Cookie, Form
        Field, or a Hidden Field. It is any parameter that does not assure that the data entered
        is data that would normally be expected. For example, if the parameter is a date field,
        and the input “injected” into it is a script file, then the attacker has been successful in
        finding and using an open parameter. Well-written code would discard the script. The
        importance of knowi
        
        
         The strongest defense against these attacks is Input Validation. If the server validates
        all data entering the web application against known good criteria, the chances of
        successful attack are greatly reduced. The burden of security validation must fall on the
        server, and hence the application developer, rather than the client. Client-side
        validation is often used as a primary validation to “reduce round trips to the server,” but
        should not be used as a security defense. 18
 
        

 Cross Site Scripting (XSS)
       - All code that accepts input from users via an HTTP request must be reviewed to ensure
that it can identify large input. Once inappropriate data is identified the activity must be
logged and the data droppe

All data input fields must have reasonable field lengths and specific data types. Limit
the amount of text allowed in free form fields.


 Command Injection Flaws

 Buffer Overflows

 Error Handling

During development write a policy for handling errors. Determine which errors should
trigger a response to the end user. Carefully write error pages with appropriate
information. The error page reported to the end user must be carefully crafted to give
the user some information. However, an attacker can learn a tremendous amount of
information about a website from default error messages. The messages “file not
found” or “access denied” give hackers information about the file system structure and
its permissions. Determine which errors should be logged.

 Logging  Must have 

 Remote Administration

Assure that user roles and administration roles are clearly defined and that the program
holds the roles to their intended use. You may also bind administrator functions to
specific IP addresses using IP Filtering.


 Web Application and Server Configuration



Designing input validation strategies
Partitioning Web sites into open and restricted areas
Implementing effective account management practices
Developing effective authentication and authorization strategies
Protecting sensitive data
Protecting user sessions
Preventing parameter manipulation
Handling exceptions securely
Securing an application's configuration management features
Listing audit and logging considerations

6. What happend when you click url (put in my words)   see bittin

````



```
General Questions:

1. What did you learn yesterday/this week?
2. What excites or interests you about coding?
3. What is a recent technical challenge you experienced and how did you solve it?
4. What UI, Security, Performance, SEO, Maintainability or Technology considerations do you make while building a web application or site?
5. Talk about your preferred development environment.
6. Which version control systems are you familiar with?
7. Can you describe your workflow when you create a web page?
8. If you have 5 different stylesheets, how would you best integrate them into the site?

9. Can you describe the difference between progressive enhancement and graceful degradation?
       https://www.w3.org/wiki/Graceful_degradation_versus_progressive_enhancement


10. How would you optimize a website's assets/resources?
       https://developer.yahoo.com/performance/rules.html

       https://www.sitepoint.com/web-site-optimization-steps/

       http://insights.dice.com/2013/09/20/front-end-engineer/


11. How many resources will a browser download from a given domain at a time?
    2 to 6, depends on browser, how configured

12. What are the exceptions?

13. Name 3 ways to decrease page load (perceived or actual load time).

14. If you jumped on a project and they used tabs and you used spaces, what would you do?
15. Describe how you would create a simple slideshow page.
16. If you could master one technology this year, what would it be?
    REACT,  rxjs Observables

17. Explain the importance of standards and standards bodies.
18. What is Flash of Unstyled Content? How do you avoid FOUC?
19. Explain what ARIA and screenreaders are, and how to make a website accessible.
20. Explain some of the pros and cons for CSS animations versus JavaScript animations.
21. What does CORS stand for and what issue does it address?


HTML Questions:

1. What does a doctype do?
     The doctype declaration should be the very first thing in an HTML document, before the tag. The doctype declaration is not an HTML tag; it is an instruction to the web browser about what version of the markup language the page is written in. The doctype declaration refers to a Document Type Definition (DTD).Oct 8, 2011

    DOCTYPEs are required for legacy reasons. When omitted, browsers tend to use a different rendering mode that is incompatible with some specifications. Including the DOCTYPE in a document ensures that the browser makes a best-effort attempt at following the relevant specifications.

2. What's the difference between full standards mode, almost standards mode and quirks mode?

    There are now three modes used by the layout engines in web browsers: quirks mode, almost standards mode, and full standards mode. In quirks mode, layout emulates nonstandard behavior in Navigator 4 and Internet Explorer 5. This is essential in order to support websites that were built before the widespread adoption of web standards. In full standards mode, the behavior is (hopefully) the behavior described by the HTML and CSS specifications. In almost standards mode, there are only a very small number of quirks implemented.

    The DOCTYPE shown in the example, <!DOCTYPE html>, is the simplest possible, and the one recommended by HTML5. Earlier versions of the HTML standard recommended other variants, but all existing browsers today will use full standards mode for this DOCTYPE, even the dated Internet Explorer 6. There are no valid reasons to use a more complicated DOCTYPE. If you do use another DOCTYPE, you may risk choosing one which triggers almost standards mode or quirks mode.

3. What's the difference between HTML and XHTML?

4. Are there any problems with serving pages as application/xhtml+xml?

  IE < 8 will show a download dialog for the pages, instead of rendering them properly.

5. How do you serve a page with content in multiple languages?

6. What kind of things must you be wary of when design or developing for multilingual sites?

7. What are data- attributes good for?
    Store data in HTML to be used for more info/help, ect to use with not hits to server.
    Accessed via : get/set Attributes() on a element

    Thanks to HTML5, we now have the ability to embed custom data attributes on all HTML elements. These new custom data attributes consist of two parts:

    Attribute Name
    The data attribute name must be at least one character long and must be prefixed with 'data-'. It should not contain any uppercase letters.
    Attribute Value
    The attribute value can be any string.

    We can now use this stored data in our site’s JavaScript to create a richer, more engaging user experience. Imagine that when a user clicks on a vegetable a new layer opens up in the browser displaying the additional seed spacing and sowing instructions. Thanks to the data- attributes we’ve added to our <li> elements, we can now display this information instantly without having to worry about making any Ajax calls and without having to make any server-side database queries.

8. Consider HTML5 as an open web platform. What are the building blocks of HTML5?
        more semantic text markup
        new form elements
        vedio and audio
        new javascript API
        canvas and SVG
        new communication API
        geolocation API
        web worker API
        new data storage

9. Describe the difference between a cookie, sessionStorage and localStorage.

      localStorage and sessionStorage are both so-called WebStorages and features of HTML5.

      localStorage stores information as long as the user does not delete them.

      sessionStorage stores information as long as the session goes. Usually until the user closes the tab/browser.

      cookies are simply cookies, which are supported by older browsers and usually are a fallback for frameworks that use the above mentioned WebStorages.

      In contrast cookies can store way less information then WebStorages and the information in WebStorages is never transferred to the server.

      Keep in mind that the EU has a regulation that requires websites to inform their users about the usage of cookies. I dont know whether this also applies to WebStorages

10. Describe the difference between <script>, <script async> and <script defer>.
      Excellent: http://www.growingwiththeweb.com/2014/02/async-vs-defer-attributes.html
      http://javascript.tutorialhorizon.com/2015/08/11/script-async-defer-attribute/

11. Why is it generally a good idea to position CSS <link>s between <head></head> and JS <script>s just before </body>? Do you know any exceptions?
       css:
       quicker feedback fro user
       It is recommended because when you have the CSS declared before <body> starts, your styles has actually loaded already. So very quickly users see something appear on their screen (e.g. background colors). If not, users see blank screen for some time before the CSS reaches the user.

       prevent rerendering page if in body
       Also, if you leave the the styles somewhere in the <body>, the browser has to re-render the page (new and old when loading) when the styles  declared has been parsed.

       script:

12. What is progressive rendering?

    Progressive rendering is the name given to techniques used to render content for display as quickly as possible.

    It used to be much more prevalent in the days before broadband internet but it's still useful in modern development as mobile data connections are becoming increasingly popular (and unreliable!)

    Examples of such techniques :

    Lazy loading of images where (typically) some javascript will load an image when it comes into the browsers viewport instead of loading all images at page load.
    Prioritizing visible content (or above the fold rendering) where you include only the minimum css/content/scripts necessary for the amount of page that would be rendered in the users browser first to display as quickly as possible, you can then use deferred javascript (domready/load) to load in other resources and content.

13. Have you used different HTML templating languages before?
     No, frameworks have templating engines build in

     angular1 (build in)
     agnular2 (built in)
     Durnadal (view composition build in)


CSS Questions:

1. What is the difference between classes and IDs in CSS?
    Use a class when you want to consistently style multiple elements throughout the page/site. Classes are useful when you have, or possibly will have in the future, more than one element that shares the same style. An example may be a div of "comments" or a certain list style to use for related links.

    Additionally, a given element can have more than one class associated with it, while an element can only have one id. For example, you can give a div two classes whose styles will both take effect.

    Furthermore, note that classes are often used to define behavioral styles in addition to visual ones. For example, the jQuery form validator plugin heavily uses classes to define the validation behavior of elements (e.g. required or not, or defining the type of input format)

    Examples of class names are: tag, comment, toolbar-button, warning-message, or email.
    Use the ID when you have a single element on the page that will take the style. Remember that IDs must be unique. In your case this may be the correct option, as there presumably will only be one "main" div on the page.

    Examples of ids are: main-content, header, footer, or left-sidebar.
    A good way to remember this is a class is a type of item and the id is the unique name of an item on the page.

2. What's the difference between "resetting" and "normalizing" CSS? Which would you choose, and why?

    The main differences are:

    Normalize.css preserves useful defaults rather than "unstyling" everything. For example, elements like sup or sub "just work" after including normalize.css (and are actually made more robust) whereas they are visually indistinguishable from normal text after including reset.css. So, normalize.css does not impose a visual starting point (homogeny) upon you. This may not be to everyone's taste. The best thing to do is experiment with both and see which gels with your preferences.

    Normalize.css corrects some common bugs that are out of scope for reset.css. It has a wider scope than reset.css, and also provides bug fixes for common problems like: display settings for HTML5 elements, the lack of font inheritance by form elements, correcting font-size rendering for pre, SVG overflow in IE9, and the button styling bug in iOS.

    Normalize.css doesn't clutter your dev tools. A common irritation when using reset.css is the large inheritance chain that is displayed in browser CSS debugging tools. This is not such an issue with normalize.css because of the targeted stylings.

    Normalize.css is more modular. The project is broken down into relatively independent sections, making it easy for you to potentially remove sections (like the form normalizations) if you know they will never be needed by your website.

    Normalize.css has better documentation. The normalize.css code is documented inline as well as more comprehensively in the GitHub Wiki. This means you can find out what each line of code is doing, why it was included, what the differences are between browsers, and more easily run your own tests. The project aims to help educate people on how browsers render elements by default, and make it easier for them to be involved in submitting improvements.
    I've written in greater detail about this in an article about normalize.css



3. Describe Floats and how they work.
  The float CSS property specifies that an element should be taken from the normal flow and placed along the left or right side of its container, where text and inline elements will wrap around it.

4. Describe z-index and how stacking context is formed.

    Positioning and assigning a z-index value to an HTML element creates a stacking context, (as does assigning non-full opacity).
    Stacking contexts can be contained in other stacking contexts, and together create a hierarchy of stacking contexts.
    Each stacking context is completely independent from its siblings: only descendant elements are considered when stacking is processed.
    Each stacking context is self-contained: after the element's contents are stacked, the whole element is considered in the stacking order of the parent stacking context.


5. Describe BFC(Block Formatting Context) and how it works.

A block formatting context is a part of a visual CSS rendering of a Web page. It is the region in which the layout of block boxes occurs and in which floats interact with each other.

A block formatting context is created by one of the following:

    the root element or something that contains it
    floats (elements where float is not none)
    absolutely positioned elements (elements where position is absolute or fixed)
    inline-blocks (elements with display: inline-block)
    table cells (elements with display: table-cell, which is the default for HTML table cells)
    table captions (elements with display: table-caption, which is the default for HTML table captions)
    elements where overflow has a value other than visible
    flex boxes (elements with display: flex or inline-flex)

6. What are the various clearing techniques and which is appropriate for what context?

    clear:both;
    overflow: hidden;
    height: auto;


7. Explain CSS sprites, and how you would implement them on a page or site.

What are your favourite image replacement techniques and which do you use when?
How would you approach fixing browser-specific styling issues?
How do you serve your pages for feature-constrained browsers?
What techniques/processes do you use?
What are the different ways to visually hide content (and make it available only for screen readers)?
Have you ever used a grid system, and if so, what do you prefer?
    jqWidgets - grid jqxGrid
    AgGrid -

8. Have you used or implemented media queries or mobile specific layouts/CSS?
   used them never generated one from scratch

9. Are you familiar with styling SVG?
   d3.js
   simple canvas

10. How do you optimize your webpages for print?
  I have not had to support printing yet using javascript.  Would research, get needed info and then implement.

11. What are some of the "gotchas" for writing efficient CSS?

12. What are the advantages/disadvantages of using CSS preprocessors?

13. Describe what you like and dislike about the CSS preprocessors you have used.

14. How would you implement a web design comp that uses non-standard fonts?

15. Explain how a browser determines what elements match a CSS selector.
  Reads right-to-left
  Check matching elements for the key(right-most) selector
  Check if the elements are matching parents for the next selectors

16. Describe pseudo-elements and discuss what they are used for.
    A CSS pseudo-element is used to style specified parts of an element. (e.g. first line of test in <p> or first letter)
    All pseudo-elements
      ::after
      ::before
      ::first-letter
      ::first-line
      ::selection
      ::backdrop
      ::placeholder
      ::marker
      ::spelling-error
      ::grammar-error

17. Explain your understanding of the box model and how you would tell the browser in CSS to render your layout in different box models.

18. What does * { box-sizing: border-box; } do? What are its advantages?

19. List as many values for the display property that you can remember.

20. What's the difference between inline and inline-block?

21. What's the difference between a relative, fixed, absolute and statically positioned element?

22. The 'C' in CSS stands for Cascading. How is priority determined in assigning styles (a few examples)? How can you use this system to your advantage?

23.What existing CSS frameworks have you used locally, or in production? How would you change/improve them?
   bootstrap, ionic css framework,

24.Have you played around with the new CSS Flexbox or Grid specs?

    Yes. - Flex Container Flex Item properties

      http://flexboxfroggy.com
      https://scotch.io/tutorials/a-visual-guide-to-css3-flexbox-properties

25.How is responsive design different from adaptive design?
    Responsive websites respond to the size of the browser at any given point.

    Adaptive websites adapt to the width of the browser at a specific points. In other words, the website is only concerned about the browser being a specific width, at which point it adapts the layout.

    Another way to think about it is the difference between smooth and snap design. Responsive design is smooth because the layout fluidly adjusts regardless of what device it is viewed on. Adaptive design, on the other hand, snaps into place because the page is serving something different because of the browser or device it is viewed on. This animation illustrates the difference in behavior:

26. Have you ever worked with retina graphics? If so, when and what techniques did you use?
  no.
  The CSS method is great for background images, but for inline images in your HTML you’ll have to modify the <img> tag. Simply add the @2x image to the source attribute, then use width and height to scale it to the original dimensions.

27. Is there any reason you'd want to use translate() instead of absolute positioning, or vice-versa? And why?

  if view was fixed size, static, positions not relative, never needing to resize - absolute
  Any control that needs to resize, Responsive or Adpative views, write once target multiple platforms .... translate()


JS Questions:

1. Explain event delegation
    Add the event to a parent element and when a child element is clicked the event will bubble up to parent which will trigger the event for the child.  event will containe the child element user clicked on.

    Simple:  when the event bubbles up to the UL element, you check the event object's target property to gain a reference to the actual clicked node.  Here's a very basic JavaScript snippet which illustrates event delegation:

    // Get the element, add a click listener...
    document.getElementById("parent-list").addEventListener("click", function(e) {
    // e.target is the clicked element!
    // If it was a list item
    if(e.target && e.target.nodeName == "LI") {
      // List item found!  Output the ID!
      console.log("List item ", e.target.id.replace("post-", ""), " was clicked!");
    }
    });

2. Explain how this works in JavaScript

    Event bubbling provides the foundation for event delegation in browsers.

    The event is dispatched to its target  EventTarget and any event listeners found there are triggered. Bubbling events will then trigger any additional event listeners found by following the EventTarget's parent chain upward, checking for any event listeners registered on each successive EventTarget. This upward propagation will continue up to and including the Document.

3. Explain how prototypal inheritance works

    In a nutshell, prototypal inheritance is when an object inherits from another object. This differs from classical inheritance, in which a class inherits from another class.

    e.g. var male = Object.create(human)  //object male inheriting from object human

    Other ways JS supports inheritance

        Pseudoclassical
        A pattern which uses a  constructor and the new operator, combined with a prototype added to the constructor.

        Functional (by Douglas Crockford)
        This pattern allows one object to inherit from another, take the result and augment it the child level to achieve inheritance.  You create an object as your parent, pass the child object to the parent to inheritt/apply its properties and returns the resulting object back to the child who can then augment its own properties to the object returned from the parent.
        //parent object
        var human = function(name {
             var self = {};
             self.name = name || '';
             ...
             return self;
         }
         var male = function(name){
            var self = human(name);
            self.gender = "Male";
            return self;
          }
          var female = function(name){
            var self = human(name);
            self.gender = "Female";
            return self;
          }
          var bob = male("Bob");
          var lenna = female("Lenna");
          console.log("lenna is a " + lenna.gender)


4. What do you think of AMD vs CommonJS?

5. Explain why the following doesn't work as an IIFE: function foo(){ }();.

6. What needs to be changed to properly make it an IIFE?

    The most widely accepted way to tell the parser to expect a function expression is just to wrap in in parens, because in JavaScript, parens can’t contain statements. At this point, when the parser encounters the function keyword, it knows to parse it as a function expression and not a function declaration.

7. What's the difference between a variable that is: null, undefined or undeclared?

8. How would you go about checking for any of these states?

9. What is a closure, and how/why would you use one?

10. What's a typical use case for anonymous functions?

11. How do you organize your code? (module pattern, classical inheritance?)
   Module pattern

12. What's the difference between host objects and native objects?

13. Difference between: function Person(){}, var person = Person(), and var person = new Person()?

14. What's the difference between .call and .apply?
    .call(this, commaSepeartedListOfParms)
    .apply(this, arrayOfParms)

15. Explain Function.prototype.bind.

  ECMAScript 5 defines an addition method called 'bind()'.the 'bind()' method create a new function instance whose this value is bound to the value to that was passed into 'bind()'.

16. When would you use document.write()?

17. What's the difference between feature detection, feature inference, and using the UA string?

18. Explain Ajax in as much detail as possible.

19. What are the advantages and disadvantages of using Ajax?

20. Explain how JSONP works (and how it's not really Ajax).

21. Have you ever used JavaScript templating?
   yes

22. If so, what libraries have you used?
  knockout, Angualar2

23. Explain "hoisting".

24. Describe event bubbling.

25. What's the difference between an "attribute" and a "property"?

26. Why is extending built-in JavaScript objects not a good idea?

27. Difference between document load event and document DOMContentLoaded event?

28. What is the difference between == and ===?

29. Explain the same-origin policy with regards to JavaScript.

Make this work:
1. duplicate([1,2,3,4,5]); // [1,2,3,4,5,1,2,3,4,5]
    function duplicate(values) {
      var len = values.length;

      for (var i = 0; i < len; i++) {
         values[len+i] = values[i];
      }
      return values;
    }

2. Why is it called a Ternary expression, what does the word "Ternary" indicate?

      ternary operand accepts three parameters.
      ternary operator ?:
      conditional ? truethy_block : falsey_block

3. What is "use strict";? what are the advantages and disadvantages to using it?
    the short and most important answer here is that use strict is a way to voluntarily enforce stricter parsing and error handling on your JavaScript code at runtime. Code errors that would otherwise have been ignored or would have failed silently will now generate errors or throw exceptions. In general, it is a good practice.

    Some of the key benefits of strict mode include:

    Makes debugging easier. Code errors that would otherwise have been ignored or would have failed silently will now generate errors or throw exceptions, alerting you sooner to problems in your code and directing you more quickly to their source.

    Prevents accidental globals. Without strict mode, assigning a value to an undeclared variable automatically creates a global variable with that name. This is one of the most common errors in JavaScript. In strict mode, attempting to do so throws an error.

    Eliminates this coercion. Without strict mode, a reference to a this value of null or undefined is automatically coerced to the global. This can cause many headfakes and pull-out-your-hair kind of bugs. In strict mode, referencing a a this value of null or undefined throws an error.

    Disallows duplicate property names or parameter values. Strict mode throws an error when it detects a duplicate named property in an object (e.g., var object = {foo: "bar", foo: "baz"};) or a duplicate named argument for a function (e.g., function foo(val1, val2, val1){}), thereby catching what is almost certainly a bug in your code that you might otherwise have wasted lots of time tracking down.

    Makes eval() safer. There are some differences in the way eval() behaves in strict mode and in non-strict mode. Most significantly, in strict mode, variables and functions declared inside of an eval() statement are not created in the containing scope (they are created in the containing scope in non-strict mode, which can also be a common source of problems).

    Throws error on invalid usage of delete. The delete operator (used to remove properties from objects) cannot be used on non-configurable properties of the object. Non-strict code will fail silently when an attempt is made to delete a non-configurable property, whereas strict mode will throw an error in such a case.

4. Create a for loop that iterates up to 100 while outputting "fizz" at multiples of 3, "buzz" at multiples of 5 and "fizzbuzz" at multiples of 3 and 5
    function output(i,str){
         console.log("i = " + i + " : " + str);
    }

    function fizzBuzz(n) {
      if((n === undefined) || (n === null)) {
        n =50; //default to 100
      }

      for (var i = 1; i <=n; i++){

        if ( i%3===0 && i%5===0) {
            // multipsel 5 & 3  output fizzbuzz
            output(i,"fizzbuzz");
        }
        else if (i%3 === 0){
           //multpiles of 3 output fizz
           output(i,"fizz");
        }
        else if (i%5 === 0) {
           // multiples of 5 output buzz    
           output(i,"buzz");
        }
       else{
           // else output nothing
           output(i,"");
        }

      }

    }

    fizzBuzz();

5. Why is it, in general, a good idea to leave the global scope of a website as-is and never touch it?

    too enusre you don't mess with any thrid party code/plugins
    prevents name collesions
    only one global space, shared with other ```



6. Why would you use something like the load event? Does this event have disadvantages? Do you know any alternatives, and why would you use those?

7. Explain what a single page app is and how to make one SEO-friendly.

8. What is the extent of your experience with Promises and/or their polyfills?
      a bit, used them with DCAF for all http requests
      with SMA used rxjs (observables) for http request

9. What are the pros and cons of using Promises instead of callbacks?

      pros:
        cleaner code
        easier to report errors


10. What are some of the advantages/disadvantages of writing JavaScript code in a language that compiles to JavaScript?

   Typescript
      Type Checking, compile errors vs runtime,

11. What tools and techniques do you use debugging JavaScript code?

12. What language constructions do you use for iterating over object properties and array items?

13. Explain the difference between mutable and immutable objects.

14. What is an example of an immutable object in JavaScript?

15. What are the pros and cons of immutability?

16. How can you achieve immutability in your own code?

17. Explain the difference between synchronous and asynchronous functions.

18. What is event loop?

19. What is the difference between call stack and task queue?

20. Explain the differences on the usage of foo between function foo() {} and var foo = function() {}



Testing Questions:

1. What are some advantages/disadvantages to testing your code?

2. What tools would you use to test your code's functionality?

3. What is the difference between a unit test and a functional/integration test?

4. What is the purpose of a code style linting tool?

Performance Questions:

1. What tools would you use to find a performance bug in your code?
     chrome dev tools (shows performance times for loadtime, user actions)

2. What are some ways you may improve your website's scrolling performance?


      Expensive Styles
      Reflows and repaints
      Failing to debouncing your scroll events (schule scrolling to only do
        vs multiple refresh)

3. Explain the difference between layout, painting and compositing.

      Layout:-

      Browser will determine how much space each element takes up and where to place it.

      Painting:-

      This is the process of filling in pixels. It involves drawing out elements.

      Compositing:-

      Browser draws element to the screen in the correct order (may have multiple layers) so the page renders correctly.

      For more information:-

      https://developers.google.com/we...

4. ways to help with load time
    http://www.webdesignerdepot.com/2013/02/how-to-speed-up-your-website-load-times/

Network Questions:
1. Traditionally, why has it been better to serve site assets from multiple domains?

2. Do your best to describe the process from the time you type in a website's URL to it finishing loading on your screen.

3. What are the differences between Long-Polling, Websockets and Server-Sent Events?

4. Explain the following request and response headers:

These are very specific HTTP header information

5. Diff. between Expires, Date, Age and If-Modified-...
Do Not Track
Cache-Control
Transfer-Encoding
ETag
X-Frame-Options
What are HTTP methods? List all HTTP methods that you know, and explain them.


Coding Questions:

1. Question: What is the value of foo?
   var foo = 10 + '20';

   ANS: "1020"

2. Question: How would you make this work?

  add(2, 5); // 7
  add(2)(5); // 7


  ANS:
  function sum(x) {
    if (arguments.length == 2) {
      return arguments[0] + arguments[1];
    } else {
      return function(y) { return x + y; };
    }
  }

3. Question: What value is returned from the following statement?

"i'm a lasagna hog".split("").reverse().join("");

4. Question: What is the value of window.foo?

( window.foo || ( window.foo = "bar" ) );

5. Question: What is the outcome of the two alerts below?

var foo = "Hello";
(function() {
  var bar = " World";
  alert(foo + bar);
})();
alert(foo + bar);


6. Question: What is the value of foo.length?

    var foo = [];
    foo.push(1);
    foo.push(2);

    ANS: 2

7. Question: What is the value of foo.x?

    var foo = {n: 1};
    var bar = foo;
    foo.x = foo = {n: 2};

    ANS:

8. Question: What does the following code print?

console.log('one');
setTimeout(function() {
  console.log('two');
}, 0);
console.log('three');


Fun Questions:

1. What's a cool project that you've recently worked on?
2. What are some things you like about the developer tools you use?
3. Who inspires you in the front-end community?
4. Do you have any pet projects? What kind?
5. What's your favorite feature of Internet Explorer?
6. How do you like your coffee?
````



````
What happens after you click an url

1. Frist the browser will check to see if it has the requested object/page in cache and it is fresh (displayable) If found will go to decode/rendering step (see #9)

2. Browser will ask OS for server's IP Address (need to be resolved, most likely will be a domain name reference that needs to be translated to an actual IP address)

3. OS will request the DNS to lookup the IP Address (this process involves 4 (I think)  different lookups from different DNS resolution servers before the actually IP is resolved and returned to the OS )

4.Then the OS will negotiate a TCP connection to the IP Address (server) and let browser know when done

5. Then the browser will send the HTTP request through the TCP connection

6. The browser receives HTTP response and may close the connection or reuse for a future request

7. The browser checks the type of response to determine how to handle it
        2xx  - request succeeded, (e.g. Page found - Ok)
        3xx -  redirect or a conditional response (3xx result status codes),
        4xx -  Authorization request, (e.g. 404 Page Not Found, something went wrong with request  ...
        5xx -  error happened on server 
        
         
8. Cache response if possible or configured

9. The browser will decode response (if zipped will need to unzip )

10. The browser determines what to do with response (e.g. is it a HTML page, is it an image, is it a sound clip?)

11. The browser renders response, or offers a download dialog for unrecognized types



n an extremely rough and simplified sketch, assuming the simplest possible HTTP request, no proxies, IPv4 and no problems in any step:

1. browser checks cache; if requested object is in cache and is fresh, skip to #9
2. browser asks OS for server's IP address
3. OS makes a DNS lookup and replies the IP address to the browser
4. browser opens a TCP connection to server (this step is much more complex with HTTPS)
5.browser sends the HTTP request through TCP connection
6.browser receives HTTP response and may close the TCP connection, or reuse it for another request
7.browser checks if the response is a redirect or a conditional response (3xx result status codes), authorization request (401), error (4xx and 5xx), etc.; these are handled differently from normal responses (2xx)
8.if cacheable, response is stored in cache
9.browser decodes response (e.g. if it's gzipped)
10.browser determines what to do with response (e.g. is it a HTML page, is it an image, is it a sound clip?)
11.browser renders response, or offers a download dialog for unrecognized types


  browser check cahce, if requested object is in cache and is fresh, it uses the content
  browser asks OS for server's IP address
  OS makes a DNS lookup and replies the IP address to the browser
  browser opens a TCP connection to the server
  browser sends the HTTP request throught TCP connection.
  browser receives HTTP response and close the TCP connection
  browser checks if the response status.
  if cacheable, reponse will be stored in chace
  browser renders response, or offers a download diaglog.
````

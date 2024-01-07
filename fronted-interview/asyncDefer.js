/**
 * Async and defer tags are boolean attribute in JavaScript that are used to know the external script efficiently in our web page.
 * 
 * Now let understand how our code work when we create a webpage using HTML,CSS and JavaScript.
 * 
 * First our browser start parsing the HTML attribute.
 * But when it encounter script tag (<script src="">)then it stops 
 * The script start getting fetched and HTML parsing stops their only.
 * Then the script gets executed.
 * And finally HTML parsing begins again. 
 * 
 * 
 * 
 * 
 * Now if we use async in our script tag (<script async src="">)
 * Then while parsing of HTML it also fetch the script simultaneously 
 * But after fetching of script file it starts the execution of scipt and stops HTML parsing
 * HTML parging begins when script execution is completed.
 * 
 * 
 * 
 * 
 * If we use defer tag in script senario get changed (<script defer src="">)
 * HTML parsing continues
 * Script is being fetched
 * But when HTML parsing stops then only Script execution begins.
 * 
 * 
 * 
 * If we have too many script then using async might break our code but defer follows the execution of order.
 * Defer is consider to be good to use
 */
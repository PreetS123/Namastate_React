/**
 * Difference between debouncing and throttling?
 * Debouncing is called whenever the time differece between two key stroke exceed the time limit
 * Whereas throttling is called after every fixed timespan.
 * 
 * 2nd senario
 * When a user resizes the window then 1000 of api call takes place 
 * Then if we want to limit the api call or minimize its call then we need to use throttling.
 * But if we want to know the number of resing of user then debouncing is considered to be used.
 * 
 * 3rd senario
 * If we have a button in a shooting game and we want to limit the button rate 
 * Then if we use debouncing then we can delay the function call when the difference between two click is more than given time span
 * But if we use throttling then we can limit the function call and functoion call will take place after every fixed time span.
 * In this senario throttling is better than debouncing.
 */
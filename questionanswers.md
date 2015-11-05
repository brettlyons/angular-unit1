** Why learn angular over other frameworks like Ember, Backbone, Knockout, etc?
   * Because many companies are hiring for it, and/or have legacy software written in it.  And it's slightly more complicated and less performant than many other frameworks.  It's like running with a small parachute or a weightvest.

** People have some very strong opinions about Angular. What are 3 common complaints people have about Angular?
   * It's slow on mobile.
   * It's complicated.
   * it has a constant page-update lock that means every piece of the page is constantly being checked for needing to be updated
   * there are many frameworks that either perform better, or facilitate faster development speed
    
** Is Angular an MVC framework?
   * yes, a #client side# model-view-controller framework, or Model-View-Modelview framework.

** Turn to the Angular docs. Find ng-app. What is it and what does it do? What does ng stand for?
   * apprently NG stands for Core Module.  (WTF?)  according to the docs, ng-app is for auto-bootstrapping an application, and it designates the root element of a document.


** What are Angular expressions? How do they compare to tags from templating engines you've used before?
    * Almost 1 : 1 to tags from other templating languages.  The main difference is that expressions can also contain math to evaluate, or a sort of psuedo-function call sort of behavior.
** What happens when you write invalid code in an expression? What type of error do you get?
   * You don't.  The page displays the {{ (expression description) }}
** What are Angular filters? Describe what a filter does and then name four built-in filters, including one that we haven't used yet.
   * Angular filters describe the type of the field and how it should be displayed.  Number, currency, jason, uppercase, lowercase... -- these all effect the presentation of a given variable for display.  Example: Currency rounds to 2 decimal places and puts a symbol(defined in the filter or by Locale settings) in front of the number.
** What's the syntax for filters?
   * {{ expression | <typeof filter>: <option 1> : <option 2> }}
** Can you use more than one filter?
   * No.
** We'll soon see how to create custom filters. What is a use case for a custom filter?
   * a non-custom filter doesn't work for displaying what needs to be displayed.

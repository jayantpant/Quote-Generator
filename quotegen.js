$( document ).ready(function() {
  generate();
  
  function generate() {
  var quotes = ["I’m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can’t handle me at my worst, then you sure as hell don’t deserve me at my best.@Marilyn Monroe","Get busy living or get busy dying.@Stephen King","The first step toward success is taken when you refuse to be a captive of the environment in which you first find yourself.@Mark Caine","Courage is grace under pressure.@Ernest Hemingway","Things work out best for those who make the best of how things work out.@John Wooden","Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning.@Albert Einstein","Don't cry because it's over, smile because it happened.@Dr. Seuss","The difference between winning and losing is most often not quitting.@Walt Disney","Failure is another steppingstone to greatness.@Oprah Winfrey","If you're going through hell, keep going.@Winston Churchill","Happiness is a butterfly, which when pursued, is always beyond your grasp, but which, if you will sit down quietly, may alight upon you.@Nathaniel Hawthorne","Only put off until tomorrow what you are willing to die having left undone.@Pablo Picasso","Do one thing every day that scares you.@Eleanor Roosevelt","Don't worry about failure; you only have to be right once.@Drew Houston","Nothing great was ever achieved without enthusiasm.@Ralph Waldo Emerson."];
    var randomQuote = quotes[Math.floor(Math.random()*quotes.length)];
 var quoteAuthor = randomQuote.split("@");
  $('.words').text(quoteAuthor[0]);
  $('.speaker').text(quoteAuthor[1]);
}
  $(".button").on("click", function() {
    generate();
  });
});

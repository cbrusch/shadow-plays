$(document).ready(function() {
 
  var approot = $('link#approot').attr('href');
 
  // Add stylesheet to bottom of stack (if skipped adding in Step 2)
  $('head').append('<link type="text/css" rel="stylesheet" href="'+approot+'hooks/my_hook/custom.css" />');
 
});
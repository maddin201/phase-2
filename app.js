function addItem () {

//get class
var priority_class = $('.choose-priorety')
.clone()
.removeClass('choose-priorety')
.attr('class');

// append to the list
$(".tasks").append('<li class="' + priority_class + '">
<input type= "checkbox" class="toggle" /><span>' + $("#todo-input").val() + '</span> <small>
<a href="#edit">Edit</a> &bull; <a href="#delete">Delete</a></small></li>');        

// clear the text
$("#todo-input").val("");

}


   ///// Check all boxes 

  $("#toggle-all").click(function () {
     $('input:checkbox').not(this).prop('checked', this.checked);
 });


   //strike-through text when box checked, unstrike when unchecked. 


  $(document).on("click", '.toggle', function() {
    if ($(this).closest("li").find("span").css('textDecoration') === 'line-through') {
          $(this).closest("li").find("span").css('textDecoration', 'none');
    } else {
      $(this).closest("li").find("span").toggleClass('stroked');

    }
  }); 


/// add task when enter key is pressed

  $("#todo").keydown(function (e) {
    
    if (e.which == 13)
      addItem();
  });


  // on clicking the add button
$('#add-task').on('click',function(e) {
    e.preventDefault();
    addItem();
})


  // delegate the events to dynamically generated elements
  // for the edit button
  $(document).on("click", 'a[href="#edit"]', function () {
    
    // make the span editable and focus it
    $(this).closest("li").find("span").prop("contenteditable", true).focus();
    return false;
  });


  /// Delete all checked boxes 

  $(document).on("click", '#clearCompleted', function() {
  $(".toggle:checked").each(function () {
    $(this).closest("li").remove();
  });
});  



  $(document).ready(function() {

  var $addForm = $('#todo-form');
  var $taskInput = $addForm.find('#todo-input');
  var $todoList = $('.tasks-parent li');
  var fadeSpeed = 300;

  })



        //priorities btn display list of urgency with 3 buttons

  var $prioritiesContainer = $('.priorities');
  var $prioritiesList = $prioritiesContainer.find('.priorities-list');
  var $choosePriorityBtn = $prioritiesContainer.find('.choose-priorety');
  var $prioritiesBtns = $prioritiesContainer.find('.priority button');

  $choosePriorityBtn.on('click',function() {
    $prioritiesList.toggle();
  });
  $prioritiesBtns.on('click',function() {
    $choosePriorityBtn.removeClass('low medium high').addClass($(this).attr('class'));
    $prioritiesList.hide();
  });


  // for the delete button
  $(document).on("click", 'a[href="#delete"]', function () {
    // remove the list item
    $(this).closest("li").fadeOut(function () {
      $(this).remove();
    });
    return false;
  });
 
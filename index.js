//This is the js file for the shopping list app
//This function allows the user to add items to the list
function addItem() {
    $('#js-shopping-list-form').submit(function(event) {
        event.preventDefault();
        let newItem = $(this).find('#shopping-list-entry').val();
        $('ul').append('<li>' + 
        '<span class="shopping-item">' + newItem + '</span>' +
        '<div class="shopping-item-controls">' +
          '<button class="shopping-item-toggle">' +
            '<span class="button-label">check</span>' +
          '</button>' +
          '<button class="shopping-item-delete">' +
            '<span class="button-label">delete</span>' +
          '</button>' +
        '</div>' +
      '</li>')
        //This line clears the field after it is submitted so that a new item can be typed
      $(this).find('#shopping-list-entry').val('');
    }
    )
}
//This function uses the 'check' button to toggle the strikethrough for the items
function checkToggle() {
    //Both the checkToggle and deleteItem functions use event delegation to apply to new items as well
  $('ul').on('click', '.shopping-item-toggle', function(event) {
    event.preventDefault;
    $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked') 
  }
  )
}
//This function uses the delete button to remove items from the list permanently
function deleteItem() {
  $('ul').on('click', '.shopping-item-delete', function(event) {
    event.preventDefault;
    $(this).closest('li').remove();
  }
  )
}
//This code runs all three functions when the page is loaded
$(addItem);
$(deleteItem);
$(checkToggle);


function addItem() {
    $(.js-shopping-list-form).submit(function(event) {
        event.preventDefault();
        let newItem = $(this).find(#shopping-list-entry).text()
        let newItemHTML = "<li>
        <span class="shopping-item">" + newItem + "</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>"
        $(.shopping-list).append(newItemHTML);
    }
    )
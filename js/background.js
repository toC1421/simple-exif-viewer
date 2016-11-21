var ContextMenus = new function () {
    var items = {};
    var callbacks = {};

    this.setItems = function (aItems) {
        aItems.forEach(function (item) {
            callbacks[item.id] = item.onclick;
            item.onclick = null;
            items[item.id] = item;
        });
    };

    this.create = function () {
        Object.keys(items).forEach(
            function (key) {
                chrome.contextMenus.create(items[key]);
            }
        );
    };

    chrome.contextMenus.onClicked.addListener(function (info, tab) {
        callbacks[info.menuItemId](info, tab);
    });
};

ContextMenus.setItems([
    {
        title : 'View Exif Info',
        type  : 'normal',
        id: 'hello',
        contexts : ['image'],
        onclick: getClickHandler()
    }
]);

function getClickHandler() {
  return function(info, tab) {

    // The srcUrl property is only available for image elements.
    var url = 'index.html#' + info.srcUrl;

    // Create a new window to the info page.
    chrome.windows.create({ url: url, width: 600, height: 600 });
  };
};

chrome.runtime.onInstalled.addListener(ContextMenus.create);

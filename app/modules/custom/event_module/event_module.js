function event_module_menu() {
  var items = {};
  items['events'] = {
    title: 'DrupalGap',
    page_callback: 'event_module_hello_world_page'
  };
  return items;
}

/**
 * The callback for the "Hello World" page.
 */
function event_module_hello_world_page() {
  var content = {};
  content['my_button'] = {
    theme: 'button',
    text: 'Hello World',
    attributes: {
      onclick: "drupalgap_alert('Hi!')"
    }
  };
  return content;
}
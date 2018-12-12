
function event_module_menu() {
  var items = {};
  items['events'] = {
    title: 'Evenemang',
    page_callback: 'event_module_events_page'
  };
  return items;
}

function event_module_events_page() {
  try {
    var content = {};
    content['event_events_list'] = {
      theme: 'view',
      format: 'ul',
      path: 'my-events', /* the path to the view in Drupal */
      row_callback: 'event_module_events_list_row',
      empty_callback: 'event_module_events_list_empty',
      attributes: {
        id: 'event_events_list_view'
      }
    };
    return content;
  }
  catch (error) { console.log('event_module_events_page - ' + error); }
}
/**
 * The callback for the "Hello World" page.
 */
 function event_module_events_list_row(view, row, variables) {

  // var image_html = theme('image', { path: row.Image.src });
   var title_html = '<h3>' + row.title + '</h3>';
   var date_html = '<p>' + row.Date + '</p>';
   var link = l(title_html + date_html, 'node/' + row.nid);

   return link;

 }

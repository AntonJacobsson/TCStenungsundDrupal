/**
 * Implements hook_menu().
 */
function my_module_menu() {
  var items = {};
  items['articles'] = {
    title: 'Articles',
    page_callback: 'my_module_articles_page'
  };
  return items;
}
function my_module_articles_page() {
  try {
    var content = {};
    content['my_articles_list'] = {
      theme: 'view',
      format: 'div',
      path: 'my-articles', /* the path to the view in Drupal */
      row_callback: 'my_module_articles_list_row',
      empty_callback: 'my_module_articles_list_empty',
      attributes: {
        id: 'my_articles_list_view'
      }
    };
    return content;
  }
  catch (error) { console.log('my_module_articles_page - ' + error); }
}

/**
 * The row callback to render a single row.
 */
function my_module_articles_list_row(view, row, variables) {
  try {
    return l(t(row.title), 'node/' + row.nid);
  }
  catch (error) { console.log('my_module_articles_list_row - ' + error); }
}

/**
 *
 */
function my_module_articles_list_empty(view, variables) {

  // This...

  return t('Sorry, no articles were found.');

  // Or...

  var content = {};
  content['msg'] = { markup: t('Sorry, no articles were found.') }
  // content['some-other-widget'] = { /* ... */ }
  return content;

}

/**
 * Implements hook_menu().
 */
function article_module_menu() {
  var items = {};
  items['articles'] = {
    title: 'Välkommen!',
    page_callback: 'article_module_articles_page'
  };
  return items;
}
function article_module_articles_page() {
  try {
    var content = {};
    content['article_articles_list'] = {
      theme: 'view',
      format: 'div',
      path: 'my-articles', /* the path to the view in Drupal */
      row_callback: 'article_module_articles_list_row',
      empty_callback: 'article_module_articles_list_empty',
      attributes: {
        id: 'article_articles_list_view'
      }
    };
    return content;
  }
  catch (error) { console.log('article_module_articles_page - ' + error); }
}

/**
 * The row callback to render a single row.
 */
function article_module_articles_list_row(view, row, variables) {

  var image_html = theme('image', { path: row.Image.src });
  var title_html = '<p>' + row.title + '</p>';
  var link = l(image_html + title_html, 'node/' + row.nid);

  return link;

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

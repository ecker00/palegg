$(function() {
  // Set upload button text to filename.
  $("input:file[id=picture]").change(function() {
    var ID = $(this).attr('id');
    var label = $('label[for="'+ID+'"]');
    var path = $(this).val().replace('C:\\fakepath\\', '');
    if (path) $(label).html(path);
    else $(label).html($(label).data('text')); // Reset button
  });
});

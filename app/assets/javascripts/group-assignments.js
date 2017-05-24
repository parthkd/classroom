(function() {
  var $form_values_present, $title_blacklisted, $present;

  var $title_blacklist = [
    'new',
    'edit'
  ]

  $('.group_assignments').ready(function() {
    return $('form').on('change keyup', function() {
      var $submit_button;
      $submit_button = $('#group_assignment_submit');
      if ($form_values_present() && !$title_blacklisted()) {
        return $submit_button.prop('disabled', false);
      } else {
        return $submit_button.prop('disabled', true);
      }
    });
  });

  $form_values_present = function() {
    return $present('group_assignment_title') && ($present('grouping_title') || $present('group_assignment_grouping_id'));
  };

  $title_blacklisted = function() {
    var $title = $('#group_assignment_title').val();

    return ($.inArray($title, $title_blacklist) !== -1)
  };

  $present = function(id) {
    var $el;
    $el = $("#" + id);
    if ($el.length !== 0) {
      return $el.val().length !== 0;
    }
    return false;
  };
}).call(this);

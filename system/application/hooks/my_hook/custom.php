<?php 
function my_hook() {
 
  $ci =& get_instance();
 
  $ci->template->add_js('system/application/hooks/my_hook/custom.js');
 
}
?>
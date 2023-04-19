
  <?php
  $cards = array(
      array(
          "name" => "Card 1",
          "description" => "This is card 1",
          "tags" => array("tag1", "tag2", "tag3")
      ),
      array(
          "name" => "Card 2",
          "description" => "This is card 2",
          "tags" => array("tag1", "tag4", "tag5")
      ),
      array(
          "name" => "Card 3",
          "description" => "This is card 3",
          "tags" => array("tag2", "tag3", "tag5")
      )
  );
  
  $selected_tags = array("tag1", "tag3");
  
  foreach ($cards as $card) {
      $show_card = false;
      foreach ($selected_tags as $tag) {
          if (in_array($tag, $card["tags"])) {
              $show_card = true;
          } else {
              $show_card = false;
              break;
          }
      }
      if ($show_card) { ?>
      



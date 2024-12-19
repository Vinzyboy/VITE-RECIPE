<?php
$conn = null;
$conn = checkDbConnection();
$level = new Level($conn);
$error = [];
$returnData = [];
if (array_key_exists("levelid", $_GET)) {
  checkPayload($data);

  $level->level_aid = $_GET['levelid'];
  $level->level_title = checkIndex($data, "level_title");
  $level->level_created = date("Y-m-d H:i:s");
  $level->level_datetime = date("Y-m-d H:i:s");
  checkId($level->level_aid);

  // checks current data to avoid same entries from being updated
  $level_title_old = checkIndex($data, 'level_title_old');
  compareName($level, $level_title_old, $level->level_title);
  checkId($level->level_aid);
  $query = checkUpdate($level);
  returnSuccess($level, "level", $query);
}

checkEndpoint();

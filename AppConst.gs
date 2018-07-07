var start_log = "開始";
var end_log = "終了";

// https://XXXXX.backlog.jp/
var backlog_url = PropertiesService.getScriptProperties().getProperty('BACKLOG_URL');
var backlog_api_key = PropertiesService.getScriptProperties().getProperty('BACKLOG_API_KEY');
var backlog_project_id = PropertiesService.getScriptProperties().getProperty('BACKLOG_PROJECT_ID');
var backlog_issue_type_id = PropertiesService.getScriptProperties().getProperty('BACKLOG_ISSUE_TYPE_ID');
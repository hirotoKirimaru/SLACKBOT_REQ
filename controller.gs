function doPost(e) {
  var method_name = "webhook doPost";
  console.log(method_name + start_log);
  
  try {  
  var url = backlog_url + "api/v2/issues";
  var headers = {
    "Content-Type" : "application/x-www-form-urlencoded "
  };

  // 暫定的に「てすと」だけを登録できるようにしている。
  var params = {
    "apiKey" : backlog_api_key,
    "projectId" : backlog_project_id,
    "summary" : "てすと",
    "issueTypeId" : backlog_issue_type_id,
    "priorityId" : "1"
  };
  
  // URLパラメータの結合
  // TODO もっといい方法があればリファクタリングする。payloadに設定したらダメだったから、urlに設定するしかないと思うけど…。
  // 取り急ぎ、使えるようにはしたとはいえ、暗号化されていなければ仕事につかえない…。
  var urlParam = "?";
  for (param in params) {
    urlParam = urlParam + param + "=" + params[param] + "&";
　}
  urlParam.slice(0, urlParam.length - 1);
    
  url = url + urlParam
  var options = {
    "method" : "POST",
    "headers" : headers,
    "muteHttpExceptions" : true
  }
    UrlFetchApp.fetch(url, options)

  } catch(e) {
    console.log(e);
  
  } finally {
    console.log(method_name + end_log);
  }  
  
  return; 
}


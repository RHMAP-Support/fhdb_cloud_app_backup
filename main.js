/* main.js
 * All calls here are publicly exposed as REST API endpoints.
 * - the return 'callback' method signature is 'callback (error, data)', where 'data' is a JSON object.
*/

// You can find this url in the studio dashboard, just add '/cloud/' to
var appurl = 'https://support-tbd8odimttbsvkhssiqdij3l-dev.df.dev.e111.feedhenry.net/cloud/'
// Detail of this request module can be found at https://github.com/mikeal/request
var request = require('request');

exports.list = function(params, callback) {
url = appurl + 'fhdbList';
request(url, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log("Response is " + body);
    return callback(undefined, body);
  }
  else {
    console.log("ERROR.  Response is " + error);
    return callback(undefined, error);
  }
})
};

exports.listLastName = function(params, callback) {
url = appurl + 'fhdbListLastName';
request.post(url, { form: { lastname : 'smith' } }, 
  function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log("Response is " + body);
    return callback(undefined, body);
  }
  else {
    console.log("ERROR.  Response is " + error);
    return callback(undefined, error);
  }
})
};

exports.deleteall = function(params, callback) {
url = appurl + 'fhdbDeleteall';
request(url, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log("Response is " + body);
    return callback(undefined, body);
  }
  else {
    console.log("ERROR.  Response is " + error);
    return callback(undefined, error);
  }
})
};

exports.addMrJones = function(params, callback) {
url = appurl + 'fhdbAdd';
request.post(url, { form: { firstname : 'jim', lastname : 'jones', country : 'Ireland', phone : '123456' } }, 
  function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log("Response is " + body);
    return callback(undefined, body);
  }
  else {
    console.log("ERROR.  Response is " + error);
    return callback(undefined, error);
  }
})
};

exports.addMrSmith = function(params, callback) {
url = appurl + 'fhdbAdd';
request.post(url, { form: { firstname : 'jack', lastname : 'smith', country : 'dbland', phone : '987654' } }, 
  function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log("Response is " + body);
    return callback(undefined, body);
  }
  else {
    console.log("ERROR.  Response is " + error);
    return callback(undefined, error);
  }
})

};

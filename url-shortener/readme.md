End points:



Shortened url(POST):
http://localhost:3000/api/v1/'your url' (must contain no /'s )

//user can expect to enter any url that does not contain '/', such as the prefix 'http://', and get a randomly generated 5 character long new url.

Display all URLS, short and long(GET):
http://localhost:3000/api/v1/urls

//user will see json format display all urls, with short and long coresponding to eachother

Display single row of urls based upon id entered in parameter(GET):
http://localhost:3000/api/v1/url/:id(parameter) 

//user will enter the id after url/ and will recieve url info for that instance/row

Update URL based upon id entered as parameter into url(POST):
http://localhost:3000/api/v1/url/:id(parameter) 

//user will enter the id after url/ and will update shortened url for that instance/row


Delete url based upon id entered as paramter(DELETE):
http://localhost:3000/api/v1/url/:id(parameter) 

//user will enter the id after url/ and will delete that instance/row

Returns the long original Url when the shortened url is entered as parameter
http://localhost:3000/api/go/:shortURL(parameter)

//user will enter the short url after go/ and will be redirected to the oringial url


{
  search:[
    {
      type:'web',
      query:'https://www.google.com/search?q={{term}}',
      translate:'parseHTML(response)',
      icon:{
        selector:'#search .g .r a',
        expression:'"https://getfavicon.appspot.com/" + $(element).attr("href")'
      },
      name:{
        selector:'#search .g .r a',
        expression:'$(element).text()'
      },
      link:{
        selector:'#search .g .r a',
        expression:'$(element).attr("href")'
      },
      domain:{
        selector:'#search .g .r a',
        expression:'$(element).attr("href").substring($(element).attr("href").indexOf("/") + 2, $(element).attr("href").indexOf("/", $(element).attr("href").indexOf("/") + 2))'
      },
      description:{
        selector:'#search .g .st',
        expression:'$(element).text()'
      }
    }
  ]
}

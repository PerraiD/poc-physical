$(document).ready(function(){
  var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  var uris = [
                "geo:0,0?q=9%20Avenue%20Carnot,%2044000%20Nantes,%20France",
                "geo:0,0?q=27%20Boulevard%20de%20Stalingrad,%2044041%20Nantes,%20France",
                "geo:0,0?q=Château%20des%20ducs%20de%20Bretagne,%20Place%20Marc%20Elder,%20Nantes,%20Frances"
             ]
  if(!iOS){
    console.log("passe");
    $('img[id^=card]').each(function (index,value) {            
      $(this).attr("onclick", "location.href='"+uris[index+1]+'\'');
    });
  }
})
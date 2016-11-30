$(document).ready(function(){
  var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  var uris = {
              card1:"http://maps.apple.com/?http://maps.google.com/?saddr=Ma%20position&daddr=9%20Avenue%20Carnot,%2044000%20Nantes,%20France",
              card2:"http://maps.apple.com/?saddr=Ma%20position&daddr=27%20Boulevard%20de%20Stalingrad,%2044041%20Nantes,%20France",
              card3:"http://maps.apple.com/?saddr=Ma%20position&daddr=Château%20des%20ducs%20de%20Bretagne,%20Place%20Marc%20Elder,%20Nantes,%20Frances"
              }
  if(iOS){
    $('[id^=card]').each(function (index,value) {
      $(this).click("location.href="+uris[$(this).id]);
    });
  }
})
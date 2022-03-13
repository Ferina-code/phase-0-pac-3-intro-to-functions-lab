function shout(string) {
    return string.toUpperCase();
    }
    function whisper(string) {
        return string.toLowerCase();
        }
        function logShout (hello) {
            console.log(hello.toUpperCase( ));
        }
        function logWhisper (HELLO) {
            console.log(HELLO.toLowerCase( ));
        }
        function sayHiToHeadphonedRoommate (aWord) {
            var cantUnswer = "I can't hear you!";
            var yesUnswer = "YES INDEED!";
            var lovUnswer = "I would love to!";
            if (aWord.toLowerCase(aWord) === aWord) {
                  return cantUnswer;
        
        }
        else if (aWord.toUpperCase(aWord) === aWord) {
            return yesUnswer;
          }
          else if ("Let's have dinner together!" === aWord) {
            return lovUnswer;
        }
        }
       
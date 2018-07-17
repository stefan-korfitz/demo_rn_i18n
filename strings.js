/**
 * https://www.npmjs.com/package/react-native-localization
 * 
 * OBS! Trin 3 i android opsætningen manglede, så der var jeg nød til
 *      manuelt at tilføje dependecy til android/app/build.gradle.
 */
import LocalizedStrings from 'react-native-localization';

let Strings = new LocalizedStrings({

  //#region language : ENGLISH
  "en":{

    // App.js -> Greeter
    "txt_hello_world": "Hello"
    
  },
  //#endregion language : ENGLISH

  //#region language : DANISH
  "da":{
    
    // App.js -> Greeter
    "txt_hello_world": "Mojn"
    
  }
  //#endregion language : DANISH
});

module.exports = Strings;
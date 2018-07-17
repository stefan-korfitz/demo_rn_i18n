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

    // signin -> NUMBER
    "inp_phone_number": "Phone number",
    "btn_goto_sms":     "Forward",
    "txt_need_help":    "Do you need help to log in?",

    // main -> HEADER -> OPENING
    "txt_head_opening_info": "Opening hours are disabled.",
    "txt_head_opening_tip": "Configure in the Admin Area.",
  },
  //#endregion language : ENGLISH

  //#region language : DANISH
  "da":{
    
    // signin -> NUMBER
    "inp_phone_number": "+45 Hovednummer",
    "btn_goto_sms":     "Videre",
    "txt_need_help":    "Har du brug for hjælp til at logge ind?",

    // main -> HEADER -> OPENING
    "txt_head_opening_info": "Åbningstider er deaktiveret.",
    "txt_head_opening_tip": "Opsæt inde i Admin menuen.",
  }
  //#endregion language : DANISH
});

module.exports = Strings;
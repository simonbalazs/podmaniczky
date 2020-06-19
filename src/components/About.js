import React from 'react';
import ReactMarkdown from "react-markdown";
import '../style.css';


const md = `
# podmaniczky.live

A Podmaniczky Frigyes tér hosszú múltra, és rengeteg változásra tekint vissza. Ugyan a tér jelenlegi állapota ezeket nem tükrözi, de az 1940-es évekig a tér nem is létezett. A terület helyén egy épülettömb állt, mely a 20. század elején az Angol-Magyar Bank tulajdonában állt, a banki irodák mellett pedig megannyi üzletnek és lakásnak is otthont adott. A podmaniczky.live ezt az állapotot szeretné újra megmutatni, kiterjesztett valóság (AR) segítségével — az alkalmazás mind térben mind időben kiterjeszti a Podmaniczky Frigyes tér mai állapotát. 

A területen eredetileg álló épületek a 19. században épültek, majd a 2. világháborúban bombatalálatokat kaptak és megsemmisültek. Az épülettömb 1940-es utcaképe az 20. század elejére készült el, mikor az egész tömb az Angol-Magyar Bank tulajdonába került. A bombapusztítást követően a területet parkosították, majd csak az 1980-as években, az M3-as metró építésekor készült el az a tér, amely egészen a 2019-es átépítésig állt. A 2019-es felújítás a tér mai állapotát eredményezte, mely többek közt új zöldterületek és az ülőzónák kialakítását takarta.

# Források
- [index.hu - Kántor Viola] (https://index.hu/kultur/epiteszet/2019/10/25/podmaniczky_ter_metroallomas_zoldfelulet_tajepiteszet_lipotvaros_csomopont/)
- [24.hu - Vincze Miklós] (https://24.hu/kultura/2019/03/30/arany-janos-utca-bajcsy-zsilinszky-ut-ismeretlen-budapest/)
`

const About = (props) => (
    <div id="about">
        <button class="x" onClick={props.toggleInfo}>
            x
        </button>
        <ReactMarkdown
            source={md}
            />

    </div>

)

export default About;
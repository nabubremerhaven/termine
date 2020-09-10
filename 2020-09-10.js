ev0000 = ["ev0000", "<Titel>", "<Tag, Datum>",
          "<Beschreibung>",
          "<Person>","<Telefon>","<Uhrzeit>","<Ort>","<Untertitel Foto>","<Foto-URL>"]


ev0901 = ["ev0901","Aktiventreff Bremerhaven-Wesermünde","Montag, 07.09.",
          "Infos und Planung der Aktivitäten im NABU Bremerhaven-Wesermünde",
          "","","18:30","Schillerstraße 35, Bremerhaven","",""]

ev0902 = ["ev0902", "Herbstwanderung","Sonntag, 13.09.",
          "Herbstwanderung bei Düring.",
          "Uwe Frelich","","10:30","Ortsmitte Düring (Feuerwehr)","",""]

ev0903 = ["ev0903", "Coastal Celanup Day","Samstag, 19.09.",
          "Der NABU räumt auf am Internationalen Küstenputztag. Bitte Arbeitshandschuhe mitbringen!",
          "","","14:00","Parkplatz am Deich bei Schloss Morgenstern, Bremerhaven-Weddewarden","",""]
          
ev0904 = ["ev0904","Naturtreff Bremerhaven-Wesermünde","Montag, 21.09.",
          "Treffen der Naturinteressierten im NABU Bremerhaven-Wesermünde",
          "","","18:30","Schillerstraße 35, Bremerhaven","",""]

ev1001 = ["ev1001","Aktiventreff Bremerhaven-Wesermünde","Montag, 05.10.",
          "Infos und Planung der Aktivitäten im NABU Bremerhaven-Wesermünde",
          "","","18:30","Schillerstraße 35, Bremerhaven","",""]
          
ev1002 = ["ev1002","Naturkundlicher Spaziergang","Sonntag, 11.10.",
          "Naturkundlicher Spaziergang bei Wellen.",
          "Achim Mülter","","10:30","Gasthof Suhr, Wellen","",""]

ev1003 = ["ev1003","Naturtreff Bremerhaven-Wesermünde","Montag, 19.10.",
          "Treffen der Naturinteressierten im NABU Bremerhaven-Wesermünde",
          "","","18:30","Schillerstraße 35, Bremerhaven","",""]

ev1004 = ["ev1004","Mitgliederversammlung des NABU Bremerhaven-Wesermünde","Montag, 26.10.",
          "Tagesordnung:<br/>
          1. Begrüßung, Verlesung u. Genehmigung des Protokolls der Mitgliederversammlung vom 19.03.2019.<br/>
          2. Jahresbericht 2019.<br/>
          3. Kassenbericht und Bericht der Kassenprüfer<.<br/>
          4. Entlastung des Vorstandes.<br/>
          5. Vorstandswahlen: Neuwahl von 1. Vorsitzende*r, Schatzmeister*in, Schriftführer*in, Kassenprüfer*in.<br/>
          6. Wahl der 5 Delegierten und 2 Ersatzdeligierten für die Landesvertreterversammlung des NABU-Landesverbandes Bremen e.V.<br/>
          7. Verschiedenes.<br>
          Anträge zur Tagesordnung können von Mitgliedern bis spätestens eine Woche vor der MGV schriftlich beim Vorstand eingereicht werden.",
          "","","19:00","Dienstleistungszentrum Grünhöfe, Auf der Bult 5, Bremerhaven","",""]
          
ev1101 = ["ev1101","Bestellschluss Wildsträucher","Sonntag, 01.11.",
          "Bis heute nehmen wir Bestellungen für die HerbstSammelbestellung an. Wählen Sie aus 50 verschiedenen heimischen Wildsträuchern! Bestellliste
unter www.NABU-Bremen.de. Ab 14.11. gibt es
die Pflanzen dann fertig gepackt im der NABU GS
Bremerhaven, Grashoffstr. 21a oder am Schullandheim Dreptefarm, Wulsbüttel.",
          "","","","","",""]         
          
ev1102 = ["ev1102","Aktiventreff Bremerhaven-Wesermünde","Montag, 02.11.",
          "Infos und Planung der Aktivitäten im NABU Bremerhaven-Wesermünde",
          "","","18:30","Schillerstraße 35, Bremerhaven","",""]          

ev1103 = ["ev1103", "Naturkundliche Wanderung","Sonntag, 08.11.",
          "Naturkundliche Wanderung in Frelsdorfermühlen.",
          "Uwe Frelich","","13:30","Café vpn der Ohe, Frelsdorfermühlen","",""]

ev1104 = ["ev1104", "Wildsträucherabgabe","Samstag, 14.11.",
          "Ab heute können die vorbestellten Sträucher abgeholt werden.",
          "","","10:00 bis 12:00","","",""]
          
ev1105 = ["ev1105","Naturtreff Bremerhaven-Wesermünde","Montag, 16.11.",
          "Treffen der Naturinteressierten im NABU Bremerhaven-Wesermünde",
          "","","18:30","Schillerstraße 35, Bremerhaven","",""]

ev1106 = ["ev1106","NABU aktiv in Bramel","Sonntag, 22.11.",
          "Pflege des NABU-Grundstücks.",
          "Uwe Frelich","","10:00","","",""]

events = [ev0901, ev0902, ev0903, ev0904, ev1001, ev1002, ev1003, ev1004, ev1101, ev1102, ev1103, ev1104, ev1105, ev1106]

for (let i of events) {
    for (j = 0, len = i.length; j < len; j++) {
        if (j < len - 1) {document.getElementById(i[0]).getElementsByTagName("p")[j].innerHTML=i[j]}
        else {document.getElementById(i[0]).getElementsByTagName("img")[0].src=i[j]}}}

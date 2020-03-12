ev0301 = ["ev0301", "Aktiventreff Bremerhaven-Wesermünde", "Montag, 02.03.",
         "Infos und Planung der Aktivitäten im NABU Bremerhaven-Wesermünde.", "", "", "18:30", ""]

ev0302 = ["ev0302", "Bederkesaer See", "Sonntag, 08.03.", "Spaziergang um den Bederkesaer See", "Heike Wierhake-Kattner",
         "", "13:30 (Geschäftsstelle), 14:00 (Bederkesa)", "Parkplatz an der Burg Bederkesa, Bederkesa"]

ev0303 = ["ev0303", "Jahreshauptversammlung NABU Bremerhaven-Wesermünde", "Montag, 16.03.",
         "Jahreshauptversammlung mit anschließendem Vortrag ''Gönn dir Garten''.", "Heike Wierhake-Kattner", "", "19:00",
         "Kogge, Goethestraße 23, Bremerhaven"]

ev0401 = ["ev0401", "Aktiventreff Bremerhaven-Wesermünde", "Montag, 06.04.",
         "Infos und Planung der Aktivitäten im NABU Bremerhaven-Wesermünde",
         "", "", "18:30", ""]

ev0402 = ["ev0402", "Eulen-AG", "Dienstag, 14.04.",
         "Informationsaustausch der Eulenbetreuer und Eulenfreunde im Landkreis Cuxhaven",
         "Eulen-AG", "", "19:00", "NABU-Umweltzentrum, Bahnhofstraße 20a, 27472 Cuxhaven"]

ev0403 = ["ev0403", "Naturtreff Bremerhaven-Wesermünde", "Montag, 20.04.",
         "Treffen der Naturinteressierten im NABU Bremerhaven-Wesermünde",
         "", "", "18:30", ""]  
         
ev0404 = ["ev0404", "Pflanzaktion zum Tag des Baumes", "Freitag, 24.04.",
         "Der NABU spendet Bremerhaven eine Robinie, Baum des Jahres 2020. Wer beim Pflanzen mithelfen möchte, melde sich in der <a href='https://www.nabu-bremerhaven.de/wir-über-uns/geschäftsstelle/'>Geschäftsstelle</a> oder unter Tel. 0471-200470.",
         "", "", "", "Bremerhaven"]
         
ev0501 = ["ev0501", "Speckenbütteler Park", "Freitag, 01.05.",
         "Vogelkundlicher Spaziergang",
         "Vogel-AG", "", "08:30", "Parkplatz Bockwindmühle, Speckenbütteler Park, Bremerhaven"]                

ev0502 = ["ev0502", "Dorumer Moor", "Samstag, 02.05.",
         "Naturkundlicher Spaziergang. Anschließend Gelegenheit zum gemeinsamen Kaffeetrinken",
         "Achim Mülter", "", "13:00 (Geschäftsstelle) bzw. 13:30 (Pipinsburg)", "Parkplatz Pipinsburg"]
         
ev0503 = ["ev0503", "Aktiventreff Bremerhaven-Wesermünde", "Montag, 04.05.",
         "Infos und Planung der Aktivitäten im NABU Bremerhaven-Wesermünde",
         "", "", "18:30", ""]
         
ev0504 = ["ev0504", "Stunde der Gartenvögel", "Freitag, 08.05. bis Sonntag, 10.05.",
         "Die große Zählaktion in Garten und Park. Beobachten - melden - gewinnen!", "",
         "<a href='https://www.stundedergartenvoegel.de/'>www.stundedergartenvoegel.de</a>", "1 Stunde", "bundesweit"]      

ev0505 = ["ev0505", "Naturtreff Bremerhaven-Wesermünde", "Montag, 18.05.",
         "Treffen der Naturinteressierten im NABU Bremerhaven-Wesermünde",
         "", "", "18:30", ""]
         
ev0601 = ["ev0601", "Aktiventreff Bremerhaven-Wesermünde", "Montag, 02.06.",
         "Infos und Planung der Aktivitäten im NABU Bremerhaven-Wesermünde",
         "", "", "18:30", ""]
        
ev0602 = ["ev0602", "Friedhof Wulsdorf", "Sonntag, 07.06.",
         "Naturkundliche Wanderung über den Wulsdorfer Friedhof",
         "Uwe Frelich", "", "10:00", ""]              

ev0603 = ["ev0603", "Infostand auf der Luneplate", "Sonntag, 14.06.",
         "anlässlich des Fahrradtages der BIS. Helfer melden sich bitte in der <a href='https://www.nabu-bremerhaven.de/wir-über-uns/geschäftsstelle/'>Geschäftsstelle</a><br/>oder unter Tel. 0471-200470.",
         "", "", "", "Luneplate, Bremerhaven"]

ev0604 = ["ev0604", "Naturtreff Bremerhaven-Wesermünde", "Montag, 15.06.",
         "Treffen der Naturinteressierten im NABU Bremerhaven-Wesermünde",
         "", "", "18:30", ""]

events = [ev0301, ev0302, ev0303, ev0401, ev0402, ev0403, ev0404, ev0501, ev0502, ev0503, ev0504, ev0505, ev0601, ev0602, ev0603, ev0604]

for (let i of events) {
    for (j = 0, len = i.length; j < len; j++) {document.getElementById(i[0]).getElementsByTagName("p")[j].innerHTML=i[j]}}

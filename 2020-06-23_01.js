ev0601 = ["ev0601", "Bederkesaer See", "Sonntag, 28.06.",
         "Naturkundlicher Spaziergang um den Bederkesaer See.", "A. Mülter", "Parkplatz an der Burg Bederkesa", "13:30", ""]

events = [ev0601]

for (let i of events) {
    for (j = 0, len = i.length; j < len; j++) {document.getElementById(i[0]).getElementsByTagName("p")[j].innerHTML=i[j]}}

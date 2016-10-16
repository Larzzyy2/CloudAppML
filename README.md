#Prezentation
==========
Educational collaboration tool for presentations
----------

>Product owner: 
>>Tom Peeters

>Developers:
>>Lars Suffys
>>Milan Willems

##Projectomschrijving
--------------------------


###Probleemstelling

Er is niet genoeg interactiviteit. Vragen tijdens de lessen worden mondeling gesteld en antwoorden worden mondeling gegeven. Niet alle antwoorden van de leerlingen komen aan bod en de antwoorden kunnen niet efficiënt worden opgeslagen. Als een leerkracht een vraag stelt en de eerste leerling antwoord, wordt het antwoord van de volgende leerling misschien beïnvloed door het antwoord van de eerste leerling. Als de leerkracht op het einde van een hoofdstuk een inzichtsvraag stelt antwoord de slimste leerling snel zonder dat andere leerlingen tijd hebben gehad om er zelf over na te denken
Ook is het niet mogelijk om van iedereen een antwoord te krijgen, dit zou veel te lang duren.
De leerkracht moet alles handmatig noteren, wat omslachtig is en voor fouten kan zorgen. Sommige leerlingen vinden lessen saai omdat ze alleen maar moeten luisteren. Meer interactiviteit en leuke digitale lessen brengen hier verandering in.
###Doel
De communicatie en samenwerking tussen leerkrachten en leerlingen in de klas verbeteren, de data dat de leerkracht binnen krijgt op een goede manier weergeven en ervoor zorgen dat al de antwoorden van al de leerlingen gehoord worden. Leukere lessen en interactiviteit in het klaslokaal brengen. Op het einde van een hoofdstuk of presentatie verschijnen er vragen in de presentatie, leerlingen kunnen ze dan op hun eigen laptop of smartphone beantwoorden, elk apart. Op deze manier worden leerlingen actiever bij de les betrokken en zijn ze minder afgeleid. Dit zorgt ervoor dat de andere leerlingen ook niet afgeleid raken.
De antwoorden van de leerlingen kunnen makkelijker verbeterd en geanalyseerd worden zodat de leerlingen persoonlijke feedback en hulp kunnen krijgen. De persoonlijke feedback zorgt ook voor een hoger slaagpercentage.


###Methodologie
We maken gebruik van Agile ontwikkelingsmethodologie.
Onze project management tool is ZenHub, een handige tool die geïntegreerd is in GitHub
Ook houden we elke week een stand-up meeting. Zo houden we iedereen up-to-date.
>Zenhub: https://github.com/Larzsify/CloudAppML#boards?repos=69095354


###Verwachte resultaten
De leerkracht ontvangt op een gestructureerde vlotte overzichtelijke manier de antwoorden van alle leerkrachten
Interactiviteit zorgt voor leukere lessen en houdt de leerlingen hun focus bij de les. Omdat de leerlingen minder snel afgeleid raken letten ze beter op. Dit komt de schoolresultaten en zo de slaagpercentages ten goede. De leerkracht ontvangt een antwoord van alle leerlingen



###Technologie
- Bootstrap voor UI
- NodeJS voor Backend
- Meteor
- MongoDB
- 3-way handshake

####Websockets API’s

>- Socket.io --> Node.js (cross-platform)
>- WebSocket-Node --> Node.js (WebSocket server API implementation) 
>- Total.js --> Node.js (Web application framework)
>- Faye --> Node.js (Websocket 2-way) (EventSource one-way) 


###Uitkomst voor de maatschappij


Onze applicatie zal vooral gebruikt worden in de educatieve sector. De leerkracht kan zo op een simpele manier een vraag stellen aan de leerlingen die deze dan op hun persoonlijke laptop of zelfs smartphone kunnen beantwoorden. De leerkracht krijgt dan al deze antwoorden rechtstreeks te zien op zijn scherm. 
Deze manier van werken is sneller, efficienter en milieuvriendelijker dan een test op papier of mondeling. Via de mondelinge weg kan de leerkracht moeilijk van elke leerling een antwoord krijgen en zo worden veel leerlingen niet gehoord. 
De applicatie kan ook op grote evenementen gebruikt worden om bijvoorbeeld een enquête in ‘real-time’ uit te voeren. 

###User stories / Actoren
>Actoren: leerkracht, leerling

| As a...  | I want to...                              | So that...                                            |
|----------|-------------------------------------------|-------------------------------------------------------|
| Pupil    | Register with Gmail                       | I am able to log in                                   |
| Pupil    | Login with Gmail                          | I can participate in presentations                    |
| Pupil    | Fill in access code                       | I can access presentation                             |
| Pupil    | Answer questions                          | The teacher can see my answers                        |
| Pupil    | See history of my answers                 | I can see my wrong answers and my correct ones        |
| Teacher  | Register with Gmail                       | To get started                                        |
| Teacher  | Login with Gmail                          | Access my presentations and manage them               |
| Teacher  | Create presentation                       | I can assign questions                                |
| Teacher  | Create question                           | Itt can be assigned to a presentation                 |
| Teacher  | Set the type of a question                | It can be set to multiple choice or open question     |
| Teacher  | See answers in a graph                    | I have a good overview of the answers                 |
| Teacher  | Be able to see the history of all answers | I can review them later on                            |
| Teacher  | Export data                               | I can use it in Excel/other programs                  |
| Teacher  | Show access code                          | Pupils can enter the code and access the presentation |


###Features
>- Add a presentation
>- Add questions
>- See results of a presentation
>- Export the results of a presentation
>- Answer a question
>- Login via GMail
>- Import powerpoint presentation and add questions at the end of a chapter
>- Timespan for answering questions

 -----------------------------------------------------------

// Mit array med objekter for alle mine cases, inddelt i topnav og undernav.
const projekter = [
    {
        projekt: 'Mallemukken',
        topNav: [
            {
                navn: 'Mallemukken - restaurant',
                tekst: `Jeg har fælles med andre multimediedesignerstuderende arbejdet med at udvikle et re-design for en restaurant med fokus på samvær og brugervenlighed.

                Formålet har været at fokusere på hvordan vi kan skabe overskuelighed gennem navigationen og understøtte brugernes mulige behov, med anvendelse af relevante teorier og metoder. `,
                img: './assets/img/mallemukken.webp',
                github: 'https://github.com/MortenSmith/MalleMukken2SemEksamen',
                website: ''
            },

            {
                navn: 'Analyse',
                under: [
                    {
                        navn: 'Desk research', tekst: `For at få en bedre forståelse af restaurantens potientielle kunder har vi anvendt desk research. I forbindelse med desk research har vi anvendt GAI som et understøttende værktøj til at identificere relevante temaer, teori og kilder om gæsters behov og motiver i relation til restaurantbesøg.
                        
                        På baggrund af desk researchen kan det konkluderes, at restaurantbesøg i høj grad er drevet af sociale og praktiske faktorer. Socialt samvær spiller en central rolle, da mange foretrækker at spise sammen med familie og venner. Især personer, der bor sammen med andre, herunder børnefamilier, som vægter selskabet højere end maden. Et restaurantbesøg skaber en vigtig ramme for fællesskabet. `,
                        img: './assets/img/mDeskResearch.webp'
                    },
                    {
                        navn: 'Segmentering', tekst: `Den objektive side kan målgruppen opdeles efter geografiske og demografiske forhold. Mallemukkens gæster består både af lokale, turister, samt forskellige aldersgrupper, herunder unge, voksne og børnefamilier.
                        
                        Den subjektive side viser analysen, at restaurantgæster i højere grad er motiveret af det sociale samvær, oplevelsen og stemningen. Faktorer som madens kvalitet, pris og beliggenhed spiller en central rolle i valget af restaurant.
                        
                        Det sociale samvær er central i ude spisning specielt hos børnefamilier, de prioriterer fællesskabet fremfor maden. Samlet set viser segmenteringen, at målgruppen kan have forskellige karakteristika, men fælles for dem er oplevelsen og nyde stemningen. Dette danner et grundlag for arbejdet i de designmæssige valg i redesign-projektet.`, img: './assets/img/mSegmentering.webp'
                    },
                    {
                        navn: 'Interviewguide', tekst: `Vores formål var at indsamle informationer om, hvad der motiverer folk til at tage på restaurant, samt hvilke behov og hvad de kigger efter, når de skal vælge restauranten.
                        
                        En hypotese, som: folk vælger restauranter ud fra flere kriterier, som pris, omgivelser, fællesskabet, maden og stemningen, samt forventningerne til oplevelsen er central for folk. 
                    
                        Fokus på undersøgelsesspørgsmål, som er, ”hvilket behov og motivationer ligger bag, at folk vælger at tage på restaurant? Og ” hvilke faktorer har størst betydning for folks valg af restaurant, hvordan prioriteres de disse faktorer?”.`, img: './assets/img/mInterviewguide.webp'
                    },
                    {
                        navn: 'Tematiskanalyse', tekst: `
                        Gennem den tematisk analyse identificere vi fællestemaer og fællesmønstre på resultaterne fra interviewet. Vi har prioriteret følgende temaer, socialt samvær, forventninger, oplevelse og stemning, og frustrationer.
                        
                        I den teatiskeanalyse er det gentagende tema socialt aspekt blevet beskrevet i et interview, med ord som hygge og stemning sammen med andre.
                        
                        Efterfulgt af temaet forventninger at informationerne online også passer med det i virkeligheden, menu, billede og stemning matcher, det man oplever, når man besøger hjemmesiden.
                        
                        Temaet oplevelse og stemning er et gentagende tema blandt interviewene. Flere gangen bliver der sagt stemning, hygge og oplevelsen, som skaber lysten til at tage på en restaurant. Temaet frustration/rodet hjemmeside var nævnt med f.eks. dårlige anmeldelser, manglende information online, hjemmesider uden menukort, ingen åbningstider eller gammelt design.
                        
                        På baggrund af interviewundersøgelsen er der opnået indsigt i brugernes behov, motivationer og adfærd i forbindelse med restaurantbesøg. Hvordan kan vi frembringe temaerne i vores designbeslutninger? Den tematiske analyse har identificeret centrale temaer som socialt samvær, oplevelse og stemning, forventninger samt frustrationer, hvilket tydeliggør, hvad der er vigtigt for brugerne.`
                    },
                    {
                        navn: 'Empathy maps', tekst: `Pains og gains ud fra vores empathy maps, f.eks. at brugerne generelt vægter en nem adgang til information højt, især i forhold til menukort, bookingmuligheder og arrangementer. Flere beskriver et behov for at kunne danne sig et hurtigt overblik over restaurantens udvalg, og andre praktiske informationer.
                    
                    Overskuelig navigation og tydelig strukturering af indholdet har stor betydning for brugeroplevelsen og brugerens opfattelse af restauranten, samt restaurantens troværdig. Derudover viser empathy mapsene, at brugerne ønsker en hurtig og intuitiv adgang til centrale funktioner, såsom online booking.
                    
                    Ud fra empathy maps analysen, så fremhæves det at flere interviewpersoner prioriterer stemningen og hyggen ved at tage på restaurant. De forbandt den gode oplevelse med atmosfæren og udseendet for restauranten, som samlet skulle give den gode oplevelse, det tydeliggør brugernes behov for at restauranten ikke kun skal have adgang til hurtige centrale funktioner som menuen, men at restauranten kan kommunikere deres egen stemning og identitet visuelt.
                    
                    Det understøtter vigtigheden i vores anvendelse af billeder og æstetik med visuelle elementer. Det skal gerne give brugeren en forventning om oplevelsen på hjemmesiden inden de besøger restauranten. 
                    
                    På tværs af empathy mapsene vises det, at vi kan skabe bedre forståelse for brugerens perspektiver. Grundet vores indsigter i hvad brugeren føler, tænker, gør og siger. Vi har fundet frem til de centrale pains og gains for brugerne, som at opleve stemningen, intuitive funktioner, nem adgang til information og at kunne skabe overblik over diverse informationer.`, img: './assets/img/mEmpathymaps.webp'
                    },

                    {
                        navn: 'Card sorting', tekst: `Vi konkludere ud fra vores data, at brugerne placerer indhold under arrangementer, hvilket skyldes det høje resultat i kategorien ”arrangementer”. Dette tyder på, at brugerne forventer at finde events under ”Arrangementer” og ikke under ”Kalender”.
                    
                        Den nuværende struktur stemmer derfor ikke overens med brugerens mentale model, dvs. brugeren ikke kan finde det rigtige indhold, i den nuværende struktur, Relateret til Dan Browns princip multiple classification. Vi har observeret, at alle menu-relateret elementer er placeret under ”menu”. 
                        
                        Dette viser, at brugerne har en klar forståelse af, mad og priser bør samles under en kategori, hvilket understøtter en simpel og intuitiv struktur. Samlet set viser card sorting-testen, at der er behov for at revidere den eksisterende informationsarkitektur, så den i højere grad afspejler brugernes mentale modeller. En sådan tilpasning vil kunne forbedre navigationen og gøre det lettere for brugerne at finde relevant information på hjemmesiden.`, img: './assets/img/mCardSorting.webp'
                    },

                ]
            },

            {
                navn: 'Problemløsning',
                under: [
                    {
                        navn: 'Brain dump', tekst: `Det fremvises i vores brain dump nogle af vores ideer i forhold til Mallemukken. F.eks. at brugerne i højere grad kan finde information om allergier eller drikkevarer.Det kom på baggrund af vores interviewpersoner, med deres gentagende svar, at menuen er det første de kigger på, når de skal vælge en restaurant.
                    
                        Behovet for at se et menukort inden man vælger en restaurant antyder, at et menukort kan have flere smertepunkter for brugerne. Det skaber muligheden for at tilpasse os, flere af brugeres behov, så de vælger Mallemukken frem for en anden restaurant.

                        En anden tanke var inddragelsen af Mallemukkens historie. Historien handler ikke kun om ejeren eller datoer, men hvilken oplevelse brugeren får gennem Mallemukkens historie. Restauranten har en helt unik udseende, som kan fremhæve en stemning og hyggelig atmosfære, som vores interviewpersoner søger.`, img: './assets/img/mBraindump.webp'
                    },
                    { navn: 'Affinity diagram', tekst: `På baggrund af braindumpet organiseres ideerne i et affinity diagram. Formålet med det er at identificere sammenhænge mellem ideerne, og dermed skabe en mere struktureret organisering af indholdet. Affinity diagrammet viser gennemgående kategorier som menu, arrangementer/begivenheder, praktiske informationer, historie, stemning og atmosfære m.m. Affinity diagrammet bidrager til fundamentet af vores informationsarkitektur.`, img: './assets/img/mAffinity.webp' },
                    {
                        navn: 'Indholdsmodel', tekst: `Vi har valgt under menuen at udvælge ret navn, beskrivelse, pris og billede, som core content.Det gør vi for at vise det mest værdifulde indhold for brugeren,hvilket kan skabe bedre forståelse for hvad siden omhandler. Da vi kommunikerer den vigtigste information, så vi kan understøtte os brugerens formål. 
                        
                        Vi anvender metadata med f.eks. tidspunkt og type af ret, hvilket hjælper os med at organisere indholdet for menuen. Det skaber et overblik for brugerne at kunne se hvad menuen indeholder, og hvornår det tilbydes. Kategorisering gennem type af ret, som “forret, hovedret, dessert” skaber en logisk opdeling af menuen for burgerne, uden at de skal læse beskrivelser af de enkelte retter.
                        
                        Derudover er tidspunkt som metadata relevant, fordi den angiver væsentligheden for menuen. Det forenkler brugerens beslutningsfase, da det fremviser hvilke retter, er tilgængelig i forhold til tiden. Overordnet set er anvendelse af metadata gennem vores indholdsmodel med til at skabe et ekstra lag af overblik, som understøtter vores informationsarkitektur. Vores videre arbejde på vores indholds model skaber muligheden, for at strukturere et card eller menuen. Dermed kan vi identificere og præsentere relevante indhold, som forbedrer overblikket for brugeren.`, img: './assets/img/mIndholdsmodel.webp'
                    },

                    {
                        navn: 'Content sitemap', tekst: `Vi har truffet nogle forskellige valg i forhold til vores card sorting. F.eks. har vi truffet et valg om at ændre strukturen for alt indholdet gældende arrangementer. Vores fokus er at skabe en side med kun arrangementer, hvor navigationskategorien “arrangementer " tilegner sig indholdet. 
                    
                        Ud fra Mallemukkens nuværende hjemmeside, så omhandler siden “arrangementer og mad ud af huset” ikke om arrangementer, men kun om “mad ud af huset”. Derimod kan Arrangementer findes ind under “kalender”. Det kan skabe en ustruktureret gennemgang for brugeren, hvilket formindsker muligheden for at finde væsentligt indhold. 

                        Derfor har vi valgt at opdele “arrangementer” og “mad ud af huset” for at få en klar skildring og skabe bedre forståelse for ordvalget arrangementer. Ordvalget “arrangementer” skaber en konflikt, fordi Mallemukken også tilbyder muligheden for afholdelse af selskaber. Vi vil i stedet for “arrangementer & mad ud af huset” skabe to sektioner på siden, hvor navigationskategorien kun er “Mad ud af huset”, hvor det tydeligere bliver repræsenteret som sektionerne mad ud af huset og selskaber. 

                        Det skal gerne bidrage til en forbedret brugeroplevelse, da den ændrede struktur af indholdet skulle være lettere for brugerne at navigere i.
                        
                        `, img: './assets/img/mContentsitemap.webp'
                    },
                    {
                        navn: 'Wayfinding', tekst: `Efter udarbejdelsen af content sitemap fokuseres der på wayfinding, som handler om at hjælpe brugeren med at orientere sig og navigere på hjemmesiden.
                        
                        Vi anvender en global navigation med de vigtigste kategorier, hvor logoet linker til forsiden. På menukortsiden bruges tabs til at opdele indholdet i kategorier. Derudover anvendes CTA’er, kontekstuel navigation og accordions til at guide brugeren og skabe overblik.
                        
                        Til sidst benyttes active class til at markere den aktuelle side og sticky navigation, så navigationsbaren forbliver synlig under scrolling. Dette gør navigationen mere overskuelig og brugervenlig.`, img: './assets/img/mWayfinding.webp'
                    },
                    {
                        navn: 'Informationsdesign', tekst: `Formålet med informationsdesign er at gøre det nemt for brugeren at orientere sig og finde relevant information. Vi har særligt fokus på meta- og coredata på sider som menu og arrangementer.
                        
                        Menusiden er opbygget med en tydelig struktur bestående af navigation, overskrift og introduktionstekst, som skaber kontekst og understøtter SEO. Tabs opdeler indholdet i kategorier som frokost, aftenmenu og drikkevarer, hvilket gør det lettere at navigere.
                        
                        Under menupunkterne anvendes coredata som retternes titel, beskrivelse og pris samt metadata som tidspunkt, allergener og præferencer. Dette skaber et tydeligt informationshierarki, giver bedre overblik og reducerer brugerens kognitive belastning.`, img: './assets/img/mInformationsdesign.webp'
                    },

                ]
            },

            {
                navn: 'Prototyping',
                under: [

                    {
                        navn: 'Skitser', tekst: `Vi tager udgangspunkt i prototyping, hvor vi gennem flere iterationer udvikler og forbedrer vores skitser. Skitserne fungerer som grundlag for hjemmesidens struktur og funktioner, som vi videreudvikler i wireframes.
                        
                        I vores skitser arbejder vi med tabs, der opdeler indholdet og gør det lettere for brugeren at navigere uden at blive overvældet af information. Derudover har vi tilføjet introduktionssektioner med billede og tekst, som skal skabe appetit og interesse for maden - noget, der mangler på Mallemukkens nuværende hjemmeside.`, img: './assets/img/mSkitser.webp'
                    },
                    {
                        navn: 'Wireframes', tekst: `Ud fra skitserne udarbejdes low-fi wireframes, som visualiserer hjemmesidens struktur, placering og størrelse af indholdselementer uden fokus på farver og detaljer.
                        
                        I vores wireframes placeres navigationen øverst, mens indholdet opdeles i sektioner og cards for at skabe overblik. Derudover anvendes tydelige CTA-knapper til at guide brugeren videre. Vi inddrager også gestaltprincipper for at skabe en overskuelig og intuitiv struktur, hvor brugeren lettere kan afkode indholdet.`, img: './assets/img/mWireframes.webp'
                    },
                    {
                        navn: 'Mockups', tekst: `Mockuppen viser vores landingpage i desktop-versionen, hvor vi tager udgangspunkt i udfordringerne fra interviewundersøgelsen og empathy map. Vi anvender visuelt hierarki, gestaltprincipper og Dan Browns 8 principles of Information Architecture for at skabe en overskuelig brugeroplevelse.
                        
                        Landingpagen starter med et stemningsskabende hero-billede, der giver brugeren et indtryk af restaurantens atmosfære. Derudover fremhæves Book bord i navigationen med en mørkere kontrastfarve, så funktionen er let at finde.
                        
                        Indholdet organiseres i cards ved hjælp af gestaltprincipperne proximity og similarity, som skaber overblik. Dan Browns principper anvendes også gennem hero-billedet, begrænsede valgmuligheder (Choices) og nyhedscards, der fremhæver den vigtigste information først (Disclosure).`, img: './assets/img/mMockups.webp'
                    },
                ]
            },

            {
                navn: 'Test',
                under: [
                    {
                        navn: '5-second test', tekst: ``, img: './assets/img/.webp'
                    },
                ]
            }


        ]
    },

    {
        projekt: 'todolist',
        topNav: [
            {
                navn: 'To do List',
                tekst: 'I dette projekt har jeg arbejdet med en todo list opgave fra Frontend Mentor. Jeg havde fokus på at udfordre mine kompetencer i projektet med anvendelse af forskellige Frontend teknologier. Jeg valgt udover anvendelse af JavaScript, CSS og Html, at gøre brug af frameworket Vue.',
                img: './assets/img/todo.webp',
                github: '',
            },

            {
                navn: 'Udvikling',
                under: [
                    {
                        navn: 'Vue', tekst: `Jeg har opbygget brugergrænsefladen med frameworket Vue for at skabe skrive kortere kode og anvende komponenter i mit arbejde. Jeg har lavet en todolist component for at skabe overblik og gør det lettere at indkasple logik/script.
                    
                        På billedet ses et udsnit af indholdet af min component, i min template anvender jeg en såkaldt v-for directive, som looper i gennem min liste af todo. Det binder data til det man kan se på skærmen. Vue-directives er særlige HTML-attributter med præfikset v-, som fortæller Vue, at der skal udføres en bestemt handling på et DOM-element.
                        
                        v-for="todo in toDoList": Loop igennem hver opgave i listen. :key="todo.objectId": key attributen er med til at identificere hvert opgave element i min liste (array) lavet med v-for. :class="{ completed: todo.completed }": conditional classes er anvendet for at tilføje en class når en opagve er færdiggjort. 
                        Hvis todo.completed er true, så tilføjese class "completed", hvis den er false undlades class completed. @click="removeToDo(todo.objectId)": Når man klikker på li, så skal funktionen removetodo fjerne opgaven. 

                        Dernæst i template er der anvendt vue interpolation {{}}, for at få title vist i min html og få min counter funktion vist frem. 
                    
                        `, img: './assets/img/vue.webp'
                    },
                    {
                        navn: 'Javascript', tekst: ` Jeg har anvendt javascript til at lave en todolist state med et array som indebærer listen af todo. Dernæst lavet forskellige funktioner for at f.eks. at fjerne en todo. 

                        export const removeToDo = (objectId) => {
                            toDoList.value = toDoList.value.filter((todo) => todo.objectId !== objectId)}

                        Export er anvendt for at kunne gøre burg af mine funktioner på f.eks. min komponent. Jeg har lavet en state removeToDo, tilegent min obejctid, hvilket vil sige når jeg laver arrow funktionen, så skal den eksisterende liste være lig med at du tager den liste og filtre igennem hvert todo. Så er reglen at det skal kontrolleres om hvert todo er forskelligt fra sit objectid. Hvis det er forskelligt bliver opgaven, men hvis det er ens fjernes opgaven fra listen. 

                   export const toggleToDo = (objectId) => { toDoList.value.forEach(todo => { if (todo.objectId === objectId) {todo.completed = !todo.completed;}}
                   );};

                       Lavet en state toggleToDO, tilegent min obejctid, hvilket vil sige når jeg laver arrowfunktion, så skal den eksisterende liste være lig med, at du tager den liste og gennemgår alle opagver ved hjælp af foreach. Dette sker kun, hvis object id i listen matcher. Hvis det matcher, så skal completed vendes fra true/false eller false/true. Dermed gennemgåes opgaven og ændres opagven ud fra matchet med id'et. 
                    
                        `, img: './assets/img/javascript.webp'
                    },


                ]
            },

        ]
    },
    {
        projekt: 'Det lille køkken',
        topNav: [
            {
                navn: 'Headless cms - Det lille køkken',
                tekst: `I dette projekt har vi fokuseret på at lavet et opskriftwebsite, som repræsenterer opskrifter struktureret og brugervenligt, dermed bedre understøtter familiernes behov for overblik og enkel planlægning i en travl hverdag.`,
                img: './assets/img/recipe.webp',
                github: 'https://github.com/Freja137/headless_cms',
                webiste: 'https://mmd.ucn.dk/class/MMD-CSD-S25/10700526/headless_cms/index.html'
            },

            {
                navn: 'Analyse',
                under: [
                    { navn: 'Desk research', tekst: `Vores research viser, at familier med skolebørn på tværs af familietyper har flere fælles behov og udfordringer. Vi har særligt fået indsigt i, at tidspres præger familiens madvaner, og at nemme, hurtige og børnevenlige måltider ofte prioriteres. Samtidig er sundhed, økonomi og fællesskabet omkring måltidet vigtige faktorer. Researchen giver os dermed en bedre forståelse af målgruppens madvaner og danner grundlag for en mere nuanceret segmentering.`, img: './assets/img/' },
                    {
                        navn: 'Segmentering', tekst: `Segmenteringen viser, at målgruppen primært består af danske familier med skolebørn og forældre i alderen 29-45 år. Fælles for målgruppen er en travl hverdag, hvor de søger nemme og effektive løsninger til madlavningen uden at gå på kompromis med sundhed og kvalitet. 
                        
                        Derudover kan de motiveres af ønsket om at skabe mere tid til familien, prioritere socialt samvær og reducere hverdagens stress. Målgruppen har derfor både praktiske og følelsesmæssige behov, som har betydning for deres valg og adfærd.

                        Segmenteringen giver et indblik i, hvordan brugerne kan forholde sig til madlavning, hvilket kan underbygges af kvalitative interview for at skabe et nuanceret billede på hvordan familier forholder sig til madlavning. 
                        
                        `, img: './assets/img/rSegmentering.webp'
                    },
                    {
                        navn: 'Interviewguide', tekst: `Vores formål var at indsamle information om hvilke behov og udfordringer familier med skolebørn oplever, når det kommer til madlavningen. 
                        
                        En hypotese, som: folk vælger restauranter ud fra flere kriterier, som pris, omgivelser, fællesskabet, maden og stemningen, samt forventningerne til oplevelsen er central for folk.
                        
                        En hypotese, som: folk vælger at tænke, at madlavning i en travl hverdag kan være tidskrævende og stressende. Derfor søger de nemme og hurtige opskrifter, som samtidig er sunde, børnevenlige og passer til familiens forskellige behov.
                    
                        Fokus på undersøgelsesspørgsmål, som er, ”Hvad kunne gøre madlavningen lettere for familier med skolebørn at planlægge og udføre madlavningen i en travl hverdag?. Og ” hvordan håndterer familier med skolebørn deres madlavning i hverdagen - herunder rutiner, beslutninger og udfordringer?`, img: './assets/img/rInterviewguide.webp'
                    },
                    {
                        navn: 'Tematisk analyse', tekst: `I analysen af de kvalitative interviews fremkommer to centrale fællestemaer: tid og planlægning. Interviewpersonerne beskriver de to temaer i samspil med hinanden, da tidsmangel har storbetydning for deres valg af måltider og ofte fører til hurtige og mindre gennemtænkte løsninger. Dette underbygger, at planlægningen fungerer som en strategi til at håndtere en travl hverdag. Det skaber spørgsmålet? Hvordan kan vi fremvise temaerne i vores designbeslutninger? Temaerne som tid og planlægning kan skabe frustrationer, hvordan kan vi forenkle brugernes tid, så de bedre kan planlægge. hvilket hvilket tydeliggør, hvad der er vigtigt for brugerne. `, img: './assets/img/'
                    },
                    { navn: 'Empathy map', tekst: `Mangler et empathy map`, img: './assets/img/' },


                ]
            },

            {
                navn: 'Problemløsning',
                under: [
                    {
                        navn: 'Brain dump', tekst: `Det fremvises i vores brain dump nogle af vores ideer i forhold til vores opskrift website. F.eks. at brugerne i højere grad kan finde forskellige kategorier i forhold madlavning, som tid, land eller helt generelt morgenmad, frokost, aftensmad og dessert.Det kom på baggrund af vores interviewpersoner, med deres gentagende svar om, deres manglende tid i hverdagen, hvor muligheden for lettere at kunne finde en ret på under 30 min kan gøre underværker.`, img: './assets/img/rBraindump.webp'
                    },
                    { navn: 'Affinity diagram', tekst: `På baggrund af braindumpet organiseres ideerne i et affinity diagram. Formålet med det er at identificere sammenhænge mellem ideerne, og dermed skabe en mere struktureret organisering af indholdet. Affinity diagrammet viser kategorier som en opskrift og opskriftsamling, det har fælles træk, men det har en adskilles i sig, som fremhæves ved ordet samling. Affinity diagrammet bidrager til fundamentet af vores informationsarkitektur`, img: './assets/img/rAffinity.webp' },
                    {
                        navn: 'Indholdsmodel', tekst: `Core content skaber en opskrift, det er en titel, ingredienser og billede, det som ikke kan undværes, for at det bliver til en opskrift. Dermed egenskaber som beskriver vores opskrift, ligesom måltidstype eller sæson. Vi har beskrevet ud fra en indholdsmodel, de metadata og core content, som er relevante for vores website ud fra en opskrift og opskriftsamling. Det viser hvordan vores core content og metadata er anvendt. Vi har metadata som måltidstype, tilberedningstid og allergener. 
                    
                        Vi bruger disse metadata for at filtre og kategorisere vores opskrifter og opskriftsamlinger. Dermed bliver der brugt klassificering på de forskellige metadata, hvilket gør at brugeren kan anvende forskellige filtre, så brugerens behov bliver tilpasset efter dette. Vi skaber nogle meta data med udgangspunkt fra vores interview, f.eks. tid som har været meget i fokus, derfor har vi prioriterede den som en af de mere vigtige. Så behovet for nemmere planlægning kan bliver opfyldt, hvilket tiden kan have en effekt på.`, img: './assets/img/rIndhold.webp'
                    },
                    {
                        navn: 'Content sitemap', tekst: `Content sitemapet præsenterer en overskuelig og struktureret opbygning af websitet, hvor forsiden fungerer som indgang til resten af indholdet. Brugeren mødes først af et billede og en titel, der introducerer websitet. Herefter præsenteres udvalgte opskrifter, som giver direkte adgang til de enkelte opskriftsider.
                        
                        På forsiden vises også opskrifter opdelt efter tidsforbrug samt en opskriftsamling, der samler udvalgte opskrifter. Derudover har websitet en samlet opskriftsoversigt, hvor brugeren kan udforske alle opskrifter.
                        
                        De enkelte opskriftsider giver brugeren adgang til opskriftens indhold og fremgangsmåde, mens opskriftsamlingen gør det muligt at finde inspiration blandt flere opskrifter samlet efter et fælles tema.
                        
                        Samlet set er strukturen opbygget med fokus på at gøre det nemt for brugeren at navigere mellem forsiden, opskrifterne og opskriftsamlingerne. Det skaber flere indgange til indholdet og gør det lettere at finde inspiration og vælge opskrifter, der passer til familiens behov og hverdag.`, img: './assets/img/.webp'
                    },
                    {
                        navn: 'Informationsorganisering', tekst: `Filtre bygger oven på taksonomien og gør det muligt for brugeren at kombinere forskellige valg på tværs af kategorier. Det skaber en mere fleksibel løsning, hvor brugeren kan finde opskrifter ud fra egne behov og præferencer, eksempelvis allergier, kostvaner, sværhedsgrad og tidsforbrug.
                        
                        En vigtig overvejelse har været, at kategorier og filtre skal være intuitive og lette at forstå. Derfor skal betegnelserne afspejle brugerens eget sprog og gøre navigationen overskuelig.
                        
                        Samlet set skal kategorier og filtre gøre det nemmere for brugeren at finde relevante opskrifter og mindske den kognitive belastning. Efter vores overvejelser har vi valgt kategorierne måltidstyper, sæson og tid samt filtrene allergier og præferencer.`, img: './assets/img/rOrganisering.webp'
                    },

                ]
            },

            {
                navn: 'Prototyping',
                under: [
                    {
                        navn: 'Skitser', tekst: `Vi tager udgangspunkt i prototyping, hvor vi gennem flere iterationer udvikler og forbedrer vores skitser. Skitserne fungerer som grundlag for hjemmesidens struktur og funktioner, som vi videreudvikler i wireframes.
                        
                        I vores skitser arbejdet vi med ideer i forhold til cards, filtre og opdeling, som skulle gøre det lettere for brugeren at navigere uden at blive overvældet af information. Derudover har vi tilføjet cards sektioner med billede og tekst, som skal skabe en genvej til opskrifter, og tilføje interesse for maden`, img: './assets/img/rSkitser.webp'
                    },
                    {
                        navn: 'Wireframes', tekst: `Ud fra skitserne udarbejdes low-fi wireframes, som visualiserer hjemmesidens struktur, placering og størrelse af indholdselementer uden fokus på farver og detaljer.
                        
                        I vores wireframes placeres navigationen øverst, med fokus på kategorisering, mens indhold opdeles i sektioner med "madcards" for at skabe overblik. Derudover anvendes tydelige CTA-knapper, meta data og core content til at guide brugeren videre og skabe forståelse for indholdet.`, img: './assets/img/rWireframes.webp'
                    },
                    {
                        navn: 'Mockups', tekst: `Mockuppen viser vores landingpage i desktop-versionen, hvor vi tager udgangspunkt i udfordringerne fra interviewundersøgelsen og empathy map. Vi anvender visuelt hierarki, gestaltprincipper og indholdsmodel for at skabe en overskuelig brugeroplevelse.
                        
                        Landingpagen starter med et stemningsskabende hero-billede, der giver brugeren et indtryk affamilie hygge, som skal blive associeret med maden. Derudover fremhæves forskellige sektioner med mad opskrifter for at brugerne kan vælge de kategorier, som tilpasser sig deres behov. Dette ses også i navigationen med kategori udvægelse.
                        
                        Indholdet organiseres i cards ved hjælp af gestaltprincipperne proximity og similarity, som skaber overblik. Deruover meta data med ikoner for at skabe bedre visuel forståelse af teksten.`, img: './assets/img/recipe.webp'
                    }
                ]
            }
        ]
    }
];


// Vis det første punkt i min top navigationen --> kaldet overblik 
let aktivTopNav = 0;
// og lad under navigation værende fraværende indtil andet gjort.?????
let aktivUnderNav = null;

// navigation til det rigtige projekt, laver en variabel for min url, så kaldt at kilde: https://developer.mozilla.org/en-US/docs/Web/API/Location/search, new URLSearchParams skal kunne finde frem til min søgestreng efter ? for min url. 
const urlParams = new URLSearchParams(window.location.search);
// For at forenkle denne process så er det projektnavnet som skal guide min url: så søgestrengen skal tage værdien i projekt i mit array og dermed finde hen til det rigtige projekt. 
const projektNavn = urlParams.get('projekt');

// Variablen aktivprojekt skal i mit array med findindex, Kilde: https://www.w3schools.com/jsref/jsref_findindex.asp: findindex er en javascript metode til at finde index position på mine projekter (løbe listen i gennem af projekter), og gå ind og tage fat i projekt med at tage forbehold for store bogstaver og laver det om til små, hvilket skal matche med projektnavn.  
let aktivprojekt = projekter.findIndex(
    projekt => projekt.projekt.toLowerCase() === projektNavn
);
// Hvis projektet ikke findes, så gå tilbage til første projekt i arrayet. 
if (aktivprojekt === -1) {
    aktivprojekt = 0;
}

// henter mine html elementer i case.html
const topNav = document.querySelector('.topNav');
const topUnderNav = document.querySelector('.underNav');
const content = document.querySelector('.content');


// Funktion for top navigation, for at få vist min top navigation.  
function visTopNav() {
    // Vis min topnav og får lavet indholdet med innerhtml i min topnav div, den skal gå ned i mine projekter med den første aktivprojekt, og tag fat ned i min topnav i arrayet og går igennem de eksisterende punkter i topnav med hjælp af map kaldet item og placeringen index. 
    //Laver string interpolation for min top nav, ved class=stop indsættes data in dynamsiek ved hjælp af ${}, med den gældende regl fra conditional ternary operator kilde: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator, hvilket er en anden metode for at skrive if/else men bruger så i stedet ?:. 
    // så hvis aktivtopnav det samme index på knappen, så giv den teksten fra valgt, hvis ikke lad det være tomt tekstreng. 
    // Det samme gælder for resten af mine conditonal operators bare med andre udfald, som værende false, eller hvis index er lig med nul altså den første i menupunket, skal den den komme ud med teksten for overblik, hvis nej så skal den hoppe videre til navn for projektet i stedet for.   

    topNav.innerHTML = projekter[aktivprojekt].topNav.map((item, index) => `

        <button 
            class="stop ${aktivTopNav === index ? 'valgt' : ''}"
            data-index="${index}"
            type="button"
            aria-current="${aktivTopNav === index ? 'step' : 'false'}"
        >
            <span class="prik"></span>
            <span class="stop-tekst">
                ${index === 0 ? 'Overblik' : item.navn}
            </span>
        </button>
    `).join('');

    // join for samle elementerne uden andre faktorer. 

    // henter alle elementer i min topnav med class stop fra innerhtml, så for hver knap, når man klikker på den skal aktivtopnav være lig med at omsætningen af værdien i number til tallet i knappens index. Dvs. at hvis jeg trykker på knappen kaldet overblik i mit array, så skal data-index være på den rigte værdig 0 og registere at vi er på den side, så undermenupunkterne nulstilles og indholdet til de forskellige sider opdateres rigtigt. 
    //Kilde: https://www.w3schools.com/jsref/jsref_number.asp number(value) omsætter en værdi til et nummer.


    topNav.querySelectorAll('.stop').forEach(button => {
        button.addEventListener('click', () => {
            aktivTopNav = Number(button.dataset.index);
            aktivUnderNav = null;

            visTopNav();
            visUnderNav();
            visIndhold();
        });
    });
}

// Funktion for min undernavigation, det er samme princip som min topnav, find frem til mine punkter i undernav. Dermed hvis der ikke findes en undermenu, så bliver alt indhold fjernet i undermenuen, og funktion skal ikke kører. 
//Laver string interpolation igen og skriver at knappen skal tilpasse sig til det rigtige index til det rigtige navn på projekt. 
// anvender igen join og number. 
//Undermenuerne skal vise det rigtige indhold til de menupunkter der passer til dem. 
function visUnderNav() {
    const valgt = projekter[aktivprojekt].topNav[aktivTopNav];

    if (!valgt.under) {
        topUnderNav.innerHTML = '';
        return;
    }

    topUnderNav.innerHTML = valgt.under.map((item, index) => `
        <button data-index="${index}">
            ${item.navn}
        </button>
    `).join('');

    topUnderNav.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', () => {
            aktivUnderNav = Number(button.dataset.index);
            visIndhold();
        });
    });
}

// 






// Funktion for indholdet.
function visIndhold() {
    //Laver en variabel med navnet (valgt) såkaldt at den skal ned i mine projekter med den første aktivprojekt, og tag fat ned i min topnav i arrayet, med også den første aktivtopnav. 
    const valgt = projekter[aktivprojekt].topNav[aktivTopNav];

    // Dernæst laver jeg en tom variabel, som gør at jeg kan gennem værdier i den uden at jeg skal til at lave flere varaibler. 
    let indholdData;

    //  Jeg kan her gøre brug af min valgt variabel, hvilket gøre brug af betingelsen, hvis det sted i arrayet ned ved undermenuen er skal være lig med værende fraværende indtil det første index vises, altså den første side i undernav når man trykker på topnav. 
    if (valgt.under) {
        if (aktivUnderNav === null) {
            aktivUnderNav = 0;
        }

        // Når valgt i under på første index findes, så skal under være i indholdData, men hvis det ikke findes så skal hele projekte være under. 
        indholdData = valgt.under[aktivUnderNav];
    } else {
        indholdData = valgt;
    }

    // laver string interpolation for mit indhold i hvad der skal indsættes dynamisk i min html, det er navnet på projektet, teksten til de forskellige menupunkter og billederne som tilpasser sig til de rigtige menupunkter. 
    // Jeg anvender trejdepartskode ved data-lightbox, hvilket gør at jeg kan forstørre billedere, når man klikker på selve billedet. Kilde: https://litelightbox.com/. 


    content.innerHTML = `
    <section>
    <article class="information">
        <h2>${indholdData.navn || valgt.navn}</h2>
        <p>${indholdData.tekst}</p>
     </article>     
    
     <article class="imgProjekt">
            ${indholdData.img ? `<img src="${indholdData.img}" data-lightbox="${indholdData.img}" alt="${indholdData.navn}">` : ''}
            
     </article>
     </section>
     <div class="btninfo">
     <a  href="${indholdData.github}" target="_blank"> Se projektet på GitHub </a>
     <a  href="${indholdData.webiste}" target="_blank"> Se website </a>
     </div>

     

    `;

}

//vis alle mine funktioner. 
visTopNav();
visUnderNav();
visIndhold();

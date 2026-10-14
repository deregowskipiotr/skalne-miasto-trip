import type { RecommendationSource } from '../types/trip';

export const recommendationSources: RecommendationSource[] = [
  {
    id: 'source-1',
    name: 'Recommendation Alpha: ChatGPT',
    badge: 'Opcja 1',
    vibe: 'Zbalansowana i malownicza',
    intensity: 'Umiarkowany',
    description: 'To nie będzie wycieczka polegająca na zrobieniu kilku zdjęć przy skałach i powrocie do hotelu. Zaplanowałbym ją tak, żebyście zobaczyli dwa różne oblicza skalnego labiryntu, weszli na mniej oczywisty punkt widokowy, poznali wyjątkowy zabytek po polskiej stronie i zjedli w kilku miejscach, które mają charakter.',
    principle: 'W połowie listopada planujemy pod pogodę i krótki dzień, a nie przeciwko nim. Adršpašské skály są w tym okresie czynne w godz. 8:00–16:30. Słońce zachodzi już około 16:15–16:20, dlatego najważniejsze piesze trasy zaplanowałem na początek dnia.',
    summaryReason: 'Bo łączy trzy różne elementy: niezwykłą architekturę Świdnicy, dwa całkiem odmienne skalne labirynty i miejsca, w których można spokojnie zjeść dobry posiłek. Najważniejsze atrakcje zobaczycie w świetle dziennym, noclegi pozostaną w jednej bazie, a dodatkowe przejazdy nie będą zjadać czasu.',
    finalRecommendation: 'Nie rezygnujcie z Křížovego vrchu przy dobrej pogodzie. To właśnie taki mniejszy, mniej oczywisty punkt — obok dwóch wielkich skalnych miast — sprawia, że ta wyprawa staje się czymś więcej niż standardowym weekendem w Czechach.',
    highlights: ['Kościół Pokoju w Świdnicy', 'Křížový vrch', 'Teplické skály'],
    days: [
    {
      dayNumber: 1,
      title: "Dzień pierwszy — piątek, 13 listopada",
      subtitle: "Warszawa → Świdnica → Teplice nad Metují",
      items: [
        {
          id: 'd1-1',
          time: '06:30–11:45',
          title: 'Wyjazd z Warszawy do Świdnicy',
          description: 'Zaplanujcie jedną krótką przerwę na kawę i rozprostowanie nóg. Godzina przyjazdu jest orientacyjna i zależy od ruchu.',
          location: 'Trasa E67 / Warszawa → Świdnica'
        },
        {
          id: 'd1-2',
          time: '11:45–12:45',
          title: 'Kościół Pokoju w Świdnicy',
          description: 'To najważniejszy przystanek tego dnia. Drewniana konstrukcja, monumentalne wnętrze i barokowy wystrój robią ogromne wrażenie. Na zwiedzanie warto przeznaczyć około 40 minut, a resztę czasu na spokojne obejrzenie otoczenia.',
          location: 'Kościół Pokoju w Świdnicy',
          tip: 'W listopadzie w piątki kościół można zwiedzać od 9:00 do 16:30.'
        },
        {
          id: 'd1-3',
          time: '13:00–14:00',
          title: 'Obiad w restauracji 7 Niebo',
          description: 'Wygodny wybór dosłownie przy Kościele Pokoju, bez dodatkowego przejazdu przez miasto.',
          location: '7 Niebo, Świdnica',
          tip: 'Ocena 4,5/5 w danych Google (ponad 900 opinii).'
        },
        {
          id: 'd1-4',
          time: '14:00–14:25',
          title: 'Krótki spacer po centrum Świdnicy',
          description: 'Przejdźcie przez Rynek i obejrzyjcie zabytkową zabudowę. Nie planowalbym rozbudowanego zwiedzania miasta — największa atrakcja dnia jest już za Wami.',
          location: 'Rynek w Świdnicy'
        },
        {
          id: 'd1-5',
          time: '14:25–16:00',
          title: 'Przejazd do Teplic nad Metují',
          description: 'Zakwaterowanie w Hotelu Orlík. Po drodze nie dodawajcie kolejnych atrakcji. Lepiej dojechać spokojnie i zostawić sobie chwilę na odpoczynek.',
          location: 'Hotel Orlík, Teplice nad Metují'
        },
        {
          id: 'd1-6',
          time: '18:30–20:00',
          title: 'Kolacja w restauracji Hotelu Orlík',
          description: 'Idealny początek pobytu: kuchnia czeska, regionalne produkty i wygoda bez konieczności kolejnego wyjazdu samochodem.',
          location: 'Restauracja Hotelu Orlík',
          tip: 'Restauracja czynna codziennie 12:00–22:00 (kuchnia pracuje do 21:00).'
        }
      ]
    },
    {
      dayNumber: 2,
      title: "Sobota — Główne Skalne Miasto",
      subtitle: "Teplice nad Metují → Adršpach → Křížový vrch",
      items: [
        {
          id: 'd2-1',
          time: '07:00–07:40',
          title: 'Śniadanie i przygotowanie',
          description: 'Załóżcie buty trekkingowe z dobrą podeszwą, warstwę przeciwdeszczową i zabierzcie coś ciepłego do plecaka.'
        },
        {
          id: 'd2-2',
          time: '08:00–11:45',
          title: 'Adršpašské skály',
          description: 'Wejdźcie do rezerwatu możliwie wcześnie. Zobaczycie skalne wieże, formacje zwane Kochankami, Starostą i Starościną, Homolę Cukru, wąskie skalne przejścia, Wielki Wodospad oraz jeziorko przy wejściu.',
          tip: 'Oficjalne godziny otwarcia od 1 listopada do końca marca to 8:00–16:30. Rejs łódką potraktujcie jako opcję dodatkową — w listopadzie nie uzależniałbym od niego planu.'
        },
        {
          id: 'd2-3',
          time: '12:00–13:15',
          title: 'Obiad w Kovářova kobyla',
          description: 'Restauracja w spokojniejszej okolicy, poza najbardziej oczywistym ciągiem turystycznym.',
          location: 'Kovářova kobyla',
          tip: 'Ocena 4,8/5 (ponad 1300 opinii). Sobotnie godziny: 11:00–20:00. Rezerwacja stolika: +420 721 510 710.'
        },
        {
          id: 'd2-4',
          time: '13:30–15:00',
          title: 'Křížový vrch',
          description: 'Wzgórze wznosi się naprzeciw Adršpach, a na jego szczyt prowadzi droga krzyżowa i skalna ścieżka widokowa.',
          location: 'Křížový vrch',
          tip: 'Trasa poza płatnym obwodem rezerwatu. Uwaga: przy oblodzeniu zrezygnujcie z wejścia ze względu na strome stopnie wykute w skale.'
        },
        {
          id: 'd2-5',
          time: '15:00–16:00',
          title: 'Krótka przerwa na kawę',
          description: 'Jeśli będzie pogodnie, wykorzystajcie ostatnie światło na krótkie zdjęcia krajobrazu; jeśli zimno lub mokro, wróćcie do hotelu.'
        },
        {
          id: 'd2-6',
          time: '16:00–18:00',
          title: 'Odpoczynek w hotelu',
          description: 'Prysznic, regeneracja i czas bez samochodu. Taka przerwa po kilku godzinach chodzenia naprawdę się przyda.'
        },
        {
          id: 'd2-7',
          time: '18:00–20:00',
          title: 'Kolacja w Hostinec U Tošováka',
          description: 'Wieczorna propozycja w swobodnym, lokalnym miejscu o charakterze czeskiej gospody.',
          location: 'Hostinec U Tošováka',
          tip: 'Ocena 4,4/5 (ok. 1800 opinii). Godziny weekendowe: 16:00–24:00. Rezerwacja: +420 771 218 631.'
        }
      ]
    },
    {
      dayNumber: 3,
      title: "Dzień trzeci — niedziela, 15 listopada",
      subtitle: "Teplice nad Metují → Teplické skály → Sieradz → Warszawa",
      items: [
        {
          id: 'd3-1',
          time: '07:00–07:40',
          title: 'Śniadanie, wymeldowanie i przygotowanie auta',
          description: 'Spakujcie bagaże rano, a możliwość pozostawienia samochodu na parkingu hotelowym podczas zwiedzania potwierdźcie w recepcji.',
          location: 'Hotel Orlík, Teplice nad Metují'
        },
        {
          id: 'd3-2',
          time: '08:00–11:45',
          title: 'Teplické skály',
          description: 'Przejdźcie główny szlak przez skalne ściany, wąskie przejścia i monumentalne wieże. Trasa ma około 5,9 km, więc przy listopadowym podłożu warto zostawić sobie zapas.',
          location: 'Teplické skály',
          tip: 'Dodatkowym wyzwaniem są strome drabinki na ruinach zamku Střmen — wejdźcie tam tylko wtedy, gdy jest sucho i nie ma lodu (opcja dla chętnych).'
        },
        {
          id: 'd3-3',
          time: '12:00–13:00',
          title: 'Obiad w restauracji Hotelu Orlík',
          description: 'Praktyczne rozwiązanie: jesteście już przy samochodzie, nie musicie szukać kolejnego lokalu w niedzielę, a restauracja serwuje tradycyjną kuchnię czeską.',
          location: 'Restauracja Hotelu Orlík'
        },
        {
          id: 'd3-4',
          time: '13:00–16:30',
          title: 'Przejazd w stronę Polski',
          description: 'Kierujcie się w stronę Wrocławia i dalej drogą S8. Zostawiłbym ten odcinek bez dodatkowych atrakcji — po dwóch dniach intensywnego chodzenia lepiej wracać bez pośpiechu.',
          location: 'Trasa Teplice nad Metují → S8'
        },
        {
          id: 'd3-5',
          time: '16:30–17:30',
          title: 'Wczesna kolacja w Restauracji Tarasowej',
          description: 'Wygodny postój w rejonie Sieradza, około dwóch minut jazdy od S8. Restauracja serwuje regionalną kuchnię polską w nowoczesnym wydaniu.',
          location: 'Hotel Na Półboru, Sieradz',
          tip: 'W soboty i niedziele czynne 12:00–22:00 (polboru.pl).'
        },
        {
          id: 'd3-6',
          time: '17:30–około 20:00',
          title: 'Ostatni odcinek do Warszawy',
          description: 'Po kolacji pozostaje już tylko spokojny powrót. Godzinę przyjazdu traktujcie orientacyjnie, zależnie od warunków drogowych.',
          location: 'S8 → Warszawa'
        }
      ]
    }
    ]
  },
  {
  id: 'source-2',
  name: 'Recommendation Gamma: Gemini',
  badge: 'Opcja 2',
  vibe: 'Komfortowy, pełen klimatu i ukrytych perełek trekking połączony z czeską kulturą oraz doskonałą kuchnią',
  intensity: 'Umiarkowany',
  description: 'Autorski, 3-dniowy plan dla 4 dorosłych osób łączący klasyczne kaniony skalne z mniej znanymi labiryntami i barokową kulturą Gór Suchych i Ziemi Broumovskiej. Plan zorganizowany bez zbędnego jeżdżenia i w ukierunkowanym, spójnym geograficznie układzie.',
  principle: 'Logiczna płynność bez zbędnego cofania się na trasie, unikanie masowych tłumów i bezkompromisowa jakość – od butikowego kwaterunku po regionalne restauracje z duszą.',
  summaryReason: 'Ta opcja wyjazdu to perfekcyjnie zbalansowany plan, który łączy ikoniczne atrakcje Skalnego Miasta z ukrytymi, mniej utartymi szlakami regionu Broumovska. Logiczna sekwencja punktów wyeliminowała zbędne przejazdy, dzięki czemu spędzacie czas na chłonięciu widoków, a nie w samochodzie. Zakwaterowanie w kameralnym pałacyku oraz starannie dobrane, klimatyczne restauracje gwarantują wyjazd na najwyższym poziomie komfortu i smaku. To idealna propozycja dla grupy dojrzałych podróżników, którzy cenią autentyczność, spokój i przemyślaną logistykę.',

  finalRecommendation: 'Gorąco rekomenduję ten wariant, jeśli szukacie niezapomnianej przygody, która harmonijnie łączy aktywny wypływ na łonie natury z wiecznym klimatem czeskiej kultury i doskonałą kuchnią. Wybór Zámečka Janovičky jako bazy wypadowej da Wam poczucie prywatności i wyjątkowości, a poranne godziny wejść na szlaki pozwolą uniknąć turystycznego tłoku. Plan daje pełne poczucie swobody bez pośpiechu, gwarantując równowagę między wrażeniami estetycznymi a relaksem. To sprawdzony, przemyślany w każdym detalu przepis na doskonały, trzydniowy reset.',
  highlights: [
    'Skalne Miasto w Adršpachu oraz dzikie Teplickie Skały',
    'Trekking granią Broumovskich Stěn i barokowy Klasztor w Broumovie',
    'Kameralny labirynt Ostaša i obiad w XIX-wiecznym schronisku Hvězda'
  ],
  days: [
    {
      dayNumber: 1,
      title: 'Dzień pierwszy — Giganty Skalne: Adršpach i Dzikie Teplice',
      subtitle: 'Warszawa → Zámeček Janovičky → Adršpach → Teplice nad Metují',
      items: [
        {
          id: 's2-d1-1',
          time: '08:30–09:30',
          title: 'Śniadanie i wyjazd w stronę skał',
          description: 'Niespieszne śniadanie w pałacyku z widokiem na górską dolinę, a następnie krótki przejazd samochodem do doliny Adršpachu.',
          location: 'Zámeček Janovičky → Adršpach',
          tip: 'Czas przejazdu autem to ok. 20 minut.'
        },
        {
          id: 's2-d1-2',
          time: '09:30–11:30',
          title: 'Skalne Miasto w Adršpachu',
          description: 'Poranne wejście do rezerwatu przed największym ruchem turystycznym. Przejście przez Gotycką Bramę w labirynt strzelistych iglic skalnych (m.in. "Kochankowie", "Głowa Cukru").',
          location: 'Adršpach',
          tip: 'Warto zakupić bilet wstępu i parking online z wyprzedzeniem.'
        },
        {
          id: 's2-d1-3',
          time: '11:30–13:00',
          title: 'Rejs łódką po skalnym jeziorku',
          description: 'Romantyczny i kameralny rejs tradycyjną łodzią po malowniczym jeziorku ukrytym w głębi skalnych wąwozów.',
          location: 'Jeziorko w Adršpachu',
          tip: 'Płatność za rejs często odbywa się gotówką na miejscu.'
        },
        {
          id: 's2-d1-4',
          time: '13:00–14:30',
          title: 'Tradycyjny obiad w Skalním Měscie',
          description: 'Niespieszny obiad w kultowej restauracji u wylotu wąwozów. Serwują tu genialną czeską zupę czosnkową w chlebie oraz tradycyjne pieczenie z knedlikami.',
          location: 'Restaurace Skalní Město, Adršpach',
          tip: 'Lokal ceniony za szybką obsługę i tradycyjne receptury.'
        },
        {
          id: 's2-d1-5',
          time: '14:30–16:30',
          title: 'Eksploracja Teplickich Skał',
          description: 'Krótki przejazd do drugiej, bardziej surowej i majestatycznej części kompleksu. Wędrówka chłodnymi, głębokimi kanionami o niepowtarzalnej atmosferze.',
          location: 'Teplické skály',
          tip: 'Warto mieć ze sobą cieplejszą bluzę – w głębokich szczelinach temperatura jest odczuwalnie niższa.'
        },
        {
          id: 's2-d1-6',
          time: '16:30–18:00',
          title: 'Punkt widokowy na ruinach zamku Střmen',
          description: 'Dla chętnych: wejście po stromych, stalowych schodach na dawny punkt obserwacyjny zawieszony na skale z panoramicznym widokiem.',
          location: 'Hrad Střmen',
          tip: 'Wymaga dobrej stabilności obuwia i braku lęku wysokości.'
        },
        {
          id: 's2-d1-7',
          time: '19:00–21:30',
          title: 'Kolacja w restauracji U Kovářů',
          description: 'Wykwintna kolacja w kameralnym lokalu cenionym przez koneserów za wyśmienitą lokalną wołowinę oraz selekcję regionalnych win i piw.',
          location: 'Restaurace U Kovářů, Teplice nad Metují',
          tip: 'Zalecana wcześniejsza rezerwacja stolika na wieczór.'
        }
      ]
    },
    {
      dayNumber: 2,
      title: 'Dzień drugi — Graniami Broumovskich Stěn i Barokowa Perła',
      subtitle: 'Janovičky → Chata Hvězda → Broumov',
      items: [
        {
          id: 's2-d2-1',
          time: '09:00–09:30',
          title: 'Przejjazd na trasę trekkingową',
          description: 'Śniadanie i widokowy przejazd pod przełęcz Hvězda w Broumovskich Ścianach.',
          location: 'Janovičky → Parking Hvězda',
          tip: 'Malownicza trasa prowadząca przez lokalne wioski.'
        },
        {
          id: 's2-d2-2',
          time: '09:30–11:30',
          title: 'Trekking granią Broumovskich Stěn',
          description: 'Wędrówka dzikim, zalesionym pasmem górskim pełnym skalnych grzybów, ukrytych punktów widokowych i spokoju daleko od masowych grup.',
          location: 'Broumovské stěny',
          tip: 'Trasa umiarkowanie wymagająca ze wspaniałymi punktami widokowymi.'
        },
        {
          id: 's2-d2-3',
          time: '11:30–13:00',
          title: 'Obiad w zabytkowej Chacie Hvězda',
          description: 'Postój i obiad w drewnianym schronisku z 1856 r. w stylu szwajcarskim, zawieszonym nad przepaścią. Zupa gulaszowa w klimatycznej jadalni smakuje tu wybornie.',
          location: 'Chata Hvězda',
          tip: 'Tuż obok znajduje się barokowa kaplica św. Huberta na skale.'
        },
        {
          id: 's2-d2-4',
          time: '13:00–14:30',
          title: 'Zejście Kowalską Wąwozem (Kovářova roklina)',
          description: 'Trasa powrotna prowadząca przez fascynującą, wąską i tajemniczą szczelinę skalną z powrotem do podnóża pasma.',
          location: 'Kovářova roklina',
          tip: 'Bardzo klimatyczny odcinek o unikatowym mikroklimacie.'
        },
        {
          id: 's2-d2-5',
          time: '14:30–16:30',
          title: 'Zwiedzanie Klasztoru Benedyktynów w Broumovie',
          description: 'Przejjazd do miasta i wizyta w barokowym arcydziele. W programie historyczna biblioteka, kościół św. Wojciecha oraz kopia Całunu Turyńskiego.',
          location: 'Broumovský klášter',
          tip: 'Bilety na zwiedzanie z przewodnikiem warto zarezerwować wcześniej.'
        },
        {
          id: 's2-d2-6',
          time: '16:30–18:30',
          title: 'Spacer po rynku w Broumovie i kawiarnia',
          description: 'Niespieszne zwiedzanie zabytkowego rynku i czas na kawę oraz tradycyjne czeskie desery w kameralnej kawiarni.',
          location: 'Městská památková zóna Broumov',
          tip: 'Miasteczko słynie z relaksującego, sennego klimatu.'
        },
        {
          id: 's2-d2-7',
          time: '19:30–22:00',
          title: 'Regionalna kolacja w Browarze Opat',
          description: 'Uczta w historycznej restauracji browaru Broumov. Połączenie obfitej kuchni regionalnej z degustacją niepasteryzowanych piw leżakowanych w dawnych piwnicach.',
          location: 'Pivovar Broumov (Opat)',
          tip: 'Możliwość zakupu zestawów degustacyjnych na pamiątkę.'
        }
      ]
    },
    {
      dayNumber: 3,
      title: 'Dzień trzeci — Ukryty Labirynt Ostaša i Finał Przygody',
      subtitle: 'Broumov → Góra Ostaš → Warszawa',
      items: [
        {
          id: 's2-d3-1',
          time: '09:00–09:30',
          title: 'Wykwaterowanie i przejazd pod Ostaš',
          description: 'Wykwaterowanie z hotelu, zapakowanie bagaży do auta i przejazd pod stołową górę Ostaš.',
          location: 'Zámeček Janovičky → Góra Ostaš',
          tip: 'Parking usytuowany jest bezpośrednio u podnóża szlaku.'
        },
        {
          id: 's2-d3-2',
          time: '09:30–11:30',
          title: 'Eksploracja Kocich Skał (Kočičí skály)',
          description: 'Przejście przez niezwykle ciasny, klimatyczny i pełen zakamarków labirynt skalny – mekkę wtajemniczonych turystów.',
          location: 'Kočičí skály, Ostaš',
          tip: 'Miejscami przejścia wymagają pochylenia głowy i przeciskania się między skałami.'
        },
        {
          id: 's2-d3-3',
          time: '11:30–13:00',
          title: 'Punkt widokowy Krtičkova vyhlídka',
          description: 'Podejście na górny płaskowyż Ostaša do punktu widokowego z imponującym widokiem na Karkonosze i całą Kotlinę Broumovską.',
          location: 'Krtičkova vyhlídka, Ostaš',
          tip: 'Doskonałe miejsce na pamiątkowe zdjęcia całej grupy.'
        },
        {
          id: 's2-d3-4',
          time: '13:00–14:30',
          title: 'Uroczysty obiad końcowy w Zámeckým Šenku',
          description: 'Niespieszny posiłek w stylowej gospodzie. Tradycyjne dania kuchni czeskiej przygotowywane ze świeżych, lokalnych składników.',
          location: 'Zámecký Šenk / okolice Police nad Metují',
          tip: 'Idealne zwieńczenie kulinarnej części wyjazdu.'
        },
        {
          id: 's2-d3-5',
          time: '14:30–15:30',
          title: 'Zakupy lokalnych specjałów',
          description: 'Krótki postój w regionalnym sklepie. Czas na zakup pamiątek: oryginalnej Kofoli, regionalnych nalewek ziołowych, rzemieślniczych serów i piwa.',
          location: 'Police nad Metují',
          tip: 'Przydatna płatność kartą lub koroną czeską (CZK).'
        },
        {
          id: 's2-d3-6',
          time: '16:00–21:00',
          title: 'Powrót do Warszawy',
          description: 'Wyjazd w stronę granicy w Lubawce i spokojny powrót drogami S3 oraz S8 do Warszawy.',
          location: 'Czechy → Polska (Warszawa)',
          tip: 'Planowany czas podróży autem z krótkim postojem na trasie to około 4,5–5 godzin.'
        }
      ]
    }
  ]
},
{
  id: 'source-3',
  name: 'Recommendation Gamma: Perplexity',
  badge: 'Opcja 3',
  vibe: 'Spokojne, ale pełne tempo: skalne labirynty, barokowy klasztor i lokalna kuchnia w trzech dobrze zaplanowanych dniach.',
  intensity: 'Umiarkowany',
  description:
    'Trzydniowy wyjazd z Warszawy do czeskiego Skalnego Miasta, z bazą w Hotelu Skalní Mlýn w Dolnym Adršpachu. Plan łączy dzikie Skały Teplickie, najsłynniejszy labirynt Skał Adršpaskich oraz barokowe opactwo w Broumovie. Kolejność zwiedzania jest ułożona geograficznie, aby uniknąć zbędnych przejazdów i wykorzystać krótkie listopadowe dni.',
  principle:
    'Plan opiera się na zasadzie geograficznej spójności: w dniu przyjazdu zwiedzacie południową, mniej uczęszczaną część — Skały Teplickie, w drugim dniu najsłynniejsze Skały Adršpaskie, a w trzecim Broumov po drodze powrotnej. Dzięki temu nie wracacie się między północą a południem, a każdy dzień ma inną atmosferę: przyrodniczą, spektakularną i zabytkową. W listopadzie główne zwiedzanie planuję rano, ponieważ dni są krótkie, a szlaki mogą być wilgotne.',
    summaryReason:
  'Ta opcja łączy trzy różne oblicza regionu: dzikie Skały Teplickie, najsłynniejszy labirynt Skał Adršpaskich oraz barokowy klimat Broumova. Kolejność zwiedzania jest ułożona geograficznie, dzięki czemu grupa nie traci czasu na zbędne przejazdy między północą a południem. Baza w Hotelu Skalní Mlýn minimalizuje dojazdy i pozwala rozpocząć najważniejszy dzień tuż przy wejściu na szlak. Plan uwzględnia też krótkie listopadowe dni, wilgotne ścieżki oraz potrzebę wcześniejszego wejścia na najpopularniejszą trasę.',

finalRecommendation:
  'Rekomenduję ten wariant jako najlepszy balans między przygodą, komfortem i realizmem trzydniowego wyjazdu. Nie rezygnuje z głównych atrakcji, a jednocześnie nie przemęcza czwórki osób w wieku około 50 lat — każdy dzień ma jasny rytm: zwiedzanie, obiad, odpoczynek i kolację. Najważniejsze jest wcześniejsze kupno biletów online na Skały Adršpaskie oraz rezerwacja noclegu i kolacji w U Tří růží. Jeśli pogoda w listopadzie będzie szczególnie mokra, warto skrócić opcjonalne fragmenty tras, ale zachować kolejność: Teplice, Adršpach, Broumov.',
  highlights: [
    'Teplické skály — dzikie wąwozy i skalne miasta',
    'Skały Adršpaskie — Labirynt, Katedra, Jezioro i Miasto Skalne',
    'Opactwo benedyktynów w Broumovie oraz Café Dientzenhofer'
  ],
  days: [
    {
      dayNumber: 1,
      title: 'Dzień pierwszy — przyjazd i Teplice',
      subtitle: 'Warszawa → Teplice nad Metují → Dolní Adršpach',
      items: [
        {
          id: 's3-d1-1',
          time: '06:30–12:30',
          title: 'Przejazd z Warszawy do Czech',
          description:
            'Wczesny wyjazd prywatnym autem z Warszawy. Najwygodniejsza trasa prowadzi przez Wrocław i Kłodzko lub przez Legnicę, z jedną krótszą przerwą po drodze.',
          location: 'Warszawa → Teplice nad Metují',
          tip: 'Realny czas jazdy to około 5,5–7 godzin z przerwami. Wcześniejszy start pozwala zdążyć na popołudniowe zwiedzanie.'
        },
        {
          id: 's3-d1-2',
          time: '12:30–13:30',
          title: 'Przerwa i obiad w Teplicach nad Metují',
          description:
            'Po dotarciu na miejsce obiad w Café&Bistro Na kus řeči — wygodnym punkcie startowym przed zwiedzaniem Skał Teplickich.',
          location: 'Café&Bistro Na kus řeči, Teplice nad Metují',
          tip: 'Zjedzcie ciepły posiłek przed wędrówką — trasa po skałach zajmie kilka godzin.'
        },
        {
          id: 's3-d1-3',
          time: '13:30–17:00',
          title: 'Wędrówka po Skałach Teplickich',
          description:
            'Popołudniowy spacer po mniej zatłoczonej, dzikiej części Skalnego Miasta. Trasa prowadzi przez skalne wąwozy, miasteczka skalne i punkty widokowe, m.in. w rejonie Vlčí rokle.',
          location: 'Teplické skály, Teplice nad Metují',
          tip: 'Weźcie trekkingowe buty, czołówki i warstwy odzieży. W listopadzie ścieżki i kamienie mogą być śliskie.'
        },
        {
          id: 's3-d1-4',
          time: '17:00–17:45',
          title: 'Zakwaterowanie w Hotelu Skalní Mlýn',
          description:
            'Zameldowanie w Hotelu Skalní Mlýn w Dolnym Adršpachu, położonym blisko głównego wejścia do Skał Adršpaskich. Hotel ma parking i restaurację na miejscu.',
          location: 'Hotel Skalní Mlýn, Dolní Adršpach 1',
          tip: 'Alternatywa: komfortowy apartament lub chalupa w Teplicach nad Metují, jeśli wolicie więcej prywatności.'
        },
        {
          id: 's3-d1-5',
          time: '18:30–20:00',
          title: 'Kolacja w Hotelu Skalní Mlýn',
          description:
            'Kolacja w restauracji hotelowej — najbezpieczniejsza i najwygodniejsza opcja po całym dniu jazdy oraz wędrówki.',
          location: 'Restauracja Skalní Mlýn, Dolní Adršpach',
          tip: 'Restauracja działa codziennie.'
        },
        {
          id: 's3-d1-6',
          time: '20:00–21:00',
          title: 'Plan na kolejny dzień',
          description:
            'Odpoczynek, sprawdzenie prognozy pogody oraz zakup biletów online na Skały Adršpaskie na następny dzień.',
          location: 'Hotel Skalní Mlýn',
          tip: 'Bilety kupuje się online na konkretną godzinę wejścia, np. 8:00. Bilet jest ważny na cały dzień.'
        }
      ]
    },
    {
      dayNumber: 2,
      title: 'Dzień drugi — Skały Adršpaskie',
      subtitle: 'Dolní Adršpach → Skały Adršpaskie → Dolní Adršpach',
      items: [
        {
          id: 's3-d2-1',
          time: '07:30–08:00',
          title: 'Śniadanie w hotelu',
          description:
            'Śniadanie w Hotelu Skalní Mlýn przed wyjściem na główną trasę Skał Adršpaskich.',
          location: 'Hotel Skalní Mlýn, Dolní Adršpach',
          tip: 'Wcześniejsze wejście pozwala uniknąć większej liczby turystów.'
        },
        {
          id: 's3-d2-2',
          time: '08:00–09:00',
          title: 'Wejście na Skały Adršpaskie',
          description:
            'Wejście na główny szlak zgodnie z godziną z biletu online. Po wejściu można zwiedzać we własnym tempie przez cały dzień.',
          location: 'Główne wejście do Adršpašské skály',
          tip: 'Kupcie bilet na godzinę 8:00–9:00. Wejście jest ważne tylko w wybranym przedziale godzinowym.'
        },
        {
          id: 's3-d2-3',
          time: '09:00–13:00',
          title: 'Główna trasa Skał Adršpaskich',
          description:
            'Spacer przez najsłynniejszą część Skalnego Miasta: Labirynt, Tvarożnik, Małżeństwo, Katedrę, Miasto Skalne oraz Jezioro. To najważniejszy punkt całego wyjazdu.',
          location: 'Adršpašské skály, Dolní Adršpach',
          tip: 'Zabierzcie trekkingowe buty, pelerynę i czołówkę. W listopadzie dni są krótkie, a ścieżki mogą być mokre.'
        },
        {
          id: 's3-d2-4',
          time: '13:00–14:00',
          title: 'Obiad w restauracji Skalní Mlýn',
          description:
            'Obiad tuż po zejściu ze szlaku, w restauracji przy hotelu — najwygodniejsza opcja logistycznie.',
          location: 'Restauracja Skalní Mlýn, Dolní Adršpach',
          tip: 'Restauracja działa codziennie.'
        },
        {
          id: 's3-d2-5',
          time: '14:30–16:00',
          title: 'Krótsza pętla lub spokojny odpoczynek',
          description:
            'Jeśli macie jeszcze siłę, możecie przejść dodatkowy fragment w stronę Teplic przez Vlčí rokle. Jeśli nie — warto wrócić do hotelu i odpocząć.',
          location: 'Adršpašské skály / Vlčí rokle',
          tip: 'To opcjonalny punkt — główna trasa już obejmuje najważniejsze atrakcje.'
        },
        {
          id: 's3-d2-6',
          time: '16:30–17:30',
          title: 'Spacer po Dolnym Adršpachu',
          description:
            'Spokojny spacer po miejscowości, kawa lub zakupy lokalnych przekąsek i wina na wieczór.',
          location: 'Dolní Adršpach',
          tip: 'Dobry moment na odpoczynek przed kolacją.'
        },
        {
          id: 's3-d2-7',
          time: '19:00–20:30',
          title: 'Kolacja w hotelu lub w Teplicach',
          description:
            'Kolacja w restauracji hotelowej Skalní Mlýn albo ponowny przejazd do Teplic nad Metují do Café&Bistro Na kus řeči.',
          location: 'Restauracja Skalní Mlýn / Café&Bistro Na kus řeči',
          tip: 'Jeśli chcecie zmienić klimat, wybierzcie Teplice; jeśli nie chcecie już jechać — zostańcie w hotelu.'
        }
      ]
    },
    {
      dayNumber: 3,
      title: 'Dzień trzeci — Broumov i powrót',
      subtitle: 'Dolní Adršpach → Broumov → Warszawa',
      items: [
        {
          id: 's3-d3-1',
          time: '08:00–09:00',
          title: 'Śniadanie i wymeldowanie',
          description:
            'Śniadanie w hotelu, spakowanie rzeczy i wymeldowanie przed wyjazdem do Broumowa.',
          location: 'Hotel Skalní Mlýn, Dolní Adršpach',
          tip: 'Broumov jest około 20 minut jazdy od Adršpachu, więc nie musicie bardzo wcześnie wyruszać.'
        },
        {
          id: 's3-d3-2',
          time: '09:30–11:00',
          title: 'Opactwo benedyktynów w Broumovie',
          description:
            'Zwiedzanie barokowego klasztoru św. Wacława, ogrodów i okolic. To kulturowe zakończenie wyjazdu po dwóch dniach wśród skał.',
          location: 'Klášter Broumov, Broumov',
          tip: 'W listopadzie zwiedzanie z przewodnikiem odbywa się zwykle w godzinach 10:00–15:00.'
        },
        {
          id: 's3-d3-3',
          time: '11:00–12:00',
          title: 'Kawa i deser w Café Dientzenhofer',
          description:
            'Przerwa na kawę i deser w kawiarni mieszczącej się w dawnym budynku klasztornej szkoły.',
          location: 'Café Dientzenhofer, Broumov',
          tip: 'W listopadzie kawiarnia działa w ograniczonych godzinach, zwykle do około 20:00 w dni powszednie.'
        },
        {
          id: 's3-d3-4',
          time: '12:00–13:30',
          title: 'Obiad w restauracji U Tří růží',
          description:
            'Ostatni obiad wyjazdu w restauracji przy klasztorze, łączącej zabytkowy klimat z nowoczesną kuchnią opartą na lokalnych składnikach.',
          location: 'Restauracja U Tří růží, Broumov',
          tip: 'Restauracja deklaruje otwarcie codziennie 11:00–21:00. Warto zarezerwować stolik.'
        },
        {
          id: 's3-d3-5',
          time: '13:30–14:30',
          title: 'Muzeum Papiernictwa w Police nad Metují',
          description:
            'Opcjonalny przystanek w Police nad Metují — nietuzinkowe muzeum związane z tradycją produkcji papieru.',
          location: 'Muzeum Papiernictwa, Police nad Metují',
          tip: 'Sprawdźcie aktualne godziny otwarcia przed wyjazdem — w listopadzie mogą być ograniczone.'
        },
        {
          id: 's3-d3-6',
          time: '14:30–15:00',
          title: 'Zakupy lokalnych pamiątek',
          description:
            'Krótki postój na zakup lokalnych produktów, np. piwa z Browaru Broumov lub innych regionalnych specjałów.',
          location: 'Broumov',
          tip: 'Browar Broumov należy do najstarszych klasztornych browarów na świecie.'
        },
        {
          id: 's3-d3-7',
          time: '15:00–21:00',
          title: 'Powrót do Warszawy',
          description:
            'Powrót prywatnym autem do Warszawy z postojem na kolację po drodze, np. w Kłodzku lub Wrocławiu.',
          location: 'Broumov → Warszawa',
          tip: 'Zaplanujcie 1–2 przerwy i dotrzecie do domu późnym wieczorem.'
        }
      ]
    }
  ]
}
];
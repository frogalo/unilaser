# UNILASER - Industrial Precision Systems

## O projekcie

UNILASER to nowoczesna, w pełni responsywna, zoptymalizowana aplikacja internetowa (architektura *Single-Page Application* wspierana przez klasyczne podstrony informacyjne bazujące na Next.js App Router). Interfejs został zrealizowany w konwencji *Technical Editorial* — profesjonalnego, technicznego design systemu, w pełni przystosowanego do dystrybucji maszyn wielkoprzemysłowych i technologii laserowych.

Aplikacja ma na celu natychmiastowe budowanie zaufania w segmencie Deep Tech i B2B poprzez minimalistyczny sznyt techniczny, dużą elastyczność oraz szybki czas ładowania (wzmocniony najnowszą specyfikacją `priority` oraz skalowanymi formatami zdjęć wejściowych).

## Zawartość aplikacji i Architektura

Struktura projektu została zaprojektowana od początku do końca modułowo, dbając o separację i elastyczność. 

Aplikacja udostępnia następujące kluczowe pliki, ścieżki i koncepcje:

### 1. Dedykowane Komponenty Główne (`app/components/`)
Wszystkie elementy układanki na głównej stronie zostały podzielone na izolowane bloki budulcowe (UI). Każdy moduł odznacza się swoimi właściwościami.
- **Hero**: Centralny komponent otwarcia strony z graficznym banerem oraz odnośnikiem ułożonym asymetrycznie.
- **VideoSection**: Sekcja "Technologia w Ruchu" pozwalająca w domyśle odtwarzać demonstrację pracy stacji roboczych.
- **Technology**: Techniczna pigułka benefitów ("Najważniejsze dla nas") z precyzyjnie zaprojektowanymi atrybutami maszyn ("Charakterystyka maszyn").
- **Comparison**: Moduł dynamicznej tablicy z analizą porównawczą starszych i nowocześniejszych form obróbki (np. CNC VS cięcie diamentem).
- **Capabilities**: Siatka *Nasza Oferta* służąca prezentacji poszczególnych dyscyplin ze wsparciem klikalnych piktogramów i przekierowań na dedykowane rynki np. szkolenie, cięcie, optyka, gratowanie.
- **About & Contact**: Formalne obszary podsumowujące profil doświadczenia (Od ponad 20 lat) i strefa wywołania kontaktów ze wsparciem odpowiednich ikon.
- **Header & Footer**: Globale warstwy zarządzające nawigacją projektu (nagłówek wspiera menu typu `Dropdown` za pomocą `sublinks`). Umiejscowione bezpośrednio w `layout.tsx` dla 100% integracji z każdą możliwą utworzoną w przyszłości nową zakładką.

### 2. Architektura Tras / Routera (`app/`)
Nawigacja w Next.js opiera się na plikach w strukturze deweloperskiej:
- `page.tsx` - Koncentruje i wyrzuca wyżej wymienione komponenty jako bezszwowo łączącą się siatkę jednorazowego załadowania z włączonym ułatwieniem przewijania (*scroll-smooth*).
- `oferta/ciecie-szkla/page.tsx` - Wzorcowa podstrona portfolio produktowego. Dedykowana ekspozycja typoszeregu cięcia szkła i serwerowego zgrzewania m.in "Seria E", "Seria HT", unikalna spawarka UNI 3in1. Posiada całkowicie osobny ekosystem i oddzielny Call to Action dający wrażenie zagłębiania się w techniczne plany maszyny.
- `not-found.tsx` - Techniczna strona wywoływana przy błędzie 404 (Błąd: Strona nie istnieje) ze smaczkami wizualnymi typu klasa `.technical-grid` dodana z tyłu.

### 3. Oddzielona Baza Treści Copywriterskich (`data/content.json`)
Sercem treści nie jest zaszyty kod HTML, a odizolowany dokument JSON łączący poszczególne akapity, tytuły i dane liczbowe w logiczne grupy. Możesz zmodyfikować tam absolutnie cały profil firmy bez żadnej znajomości HTMLa i Reacta, a układ dopasuje się samoczynnie. JSON ładuje wartości w mapowaniach dla większości komponentów witryny.

### 4. Zarządzanie Plikami Statycznymi (@[public/images])
Dedykowana gałąź publiczna, z której system optymalizacyjny docelowo wyrzuca wygenerowane klatki użytkownikom.
Zawiera w sobie plik główne logotypy `logo.png` oraz osobny sektor maszyn `images/machines`, w którym leżą kluczowe grafiki promocyjne (min. `laser.png`, `laser2.png`, `factory-workers-working.png`). Aplikacja inteligentnie określa priorytety wejściowe tych zdjęć i dobiera im parametry w oparciu o ich skalę obciążania na smartfonach i komputerach.

## Spis Technologii

Tylko najnowocześniejsze instrukcje napędzają ekosystem UNILASER:
- **Next.js (App Router)** - Nowoczesny standard routingu frameworka i obróbki serwerowej.
- **React** 
- **Tailwind CSS z customowym Systemem Designu** - Wprowadzone obszerne modyfikacje w pliku `globals.css` uwzględniające precyzyjnie definiowane palety stłumione techniczne jak: `primary`, `on-surface-variant`, `surface-container` budujące stoczniowy, szklany klimat (Theming zgodny pod Material/Technical UI).
- **Google Fonts (Inter & Space Grotesk)** 
- **Material Symbols Outlined** - Typografia ikon bezpośrednio z fontów Googlowskich zapewniająca zerową stratę na czasie i rozdzielczości (skompilowane do lżejszych paczek).

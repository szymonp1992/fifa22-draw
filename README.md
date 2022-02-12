# fifa22-draw
App that draws you a team in FIFA 22 according to specified conditions (stars, country, league etc.)

TEAMS 

TEAMS[] - z zespołami uczestniczącymi w losowaniu

—> https://www.seabreezecomputers.com/excel2array/ <— multidimensional array tworzy tablice z excela

***

CONDITIONS

class Conditions - zasady losowania pobrane ze strony
STARS - liczba gwiazdek
COUNTRY - kraj
LEAGUE - liga
NATIONAL TEAM? - boolean - z automatu false, przeskakuje na true tylko po zaznaczeniu takiej opcji (ale wyłącznie pod warunkiem, że country nie jest wybrane. ew gdy country to reprezentacje - pozwól)

***

DRAW

Mechanika samego losowania

class Draw - filtrująca obiekty w tablicy według konkretnych warunków (metoda filter) i losująca z pozostałych za pomocą math.random
FILTERTEAMS() - wynik filtrowania tablicy z zespołami według zasad pobranych ze strony
FILTERED TEAMS [] - tablica z wyfiltrowanymi zespołami
GET DRAW RESULT() - wynik losowania
DELETE TEAM() - usuwanie zespołu z tablicy tak, by nikt inny nie mógł go wylosować po raz drugi

***

STATISTICS 

class Statistics - ostatnio wylosowane zespoły, do której pushowane będą wyniki poprzednich losowań + wynik najnowszego losowania
RESULTS [] - tablica, gdzie unshiftowane będą kolejne wyniki (dodawane na początek)
DISPLAY DRAW RESULT () - pokazanie wyniku najnowszego losowania
PUSH PREVIOUS RESULTS () - popchnięcie poprzednich wyników w dół (wyświetlane ostatnie wyniki, dobre ćwiczenie do flexboxa/grida)

***

APP

START DRAW()
RENDER()

***


+ FOLDER Z LOGÓWKAMI


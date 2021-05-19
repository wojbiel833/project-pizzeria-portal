# Dashborard

- `/`

- STATYSTYKI DZIESIEJSZYCH ZAMÓWIEŃ(ZDALNYCH I LOKALNYCH)
- LISTA REZERWACJI I EVENTÓW ZAPLANOWANYCH NA DZIŚ

# Logowanie

- `/login`

- POLA NA LOGIN I HASŁO
- GUZIK DO ZALOGOWANIA (link do dashboardu)

# Widok dostępności stolików

-`/tables`

- dostępność wszystkich stolików

- WYGÓR DATY I GODZINY
- TABELA Z REZERWACJAMI ORAZ WYDARZENIAMI (
  - KAŻDA KOLUMNA = 1 STOLIK
  - KAŻDY WIERSZ = 30 MIN.
  - MA PRZYPOMINAC WIDOK TYGODNIA W KALENDARZU GOOGLE , GDZIE ZAMIAST DNI SA INNE STOLIKI
  - PO KLIKNIĘCIU REZERWACJI LUB EVENTU, PRZECHODZIMY NA STRONĘ SZCZEGÓŁÓW
    )

-`/tables/booking/:id`

- szczegóły rezerwacji / modyfikacja

- MUSI ZAWIERAĆ WSZYSTKIE INFORMACJE O REZERWACJI
- MUSI UMOŻLIWIAĆ EDYCJĘ I ZAPIS ZMIAN

-`/tables/booking/new`

- dodawanie nowej rezerwacji

- TO SAMO CO WYŻEJ LECZ Z PUSTYMI POLAMI NA INFO

-`/tables/events/:id`

- szczegóły eventu / modyfikacja

- MUSI ZAWIERAĆ WSZYSTKIE INFORMACJE O EVENCIE
- MUSI UMOŻLIWIAĆ EDYCJĘ I ZAPIS ZMIAN

-`/tables/events/new`

- dodawanie nowego eventu

- TO SAMO CO WYŻEJ LECZ Z PUSTYMI POLAMI NA INFO

# Widok kelnera

-`/waiter`

- widok ogólny dla kelnera z lista stolików i aktualnym stanem

- TABELA WYŚWIETLAJĄCA STOLIKI W WIERSZACH
- TABELA WYŚWIETLAJĄCA INFO W KOLUMNACH (
  - STATUS,
  - CZAS REZERWACJI,
  - CZAS OD OSTATNIEJ AKTYWNOŚCI)
- W OSTATNIEJ KOLUMNIE AKCJE DLA DANEGO STOLIKA

-`/waiter/order/new`

- dodawanie zamówień

- NUMER SATOLIKA (EDYTOWALNY)
- MENU PRODUKTÓW
- OPCJE WYBRANEGO PRODUKTU
- ZAMÓWIONE PRODUKTY Z OPCJAMI I CENĄ
- KWOTA ZAMÓWIENIA

-`/waiter/order/:id`

- wyświetlenie/edycja zamówienia

- JAK POWYŻSZA

# Widok kuchni

-`/kitchen`

- widok z aktualnymi zamówieniami

- WYŚWIETLA LISTĘ ZAMÓWIEŃ W KOLEJNOŚCI ZAMÓWIENIA(
  - NUMER STOLIKA (LUB ZAMÓWIENIA ZDALNEGO)
  - PEŁNE INFORMACJE O ZAMÓWIONYCH PORTAWACH)
- MOŻLIWOŚĆ OZNACZENIA ZAMÓWIENIA JAKO ZREALIZOWANE

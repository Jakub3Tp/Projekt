# ZnanyKorepetytor

Aplikacja webowa służąca do rezerwowania korepetycji z wybranymi nauczycielami. Użytkownicy mogą się rejestrować, logować, przeglądać profile korepetytorów, wystawiać oceny oraz dodawać nowych korepetytorów do systemu.

## Spis treści
- [Technologie](#technologie)
- [Funkcje](#funkcje)
- [Instalacja](#instalacja)
- [Struktura aplikacji](#struktura-aplikacji)
- [Widoki](#widoki)
- [Autorzy](#autorzy)

## Technologie

- **React** (z użyciem Vite)
- **JavaScript / JSX**
- **CSS / Bootstrap / Tailwind (opcjonalnie)**
- **LocalStorage** (lub backend API, jeśli zaimplementowany)
- **React Router DOM**

## Funkcje

- Rejestracja nowego użytkownika
- Logowanie do systemu
- Wyświetlanie listy korepetytorów
- Rezerwacja terminu korepetycji
- Możliwość wystawiania ocen
- Dodawanie nowych korepetytorów z opisem i zdjęciem

## Instalacja

1. Sklonuj repozytorium:
   ```bash
   git clone https://github.com/twoj-login/znanykorepetytor.git
   cd znanykorepetytor
   ```

2. Zainstaluj zależności:
   ```bash
   npm install
   ```

3. Uruchom aplikację lokalnie:
   ```bash
   npm run dev
   ```

4. Aplikacja będzie dostępna pod adresem:  
   `http://localhost:5173`

## Struktura aplikacji

```
src/
├── Login.jsx
├── Register.jsx
├── TutorCard.jsx
├── TutorProfile.jsx
├── AddTutor.jsx
├── ReservationForm.jsx
├── Home.jsx
├── Reservations.jsx
├── MyReservations.jsx
├── App.jsx
├── main.jsx

```

## Widoki

### 1. Rejestracja (`/Registration`)
- Nazwa użytkownika
- Hasło + powtórzenie
- Przycisk „Zarejestruj”

### 2. Logowanie (`/login`)
- Nazwa użytkownika
- Hasło
- Przycisk „Zaloguj”

### 3. Rezerwacje
- Lista dostępnych korepetytorów z podglądem karty

### 4. Profil korepetytora (`/tutor/:id`)
- Zdjęcie profilowe
- Imię i nazwisko
- Długi opis
- Formularz rezerwacji: data, godzina, temat
- System oceniania

### 5. Dodaj korepetytora (`/add-tutor`)
- Imię i nazwisko
- Opis na kartę
- Opis ogólny
- Dodanie zdjęcia
- Przycisk „Dodaj korepetytora”

## Autorzy

Projekt stworzony w celach edukacyjnych.  
Autor interfejsu testowego: Jakub Gola, Luiza Świeżek, Dymitry Latushkow

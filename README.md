# ToDoList Aplikacija

Ovo je aplikacija razvijena u **React Native** s integracijom **Firebase-a** za autentifikaciju i pohranu podataka. Cilj projekta je omogućiti korisnicima da upravljaju svojim zadacima unutar personaliziranog računa.

---

## **Funkcionalnosti**
1. **Autentifikacija putem Firebase-a**:
   - **Registracija**: Korisnici mogu kreirati novi račun s email adresom i lozinkom.
   - **Prijava**: Korisnici se mogu prijaviti na svoj račun i pristupiti osobnim zadacima.

2. **ToDo lista specifična za svakog korisnika**:
   - Nakon prijave, korisnici pristupaju svojoj personaliziranoj ToDo listi.
   - Mogu:
     - Dodavati zadatke.
     - Uređivati zadatke.
     - Brisati zadatke.

3. **Spremanje podataka u Firebase**:
   - Zadaci se spremaju u realnom vremenu i povezani su s korisničkim računom.
   - Podaci ostaju spremljeni čak i nakon što se korisnik odjavi.

---

## **Kako koristiti aplikaciju**
1. **Prijavi se ili registriraj**:
   - Prilikom otvaranja aplikacije, korisniku se prikazuje ekran za prijavu.
   - Ako nema račun, može se registrirati klikom na gumb **"Registracija"**.

2. **Upravljanje zadacima**:
   - Nakon prijave, korisnik ulazi na ekran s ToDo listom gdje može:
     - Unijeti nove zadatke.
     - Pregledavati već unesene zadatke.
     - Brisati ili uređivati postojeće zadatke.

---

## **Tehnologije**
- **React Native**: Frontend razvoj aplikacije.
- **Firebase**:
  - Autentifikacija (Firebase Authentication).
  - Spremanje podataka (Cloud Firestore).

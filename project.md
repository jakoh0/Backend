## Attori
- Utenti

## Auth     /auth
- Post Register /auth/register
    INPUT:
        - username
        - password
        - email
    OUTPUT:
        - SUCCESSO: utente correttamente registrato
        - ERRORE: Password non sicura
        (Venga inviata un'email di conferma di registrazione)

- Post Verify
    INPUT:
        - email
        - Codice di Verifica 
    OUTPUT:
        - SUCCESSO: Verifica confermata
        - ERRORE: Verifica non completata! Errore!!
- Post Login
    INPUT:
        - username
        - password
    OUTPUT:
        - SUCCESSO: Login effettuato correttamente
        - ERRORE: User/Password errate
## Profiles
- Create Profile
- Get/Receive Profile
- Update Profile 

## Chats
- Create Chat
- Show Chat
- Update Chat
- Delete Chat

## Messages
- Send Message
- Receive Messages
- Delete Messages
- Update Message
- Visualizzazione stato Messages



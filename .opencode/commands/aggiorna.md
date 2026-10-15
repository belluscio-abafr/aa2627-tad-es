---
description: Aggiorna i file del corso all'ultima versione del modello, senza toccare le esercitazioni
---

Aggiornare questo repository all'ultima versione del modello del corso, `https://github.com/belluscio-abafr/aa2627-tad-es-modello`, conservando il lavoro dello studente. Ogni file del modello si legge da `https://raw.githubusercontent.com/belluscio-abafr/aa2627-tad-es-modello/main/` seguito dal suo percorso, per esempio `.../main/AGENTS.md`.

Le cartelle delle esercitazioni (`es0`, `es1`, …) **non si toccano**, né i file né i nomi. Se dentro ci sono dei `README.md`, creati dalla versione precedente di `/crea`, dire che non servono più e che si possono cancellare, ma non cancellarli senza conferma.

1. Sostituire per intero con la versione del modello, senza altre modifiche: `AGENTS.md`, `opencode.json` e i comandi di `.opencode/commands/`, cioè `inizio.md`, `crea.md`, `verifica.md`, `consegna.md` e questo, `aggiorna.md`. OpenCode chiede il permesso per ciascuno: è normale.
2. Per l'`index.html` della radice, partire da quello del modello e riportarci dall'`index.html` attuale il nome dello studente, al posto di `Nome Cognome`, e tutte le voci dell'elenco, nello stesso ordine. Ogni voce resta un semplice link alla cartella, `<li><a href="es1/">Es1. Titolo</a></li>`: l'anteprima la aggiunge la pagina da sola. Se c'è almeno una voce, la riga «Ancora nessun lavoro pubblicato» va tolta.
3. Per il `README.md` della radice, partire da quello del modello e rifare le personalizzazioni del comando `/inizio`: `NOMEUTENTE` sostituito dal nome utente di GitHub, ricavato dall'indirizzo del repository remoto (`git remote -v`), e subito dopo il titolo la riga `Lavori pubblicati: https://NOMEUTENTE.github.io/aa2627-tad-es/`, con il nome utente vero.
4. Elencare le voci dell'elenco prima e dopo l'aggiornamento, perché lo studente controlli che non ne manchi nessuna, poi proporre commit e sincronizzazione.
5. Chiudere ricordando di chiudere e riaprire Visual Studio Code: i comandi aggiornati si leggono all'avvio.

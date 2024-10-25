---
title: Array Statici
---

Un **array statico** è una struttura di dati che memorizza una collezione di elementi dello stesso tipo, in posizioni di memoria contigue.

Gli array statici hanno una dimensionalità fissa definita al momento della loro creazione (o *allocazione*) e non potrà più essere alterata.

Le operazioni principali sono: includono *accesso*, *inserimento*, *cancellazione* e *[ricerca](#linear-search)* (ho deciso di trattare la ricerca nell'area degli algoritmi del sito).

La complessità in tempo per queste operazioni è variabile:

- **Accesso** (*Access*) $\rightarrow O(1)$
- **Inserimento** (*Insert*) $\rightarrow O(n)$
- **Cancellazione** (*Delete*) $\rightarrow O(n)$

## Accesso

L'**accesso** a un elemento specifico in un array statico è detto **diretto** grazie agli indici, e per questo motivo ha una complessità di $O(1)$.

```python
array = [1, 2, 3, 4, 5]
elemento = array[2]  # Accesso con indice 2 (3° elemento)
```

- Nella maggior parte dei linguaggi di programmazione si utilizza l'<a href="https://en.wikipedia.org/wiki/Zero-based_numbering" target="_blank">indicizzazione con base 0</a>.

## Inserimento

**Inserire** un elemento in un array statico può richiedere di spostare tutti gli elementi successivi per fare spazio al nuovo elemento.

Questa operazione ha una complessità di $O(n)$.

```python
array = [1, 2, 3, 4, 5]
posizione = 2
nuovo_elemento = 99
# Inserimento in posizione 2
array = array[:posizione] + [nuovo_elemento] + array[posizione:]
```

## Cancellazione

La **cancellazione** di un elemento richiede lo spostamento degli elementi successivi per riempire lo spazio vuoto lasciato dall'elemento rimosso. Questa operazione ha una complessità di $O(n)$.

```python
array = [1, 2, 3, 4, 5]
posizione = 2
# Rimozione dell'elemento in posizione 2
array = array[:posizione] + array[posizione + 1:]
```

## Complessità

### Complessità in tempo

Gli array statici sono una struttura di dati semplice ed efficiente per molte operazioni di accesso diretto, ma possono risultare meno efficienti per operazioni di inserimento e cancellazione a causa della necessità di spostare elementi.

La ricerca può essere ottimizzata se l'array è ordinato, utilizzando la [**ricerca binaria**](#binary-search).

| Operazione    | Tempo Big-O | Note                                                                                  |
| ------------- | ----------- | ------------------------------------------------------------------------------------- |
| Accesso       | $O(1)$      | Accesso diretto a qualsiasi elemento tramite l'indice                                 |
| Inserimento   | $O(n)$      | Inserimento in qualsiasi posizione richiede lo spostamento degli elementi successivi  |
| Cancellazione | $O(n)$      | Cancellazione in qualsiasi posizione richiede lo spostamento degli elementi successivi|
| Ricerca       | $O(n)$      | Ricerca lineare *oppure* $O(\log n)$ se l'array è ordinato e si utilizza la ricerca binaria   |

### Complessità in spazio

Lo spazio in termini di memoria occupata è direttamente proporzionato al numero di celle allocate durante la creazione dell'array.

Quindi per un array con dimensionalità $n$ avremo una complessità spaziale pari a $O(n)$.

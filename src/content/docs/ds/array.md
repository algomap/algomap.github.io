---
title: Array Statici
---

Un **array statico** è una struttura di dati che memorizza una collezione di elementi dello stesso tipo, in posizioni di memoria contigue. Gli array statici hanno una dimensione fissa che viene definita al momento della loro creazione e non può essere modificata successivamente.

Le operazioni principali sugli array statici includono accesso, inserimento, cancellazione e ricerca. La complessità in tempo per queste operazioni varia:

- **Accesso** (Access) $\rightarrow O(1)$
- **Inserimento** (Insert) $\rightarrow O(n)$
- **Cancellazione** (Delete) $\rightarrow O(n)$

L'**accesso** a un elemento specifico in un array statico è diretto grazie agli indici. Questa operazione ha una complessità di O(1).

```python
array = [1, 2, 3, 4, 5]
elemento = array[2]  # Accesso all'elemento in posizione 2 (3)
print(elemento)
```

**Inserire** un elemento in un array statico può richiedere di spostare tutti gli elementi successivi per fare spazio al nuovo elemento. Questa operazione ha una complessità di O(n).

```python
array = [1, 2, 3, 4, 5]
posizione = 2
nuovo_elemento = 99
# Inserimento in posizione 2
array = array[:posizione] + [nuovo_elemento] + array[posizione:]
print(array)
```

La **cancellazione** di un elemento richiede lo spostamento degli elementi successivi per riempire lo spazio vuoto lasciato dall'elemento rimosso. Questa operazione ha una complessità di O(n).

```python
array = [1, 2, 3, 4, 5]
posizione = 2
array = array[:posizione] + array[posizione + 1:]  # Rimozione dell'elemento in posizione 2
print(array)
```

Gli array statici sono una struttura di dati semplice ed efficiente per molte operazioni di accesso diretto, ma possono risultare meno efficienti per operazioni di inserimento e cancellazione a causa della necessità di spostare elementi. La ricerca può essere ottimizzata se l'array è ordinato, utilizzando la [ricerca binaria](#binary-search).

| Operazione    | Tempo Big-O | Note                                                                                  |
| ------------- | ----------- | ------------------------------------------------------------------------------------- |
| Accesso       | $O(1)$      | Accesso diretto a qualsiasi elemento tramite l'indice                                 |
| Inserimento   | $O(n)$      | Inserimento in qualsiasi posizione richiede lo spostamento degli elementi successivi  |
| Cancellazione | $O(n)$      | Cancellazione in qualsiasi posizione richiede lo spostamento degli elementi successivi|
| Ricerca       | $O(n)$      | Ricerca lineare; $O(\log n)$ se l'array è ordinato e si utilizza la ricerca binaria   |

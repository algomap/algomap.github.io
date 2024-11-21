---
title: Array Dinamici
sidebar:
  order: 2
---

Gli **array dinamici** sono molto più comuni e utili grazie alla loro capacità di essere **ridimensionati** (*resize*).

> In linguaggio come JavaScript o Python questi sono l'implementazione di default, poiché non sono linguaggi <a href="https://it.wikipedia.org/wiki/Tipizzazione_statica" target="_blank">staticamente tipati</a>.

La differenza tra [**array statici**](/ds/static-array) e **dinamici** è che in quest'ultimi non è necessario specificare una dimensionalità al momento dell'inizializzazione.

Quando si inserisce un nuovo elemento in un array dinamico, il sistema operativo trova il prossimo spazio vuoto in <a href="https://en.wikipedia.org/wiki/Random-access_memory" target="_blank">**memoria RAM**</a> e vi inserisce l'elemento.

## Resize

Per fare un esempio concreto del suo funzionamento, prendiamo un array che ha una **capacità** pari a $3$ elementi, e aggiungiamo valori in esso fino a esaurimento dello spazio.

```python
# Inserisci n come ultima posizione dell'array
def pushback(self, n):
   if self.length == self.capacity:
      self.resize()

   # inserisci alla prossima posizione vuota
   self.arr[self.length] = n
   self.length += 1
```

Poiché l'array è dinamico, l'aggiunta di un elemento a capacità esaurita avvia implicitamente una funzione (detta *resize*) che copia i valori correnti in un nuovo array con capacità raddoppiata.

```python
def resize(self):
   # Crea un nuovo array con il doppio della capacità
   self.capacity = 2 * self.capacity
   newArr = [0] * self.capacity

   # Copia gli elementi in newArr
   for i in range(self.length):
      newArr[i] = self.arr[i]
   self.arr = newArr
```

### Perchè si raddoppia la dimensione?

Nell'operazione di resize di un array dinamico, si sceglie di raddoppiare la dimensione dell'array piuttosto che incrementarla di un numero fisso per ottimizzare l'efficienza sia in termini di complessità temporale che spaziale.

1. **Efficienza ammortizzata**:
   Raddoppiando, il costo medio di inserimento resta $O(1)$, mentre incrementi fissi porterebbero a un costo medio $O(n)$ per i frequenti resizes.

2. **Meno resizes**:
   Con il raddoppio, il numero di resizes è $O(\log n)$. Usando incrementi fissi, avremmo $O(n)$.

3. **Memoria efficiente**:
   Allocazioni esponenziali sfruttano meglio i moderni sistemi di memoria rispetto a incrementi piccoli.

4. **Trade-off spazio/tempo**:
   Il raddoppio bilancia bene memoria inutilizzata (massimo $50\%$) e prestazioni.

## Popback

```python
# Rimuove l'ultimo elemento dell'array
def popback(self):
   if self.length > 0:
      self.length -= 1
```

## Get

```python
# Ottenere il valore all'indice i-esimo
def get(self, i):
   if i < self.length:
      return self.arr[i]
   # In questo caso lanceremmo un'eccezione di fuori limite
```

## Insert

```python
# Inserire n all'indice i-esimo
def insert(self, i, n):
   if i < self.length:
      self.arr[i] = n
      return
   # Qui lanceremmo un'eccezione di fuori limite
```

## Analisi asintotica di complessità

### Complessità Temporale

> Quando parliamo di analisi asintotica, siamo più interessati a una dimensione di input insolitamente grande, cioè nel caso peggiore, se la nostra dimensione di input fosse estremamente grande, ad esempio se costruissimo un array di dimensioni 150.000, asintoticamente non ci sarebbe differenza tra $O(2n)$ e $O(n)$ perché se l'algoritmo esegue esattamente $2n$ operazioni, sicuramente esegue almeno $O(n)$ operazioni. Di conseguenza, si eliminano le costanti.

| Operazione | Tempo Big-O | Note |
| --------- | ---------- | ----- |
| Accesso | $O(1)$ | |
| Inserimento | $O(1)*$ | $O(n)$ se l'inserimento avviene nel mezzo, poiché sarà necessario uno spostamento |
| Cancellazione | $O(1)*$ | $O(n)$ se la cancellazione nel mezzo è richiesta dallo spostamento |

L'operazione di [**resize**](#resize) verrà eseguita in $O(1)$ **ammortizzato**. La complessità temporale ammortizzata è il tempo medio impiegato per ogni operazione, che una volta eseguita non si ripeterà per un periodo di tempo così lungo che il costo diventa "***ammortizzato***".

Questo ha senso perché non sempre l'array deve essere ridimensionato, nel qual caso eseguiremmo operazioni da $O(n)$.

### Complessità Spaziale

Lo spazio in termini di memoria occupata è direttamente proporzionato al numero di celle allocate durante la creazione dell'array.

Quindi per un array con dimensionalità $n$ avremo una complessità spaziale pari a $O(n)$.

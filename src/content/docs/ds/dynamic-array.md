---
title: Array Dinamici
sidebar:
  order: 2
---

Gli **array dinamici** sono molto più comuni e utili grazie alla loro capacità di essere ridimensionati.

- In linguaggio come JavaScript o Python questi sono l'implementazione di default, poiché non sono linguaggi <a href="https://it.wikipedia.org/wiki/Tipizzazione_statica" target="_blank">staticamente tipati</a>.

> La differenza tra [array statici](/ds/static-array) e dinamici è che in quest'ultimi non è necessario specificare una dimensionalità al momento dell'inizializzazione.

Quando si inserisce un nuovo elemento in un array dinamico, il sistema operativo trova il prossimo spazio vuoto in **memoria RAM** e vi inserisce l'elemento.

Per fare un esempio, prendiamo un array di dimensione 3 e inseriamo elementi in esso fino a esaurimento dello spazio. Lo pseudocodice e la visualizzazione che segue lo dimostrano.

```python
# Inserisci n come ultima posizione dell'array
def pushback(self, n):
   if self.length == self.capacity:
      self.resize()

   # inserisci alla prossima posizione vuota
   self.arr[self.length] = n
   self.length += 1
```

![da](/imgs/dynamic-array.png)

TODO inserire immagine?

Poiché l'array è dinamico, l'aggiunta di un altro elemento quando si esaurisce la capacità si ottiene copiando i valori in un nuovo array di dimensioni doppie rispetto a quelle originarie. La seguente immagine e il seguente pseudocodice lo dimostrano.

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

![da1](/imgs/dynamic-array-1.png)

TODO inserire immagine?

> Quando tutti gli elementi del primo array sono stati copiati, non ha senso mantenerli in memoria: questo spazio sarà deallocato.

Questa operazione verrà eseguita in $O(1)$ **ammortizzato**. La complessità temporale ammortizzata è il tempo medio impiegato per ogni operazione, che una volta eseguita non si ripeterà per un periodo di tempo così lungo che il costo diventa "ammortizzato". Questo ha senso perché non sempre l'array deve essere ridimensionato, nel qual caso eseguiremmo operazioni da $O(n)$.

Approfondiamo un po' il motivo per cui raddoppiamo la dimensione dell'array iniziale quando finisce lo spazio. È possibile dimostrarlo matematicamente, per cui ne forniamo una panoramica di alto livello. Non preoccupatevi, non useremo equazioni fantasiose. La figura sottostante mostra un array risultante di dimensione 8. Immaginiamo ora di volerlo riempire dinamicamente e di partire da un array di dimensione 1. Aggiungeremo 5, raddoppiando lo spazio. Aggiungeremmo 5, raddoppieremmo lo spazio per aggiungere 6, raddoppieremmo lo spazio per aggiungere 7 e 8, raddoppieremmo lo spazio per aggiungere 9, 10, 11 e 12.

![da2](/imgs/dynamic-array-2.png)

TODO inserire immagine?

La dimensione dell'array di cui sopra è passata da `1 -> 2 -> 4 -> 8.`.
Questo ha senso perché per creare l'array risultante osservato nella visualizzazione, abbiamo dovuto creare 4 spazi e poi inserire 4 elementi, per un totale di 8 operazioni. Inoltre, dobbiamo considerare anche la somma di tutte le operazioni che si sono verificate prima dell'ultima, poiché senza queste operazioni non saremmo arrivati all'array risultante.

Lo schema è che l'ultimo termine (il termine dominante) è sempre maggiore o uguale alla somma di tutti i termini che lo precedono. In questo caso, 1+2+4=7, e 7<8. Sommando l'8 al
7, si ottiene un totale di 15 operazioni per creare la matrice risultante di dimensione 1. In generale, la formula è che per qualsiasi array di dimensione $n$, ci vorranno al massimo $2n$ operazioni per crearlo, il che appartiene a $O(n)$.

> Quando parliamo di analisi asintotica, siamo più interessati a una dimensione di input insolitamente grande, cioè nel caso peggiore, se la nostra dimensione di input fosse estremamente grande, ad esempio se costruissimo un array di dimensioni 150.000, asintoticamente non ci sarebbe differenza tra $O(2n)$ e $O(n)$ perché se l'algoritmo esegue esattamente $2n$ operazioni, sicuramente esegue almeno $O(n)$ operazioni. Di conseguenza, si eliminano le costanti.

| Operazione | Tempo Big-O | Note |
| --------- | ---------- | ----- |
| Accesso | $O(1)$ | |
| Inserimento | $O(1)*$ | $O(n)$ se l'inserimento avviene nel mezzo, poiché sarà necessario uno spostamento |
| Cancellazione | $O(1)*$ | $O(n)$ se la cancellazione nel mezzo è richiesta dallo spostamento |

Altre operazioni in pseudocodice:

```python
# Rimuove l'ultimo elemento dell'array
def popback(self):
   if self.length > 0:
      self.length -= 1

# Ottenere il valore all'indice i-esimo
def get(self, i):
   if i < self.length:
      return self.arr[i]
   # In questo caso lanceremmo un'eccezione di fuori limite

# Inserire n all'indice i-esimo
def insert(self, i, n):
   if i < self.length:
      self.arr[i] = n
      return
   # Qui lanceremmo un'eccezione di fuori limite

def print(self):
   for i in range(self.length):
      print(self.arr[i])
   print()
```

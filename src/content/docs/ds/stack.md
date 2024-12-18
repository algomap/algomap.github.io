---
title: Stack
sidebar:
  order: 3
---

Uno **stack** (o pila) è una struttura di dati che funge da collezione di elementi in cui è possibile aggiungere e rimuovere elementi da un'unica estremità, chiamata cima (o "*top*") dello stack.

> Un esempio è una pila di piatti in un buffet: si può prendere o aggiungere un piatto solo dalla. Allo stesso modo, uno stack consente operazioni di aggiunta e rimozione solo dalla cima.

Gli stack sono strutture di dati dinamiche che seguono il principio **LIFO** (*Last In First Out*), ovvero l'ultimo elemento inserito è il primo a essere rimosso.

Uno stack è un'**tipo di dati astratto** (**ADT** -- *Abstract Data Type*), significa che non importa come venga implementato il suo comportamento (solitamente array dinamici): le caratteristiche principali sono che si devono poter **aggiungere** e **rimuovere** elementi dalla stessa estremità.

Le operazioni principali che uno stack supporta sono `push`, `pop` e `peek`.

## Push

```python
def push(self, n):
   # Metodo append degli array dinamici per pushare nello stack
   self.stack.append(n)
```

![stack](../../../assets/stack-0.png)

## Pop

```python
def pop(self):
   return self.stack.pop()
```

L'operazione `pop` rimuove l'ultimo elemento dalla cima dello stack, che in termini di array dinamici corrisponde al recupero dell'ultimo elemento. Anche questa è un'operazione efficiente con complessità temporale $O(1)$, come discusso nei capitoli precedenti.

![stack-1](../../../assets/stack-1.png)

Prendendo l'esempio precedente, supponiamo di voler rimuovere i numeri 4 e 3. Il seguente pseudocodice dimostra il concetto, insieme alla visualizzazione in cui rimuoviamo 4 e 3 dalla cima dello stack. Ancora una volta, il puntatore alla cima viene aggiornato per puntare all'ultimo elemento rimanente.

> Nella maggior parte dei linguaggi, prima di eseguire l'operazione di `pop`, è una buona pratica verificare se lo stack è vuoto per evitare errori.

> Dato che uno stack rimuove gli elementi nell'ordine inverso rispetto a quello in cui sono stati inseriti, può essere utilizzato per **invertire** le sequenze, come una stringa, che è solo una sequenza di caratteri.

## Peek

L'operazione `peek` è la più semplice delle tre. Restituisce l'elemento in cima allo stack senza rimuoverlo.

```python
def peek(self):
   return self.stack[-1]
```

## Analisi asintotica di complessità

### Complessità Temporale

| Operation | Big-O Time | Notes                                |
| --------- | ---------- | ------------------------------------ |
| Push      | $O(1)$     |                                      |
| Pop       | $O(1)*$    | Controlla se lo stack è vuoto prima. |
| Peek/Top  | $O(1)*$    | Recupera senza rimuovere.            |

### Complessità Spaziale

La **complessità spaziale** è pari al numero di elementi *pushati* che sono mantenuti nello stack, quindi è $O(n)$.

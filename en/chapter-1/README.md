# welcome to chapter 1

Examples

## math

This template uses katex. 

For exampple,

```
$$
\begin{bmatrix}
a & b \\
c & d \\
\end{bmatrix}
$$
```
This is converted to:

$$
\begin{bmatrix}
a & b \\
c & d \\
\end{bmatrix}
$$

You can use `$$` instead of `{% math %}`

You can find further information here.

https://katex.org/

## Mermaid

You can draw diagrams such as state diagrams,sequence diagrams, class diagrams and charts using mermaid syntax.

note: remove trailing `\` after triple `\`` when you use mermaid block.

````txt
```mermaid
pie
  "meaningOfLife": 42
  "others": 58
```\
```

This is converted into this.

```mermaid
pie
  "meaningOfLife": 42
  "others": 58
```
Another example is class diagram.

```mermaid
classDiagram
    Component <|-- ConcreteComponent
    Component <|-- Decorator
    Decorator o-- Component
    Component : +operation()
    ConcreteComponent : +operation()
    Decorator : -component
    Decorator : +operation()
    Decorator <|-- ConcreteDecorator
    ConcreteDecorator : +operation()
```

For more information, visit https://mermaid-js.github.io

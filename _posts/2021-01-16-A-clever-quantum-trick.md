---
layout: post
title: "A clever quantum trick"
author: "Emilio Peláez"
tags:   [protocol,circuit]
image: 1_22PrHbfEgqc4df7SV83m5A.jpeg
---

Quantum computing is full of clever tricks that help us solve problems that would take us years to solve with purely classical computing. These tricks usually involve a relatively small circuit that performs a specific task inside a much bigger algorithm. In fact, quantum computing is all about learning how to take advantage of the strange tricks that inhabit quantum mechanics to solve problems through computation. You may have heard about some of these tricks, such as entanglement and superposition. There are many more, and among them you will find phase kickback.

Phase kickback is a very common and useful trick that you will often see included in larger quantum algorithms, e.g., Shor’s, Simon’s, Deutsch-Josza, and Grover’s. This is why it’s important to understand it, it will help you understand other much more practical circuits intuitively and have an idea of what is going on under the hood rather than just looking at the broad idea.

We will be looking at a really simple example that just involves two qubits. One important requirement that we need to take into account in order for this trick to work is that the qubit that will be the target in the control operation, in our case qubit q1, needs to be an eigenvector of the operation. If you don’t know what an eigenvector is, I’d recommend watching [this video](https://www.youtube.com/watch?v=PFDu9oVAE-g) by the great 3Blue1Brown.

What we want to achieve with this requirement is that applying the operation to our target qubit doesn’t change its state, but only affects its phase. Thus, applying the operator to our qubit would look something like this:

<img src="{{ site.url }}/assets/images/1_8G9bPII9sWOUKzwlvk-tpw.png">

In this example, U is the operation (a matrix) that is acting on the qubit psi (a vector represented by a ket). As you can see, the operator only adds a phase to our qubit, but doesn’t change its state. This value that the qubit psi is being multiplied by is the phase that will be kicked back to our control qubit.

With this requirement established, we can get into the circuit. First of all, let’s look at what the circuit looks like, and we will go through what each gate does next.

<img src="{{ site.url }}/assets/images/1_rZQ_CqPOe7zKAnLbVXxNRg.jpeg">

First, our top qubit goes through a Hadamard gate and the bottom qubit goes through a Pauli-X gate, giving us the following state:

<img src="{{ site.url }}/assets/images/1_d6dQftTm0KRLat7ihdXq2Q.png">

We can see that we have an equal superposition of the states 01 and 11, where the first number corresponds to the qubit q0 and the second number to the qubit 11. This state is produced because the Hadamard gate puts our top qubit into an equal superposition between states 0 and 1 and the Pauli-X gate simply puts our bottom qubit into the state 1 no matter what.

Here is when it gets interesting. The qubits go through a controlled phase gate, with the control qubit being the top one and the target qubit the bottom one. The names control and target are misleading in this case, since the qubit that ends up changing its phase is the **control** qubit. Remember that a controlled gate acts only when the control qubit is in state 1, so the phase rotation is only applied in this case. When passing through this gate, the resulting state is the following:

<img src="{{ site.url }}/assets/images/1_tdJ210uCJgowK-POdRakLA.png">

Remember the requirement we talked about earlier? Well, you can see it in action right here. The phase gate was applied to the state 11 (since the top qubit, which acts as the control, is in the state 1) but it only added a phase to the state. In this case, $$\theta = \pi / 4$$, following the formula we showed above. Another important remark is that the states are not entangled since we can write them as a tensor product of the two qubits.

We can see the effect of the phase with the statevector simulation that Qiskit gives us, notice that the top qubit (qubit 0) has a phase rotation, while the target qubit is right in the 1 state without any rotation.

<img src="{{ site.url }}/assets/images/1_22PrHbfEgqc4df7SV83m5A.jpeg">

This shows that the phase was kicked back into our top qubit rather than being applied to the bottom qubit. This is the effect we wanted to achieve, we applied a phase rotation to our top qubit but the qubit that actually was acted on by a phase rotation gate was the bottom qubit.

It’s also important to emphasize here that this phase cannot actually be seen by a measurement. In fact, measuring these qubits would still result in an equal probability of states 0 and 1 for qubit 0 and state 1 all of the time for qubit 1, the same we had in our first equation. We are just able to see this statevectors that illustrate the phase of the qubits because Qiskit has a statevector simulator, but running this circuit on real hardware would produce nothing too special.

So, why do we bother on altering this phase if we are not going to detect it when measuring? Well, as I said earlier, this circuit is very helpful in other algorithms. It may not look like it at first, but I assure you it is. Let’s go through a quick example in Grover’s search algorithm so you can appreciate the usefulness of phase kickback.

This search algorithm consists of many steps. One of them is to flip the sign of the state we are looking for. This means that we want to kick back a negative phase to this specific state, and how can we do that? Phase kickback! Of course, it is much harder than it sounds like. We need to design an oracle that only applied the negative phase to the state we are looking for, and this is very hard. But at the end the concept it relies on is phase kickback. If want to learn more about Grover’s search algorithm, I recommend starting [here](https://qiskit.org/textbook/ch-algorithms/grover.html).

You can find python code implementing the phase kickback circuit showed through this article [here](https://github.com/epelaaez/QuantumLibrary/blob/master/algorithms/Phase%20Kickback.ipynb). This github repository contains implementations of various quantum algorithms, and the list is constantly growing and improving. Feel free to contribute to this project if you want to!

If you want to read some more in-depth and technical articles in this topic, I recommend the following:

*   [Phase kickback by nosarthur.](https://nosarthur.github.io/quantum%20information%20and%20computation/2018/01/26/kickback.html)
*   [Quantum Phase Estimation in the Qiskit textbook.](https://qiskit.org/textbook/ch-algorithms/quantum-phase-estimation.html)
*   [Quantum Algorithms Revisited by Cleve, R., Ekert, A., Macchiavello, C., and Mosca, M.](https://arxiv.org/abs/quant-ph/9708016v1)
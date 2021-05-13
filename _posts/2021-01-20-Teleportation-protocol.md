---
layout: post
title: "Teleportation protocol"
author: "Emilio Peláez"
tags: [protocol,circuit]
image: 1_gf3ek1a3_xs7YYeWeJJL4A.jpeg"
---

Teleportation may seem as a concept only existent in the world of science fiction — at least for those who are not yet familiar with the concepts of quantum physics and quantum computing. It’s pretty crazy to hear about the teleportation of quantum information the first time. Specially since it involves the instantaneous transfer of quantum data, and I’m pretty sure instantaneous is faster than the speed of light, since entanglement works no matter how far apart the two qubits are.

But isn’t this against the rules of relativity that govern our universe? Supposedly, no object can be affected by another object instantaneously since it violates the upper limit on speed of transfer of information, i.e. the speed of light.

> I cannot seriously believe in it because the theory cannot be reconciled with the idea that physics should represent a reality in time and space, free from spooky action at a distance

The above is an extract from one of the manny letters between Einstein and Born, this specific letter is dated March 3, 1947

Then what is happening? Well, I might have lied to you about the part of instantaneous transfer of quantum data. There is a constraint that makes the quantum teleportation protocol not able to teleport data faster than the speed of light, as we are going to see. But before diving into this more philosophically inclined aspect, let’s take a look at how the quantum teleportation protocol works.

### Quantum teleportation protocol

The quantum teleportation protocol is a fundamental part of many quantum algorithms. It enables you to transfer the state of one qubit to another qubit. An important distinction to make is that teleportation in this context refers to the transfer of information rather than matter, since the qubits stay in the same place, but the state of one qubit is transferred to another.

This protocol is useful to overcome the difficulties imposed by the [no-cloning theorem](https://en.wikipedia.org/wiki/No-cloning_theorem), which tells us that it is not possible to create an exact copy of a quantum state. Which means we cannot copy the state of one qubit into another and have two copies of the same state, but we can teleport it — and destroy the original state. In fact, most uses of the teleportation protocol are to transfer the state of a qubit into another within a single QPU rather than across large distances. This is useful since many QPUs don’t have all their qubits connected to each other, which makes it impossible for some qubits to interact with others without the use of teleportation.

Now, let’s go ahead and take a look at how this works. First, we are going to see how the circuit looks like.
$$ \newcommand{\ket}[1]{\left|{#1}\right\rangle} $$
<figure>
    <img src="{{ site.url }}/assets/images/0_6FYFgtRh25QwbNjs.jpg">
    <figcaption>Circuit implementing quantum teleportation protocol</figcaption>
</figure>

The first thing we do is define three states $$\ket{\psi}$$, $$ \ket{\phi} $$, and $$ \ket{\omega} $$. $$ \ket{\psi} $$ will be the state we want to send, $$ \ket{\phi} $$ will be an ancillary qubit, and $$ \ket{\omega} $$ will be the qubit to which we want to send the state originally in $$ \ket{\psi} $$. Summarising:

<figure>
    <img src="{{ site.url }}/assets/images/0_kVzZd8ROudJ_fS1U.png">
    <figcaption>The three qubits we are going to use</figcaption>
</figure>

The gates before the first barrier entangle the ancillary qubit with the receiver qubit, creating the first bell state. This is a fairly common trick in quantum computing and I recommend you become familiar with it if you are not already, [this](https://github.com/epelaaez/QuantumLibrary/tree/master/algorithms/bell_state) may be a good source to start with. After creating this bell state, we have the following state involving the three qubits:

<figure>
    <img src="{{ site.url }}/assets/images/0_NjR3OAN-YmJRJ3Eq.png">
    <figcaption>Entangling ancillary and receiver qubit</figcaption>
</figure>

In the equation above we are using the tensor product to indicate that the three qubits are part of the same system. It’s also important to keep in mind that the order in which we will write them is $$ \ket{\psi\phi\omega} $$, so $$ \ket{010} $$ would mean that the sender qubit is in state $$ \ket{0} $$, the ancillary qubit in state $$ \ket{1} $$, and the receiver qubit in state $$ \ket{0} $$.

The gates between the first barrier and the second one only act on the first qubit: the sender qubit. This gates prepare the desired state to send, so they can be anything the sender wants them to be. In this example we are applying a Hadamard gate, followed by a phase rotation of $$ \pi/4 $$ radians, and another Hadamard gate at the end. The following equations show how the state is modified:

<figure>
    <img src="{{ site.url }}/assets/images/0_W3XLziuNEFjghcPd.png">
    <figcaption>Preparing sender qubit to the state we are going to send</figcaption>
</figure>

If you don’t understand the part where we go from an exponential function to trigonometric functions, I’ll advise looking into [Euler’s formula](https://en.wikipedia.org/wiki/Euler%27s_formula). I just applied this identity to the exponential functions, allowing me to simplify the state into an easier one we can work with.

Note that in this case, we are only focusing on the first qubit, rather than in the whole whole state made up of the three qubits. We can do this since the first qubit is not entangled with any other qubit, so any changes to it won’t affect the others.

Before going into the next gate, let’s see the state of our three qubits together. To do this, we can use the state of $$\ket{\psi}$$ we prepared in the above equation and plug it in the first equation. The following equation shows us this state:

<figure>
    <img src="{{ site.url }}/assets/images/0_rkVNaMzMxc_u40Cu.png">
    <figcaption>State of our whole system</figcaption>
</figure>

Now, the following part of the circuit is going to entangle our sender and ancillary qubits with a CNOT gate and then apply a Hadamard gate to the sender qubit only. To get a better idea of what is happening, we are going to apply this operators to our whole state, so we can see the relations between the three qubits. $$ \ket{\psi\phi\omega} $$ in the following equation is just a short way of reffering to the state described in the above equation. The following equation shows us what happens to our state:

<figure>
    <img src="{{ site.url }}/assets/images/0_pu_r3Gzk_TpJ8cFp.png">
    <figcaption>Entangling sender and ancillary qubit, then applying Hadamard to sender qubit</figcaption>
</figure>

Here it gets a little bit tricky, since we are going to measure $$ \ket{\psi} $$ and $$ \ket{\phi} $$. As you may know, there are 4 possible states we might end up with when measuring these two qubits, these are $$ \ket{00} $$, $$ \ket{01} $$, $$ \ket{10} $$ and $$ \ket{11} $$. And for each of this four states, you can have either $$ \ket{0} $$ or $$ \ket{1} $$ for the receiver qubit. To help illustrate the different possibilites, let’s look at what state $$ \ket{\omega} $$ will be depending on the state we measure in $$ \ket{\psi\phi} $$.

<figure>
    <img src="{{ site.url }}/assets/images/0_1VUA2G4s0phMTy8O.png">
    <figcaption>The four possibilites of the receiver qubit depending on the state we measure on the sender and ancillary qubit</figcaption>
</figure>

You can make sure that this relation is true by checking it with the previous equation. The first two qubits will determine the third one and you can disregard the states where the first two qubits don’t correspond to the measured ones. This shows us that there is a relation between the three qubits (thanks to entanglement!).

And this relation between the three qubits is what we are going to exploit next. The sender will inform the receiver of his measurements and the receiver will apply some gates to $$ \ket{\omega} $$ depending on them. This information is transferred via **classical channels**. A Pauli-X gate is applied if $$ \ket{\phi} = \ket{1} $$ and a Pauli-Z gate is applied if $$ \ket{\psi} = \ket{1} $$, if both states are \ket{1} the two gates are applied in that order. Let’s have a look case by case.

First, the case in which $$ \ket{\psi\phi} = \ket{00} $$. No further gates are applied, so we already have the following state:

<figure>
    <img src="{{ site.url }}/assets/images/0_hh2SkDvWSCVlKYvY.png">
    <figcaption>First possibility, no further gates are applied</figcaption>
</figure>

In the case that $$ \ket{\psi\phi} = \ket{01} $$, we only apply a Pauli-X gate:

<figure>
    <img src="{{ site.url }}/assets/images/0_guk0XZrwiyAwCprZ.png">
    <figcaption>Second possibility, Pauli-X gate is applied</figcaption>
</figure>

The next case is that $$ \ket{\psi\phi} = \ket{10} $$, in this case we only apply a Pauli-Z gate:

<figure>
    <img src="{{ site.url }}/assets/images/0_4-x9M8iA2LPpZdd4.png">
    <figcaption>Third possibility, Pauli-Z gate is applied</figcaption>
</figure>

Finally, the case in which $$ \ket{\psi\phi} = \ket{11} $$, here we apply a Pauli-X gate folowed by a Pauli-Z gate:

<figure>
    <img src="{{ site.url }}/assets/images/0_SJfDUuhtlPDFc3Pj.png">
    <figcaption>Fourth possibility, Pauli-X gate is applied followed by Pauli-Z gate</figcaption>
</figure>

At this point, the quantum telepertation protocol is over, the state $$ \ket{\omega} $$ is in the state we intended to teleport from $$ \ket{\psi} $$ in each of the four possible cases. To achieve this, we needed to send two bits of information through **classical channels**. It is common to think that this use of classical channels throws away the whole purpose of teleporting a quantum state, but it really doesn’t. This classical communication is really the only way of ensuring that we teleport the state successfully; if we didn’t apply this step, we would be stuck with one of the four possibilities shown above without the person that has $$ \ket{\omega} $$ having a clue about what $$ \ket{\psi\phi} $$ is, therefore this person would only have the intended state $$ 1/4 $$ of the time.

In this example, we have three more gates in our circuit. This gates are not really part of the protocol, but they help us ensure the teleportation protocol was successful. Thanks to this last part, where the receiver applies the same gates the sender prepared her qubit with in the first place but inversely, we should get the state $$ \ket{0} $$ all of the time. This is because the “resetter” at the end reverts the qubit to its state at the very beggining of the circuit, which is $$ \ket{0} $$.

This part is not included in practical applications of the teleportation protocol, since the qubit is often used to perform other operations, but we do it in this case to ensure that we teleported our qubit correctly. This can be confirmed with the histogram of the circuit, where the leftmost bit corresponds to the receiving qubit and we see we measure it to be in state $$ \ket{0} $$ everytime.

<figure>
    <img src="{{ site.url }}/assets/images/0_Is1hIIDSUKmIwWZS.jpg">
    <figcaption>Histogram showing the results of runing this circuit. Notice how we always got 0 in the qubit we intended to do so!</figcaption>
</figure>

To access the circuit implemented in Qiskit talked about in this article, go [here](https://github.com/epelaaez/QuantumLibrary/tree/master/algorithms/teleportation). This Github repository contains various quantum circuits, each one with an explanation and equations typed in LaTeX when needed. The structure for this article is based on the explanation given in this repository, so if you liked this article, I highly encourage you to check out the repository, you can even contribute to it if you want to!

Now, let’s explore if this protocol actually allows for faster than light transfer of quantum data.

### Faster than light?

<figure>
    <img src="{{ site.url }}/assets/images/1_gf3ek1a3_xs7YYeWeJJL4A.jpeg">
    <figcaption>Image by 
        <a href="https://pixabay.com/users/ray_shrewsberry-7673058/?utm_source=link-attribution&amp;amp;utm_medium=referral&amp;amp;utm_campaign=image&amp;amp;utm_content=5605724" target="_blank">Ray Shrewsberry</a> 
    from 
        <a href="https://pixabay.com/?utm_source=link-attribution&amp;amp;utm_medium=referral&amp;amp;utm_campaign=image&amp;amp;utm_content=5605724" target="_blank">Pixabay</a>
    </figcaption>
</figure>

The short answer is **no**. This circuit doesn’t allows us to transfer quantum data faster than light. You may have noticed why when going through the above explanation of the protocol, but I’ll talk about it here again.

The key is that the quantum teleportation protocol relies on two bits of classical information, and these bits are transferred via **classical channels**. And guess what? The upper bound of the speed for transferring information through classical channels is the speed of light, and our current technology is not even close to reaching this speed.

This limitation is what doesn’t allows us to teleport a quantum state faster than light. This is the main argument that backs up the fact that the quantum teleportation protocol is not faster than light communication, but there are other technicalities that help us see why entanglement doesn’t violate the laws of our universe. Let’s look at one of them.

First, let’s define what action at a distance means. We can define it to be as a physical influence or information being applied or transferred between two particles apart from each other. In this case, it’s fairly simple to see why entanglement doesn’t count as “spooky action at a distance”. What happens is that measuring a qubit gives you a random result — based on its wavefunction, but still random after all — then when measuring the other qubit, which was entangled to the first qubit, we get a result correlated to the first measurement, but not caused by it.

This distinction between correlation and causation is very often used across science; if you want a great resource to start exploring this idea, I recommend looking at [this video](https://www.youtube.com/watch?v=ROpbdO-gRUo&feature=youtu.be).

It’s also important to consider that this issue of whether quantum teleportation and entanglement count as action at a distance or not is still an active area of discussion among physicists and philosophers. But one thing is certain, transferring information faster than the speed of light is not possible — well, at least for now.

#### What’s the purpose then?

Well, as I mentioned at the beggining, this protocol may allow us to transfer states between qubits within a single QPU, so that qubits that are not linked together can teleport their states to qubits that are linked and then perform the required operation.

Another — more futuristic — use of the quantum protocol is the following. Imagine Alice has a quantum state, but she doesn’t have a clue about it, i.e. she doesn’t know the wavefunction of her qubit. However, she knows that the state is important and wants to send Bob this state so he can perform so operations to it. Measuring Alice’s qubit and sending the classical information to Bob isn’t a viable option since he would only receive a 0 or a 1, rather than the wavefunction! So, what can they do?

Well, imagine that they are very cautious people and had anticipated a situation like this. So, they entangled a pair of qubits, each one took one of them and has kept it safe ever since. Now, they can perform the quantum teleportation protocol! According to the explanation given at the beginning of this article, Alice’s pair of the entangled qubits is the ancillary qubit, the qubit she wants to send to Bob is the sender qubit, and Bob’s pair of the entangled qubits is the receiver qubit.

After performing the protocol, Bob has the state Alice had on her qubit on his qubit and he can now perform any operation to it that he needs to! This is a pretty good use of the quantum teleportation protocol, and our technology is allowing us to perform it at larger and larger distances.

That’s all for this brief discussion of the quantum teleportation protocol. I hope you learned something new and your interest in quantum computation increased! For more information and discussion of the topics presented in this article, I recommend looking at this sources:

*   Lecture 10 (starting in page 42 of the given PDF) in [these](https://www.scottaaronson.com/qclec/combined.pdf) series of lectures by Scott Aaronson.
*   [Article](https://www.space.com/37506-quantum-teleportation-record-shattered.html) in Space.com talking about Chinese scientists performing quantum teleportation.
*   [Quantum Entanglement and Information](https://plato.stanford.edu/entries/qt-entangle/#ExplEntaQuanTele) in the Stanford Encyclopedia of Philosophy.
---
layout: post
title: "Quantum States And The Bloch Sphere"
author: "Pranav Viswanath"
tags: [physics,mathematics]
image: 1____XCD57DmhptRduyol2j31A.jpeg
---
Join us as we traverse the complex and beautiful foundations of the development and derivation of the Bloch Sphere, and begin to understand its simple but profound implications on the future of [quantum computing](https://medium.com/quantum-untangled/what-qc-why-qc-who-qc-4d5f601285e5).

<figure>
    <img src="{{ site.url }}/assets/images/1__ZtLUJ7OJJ__mtn5VvBJvUuA.png" width="75%">
    <figcaption>Image by <a href="http://qutip.org/docs/4.1/guide/guide-bloch.html" target="_blank">QuTiP</a></figcaption>
</figure>

In this article, we’ll review in simple terms what exactly the Bloch sphere is, go over some basic but foundational math concepts, and then see how quantum states necessitate the use of a mathematical depiction of their properties, namely the Bloch sphere. [Future articles](https://medium.com/quantum-untangled/visualizing-quantum-logic-gates-part-1-515bb7b58916) will cover more advanced topics with regards to the manipulation of the Bloch sphere through the applications of quantum gates, rotations, and much more. Stay tuned!

_We are Quantum Untangled, a student-led group aiming to demystify and promote the beauty of quantum mechanics and quantum computing in all aspects of their relevance in society. Feel free to follow our publication and join us as we continue to explore everything quantum!_

### **The Bloch Sphere: What Exactly Is It?**

The field of quantum computing revolutionizes every aspect of the computing industry through its unique applications of special laws of physics, which we generally refer to as **quantum mechanics**. Quantum computing attempts to approach conventional problem-solving techniques from a whole new angle by manipulating the strange and fascinating laws of quantum mechanics through the foundational unit of information that makes quantum computers run: a “qubit”.

Most devices (probably including the one you’re reading this article on) utilize the classical bit: a unit of data which can hold a value of either a 0 or 1. Now consider just how much information and technology we utilize in the world today. Texting, streaming, gaming, calling, banking, and much more are all able to run with the power of the classical bit, in its simple, binary form. However, all of the fanfare and glory behind the power of quantum computing lies in this simple fact: a “quantum bit”, or “qubit”, uses the laws of quantum mechanics to not just represent a 0 or 1, but an _infinite array of combinations of both 0 or 1_, leveraging a property known as **superposition**.

<figure>
    <img src="{{ site.url }}/assets/images/1__riHN507SQqk44wF6yYYFRA.jpeg" height>
    <figcaption>Image from <a href="https://teagueelectric.com/what-do-light-switch-makes-crackling-sound-when-turn-it-on-kansas-city/" target="_blank">Teague Electric</a></figcaption>
</figure>

Here’s a more intuitive sense of the concept: A classical bit, being entirely either 0 or 1, is like a light switch, which can be either turned on or off, and never be something in between. However, a quantum bit functions more like a dial, in that its extremes are 0 and 1, but it can also be “turned” (dimmed/brightened) to be something in between the two, representing a state that is a **combination of both 0 or 1**. This is known as a “superposition” of the two values, and every superposition can be considered its own “quantum state”. This fascinating (albeit strange) idea is one of the fundamental concepts that support the techniques utilized in quantum computing.

<figure>
    <img src="{{ site.url }}/assets/images/1____XCD57DmhptRduyol2j31A.jpeg">
    <figcaption>Image from <a href="https://store.google.com/us/product/nest_learning_thermostat_3rd_gen?hl=en-US" target="_blank">Google Store</a></figcaption>
</figure>

With this property at our disposal, we now have the capability to represent an exponentially larger amount of data than we were ever able to before, since every superposition of 1 and 0 can correspond to a separate idea or piece of data, which means that given just 1 qubit, we can represent more problems and calculations than several regular bits working together simultaneously can.

But how exactly do we show what a “quantum state” looks like, and how could we ever quantify what a “superposition” means, let alone manipulate and perform calculations with it? The heart of the matter lies with figuring out just exactly what makes “quantum mechanics” work in general, but understanding the nature of our reality at such microscopic scales and reconciling it with the macroscopic phenomena we observe in our daily lives remains a challenge that has plagued scientists of the likes of Einstein and Schrodinger until present-day. While we may not currently have a full understanding of quantum physics in general, we do have the math and computing power to harness these strange mysteries to our advantage. The Bloch sphere is such a tool- a mathematical representation of a given quantum state of a qubit, with which researchers can pinpoint and manipulate various such states within the sphere to their advantage.

### **From Abstract Ideas To Concrete Geometry**

Put in a sentence, the Bloch sphere is a geometric representation of the aforementioned “quantum states” on the surface of a 3d unit sphere, which helps researchers understand the data of the given superposition of a quantum state in a nice, mathematically sound way. We will derive the general form of the Bloch sphere from scratch, but if you’d just like it as a reference, feel free to skip the derivation and scroll to the end. As mentioned before, applications of this form to rotations and gates will be discussed in future articles.

We’ll understand the necessity of the Bloch sphere once we see just what a “quantum state” looks like mathematically, and this requires some understanding of a few basic concepts and notation.

This is the most general form of a two-level quantum state (our levels in this case are 0 and 1, of which we can represent any superposition of the two).

<figure>
    <img src="{{ site.url }}/assets/images/1__2KmPiDHfG4g9WPiCzhs9Hw.png">
    <figcaption>Equations from here on out were made by the author on Latex</figcaption>
</figure>

Let’s unpack this: Quantum states are shown geometrically as **vectors** (for an in-depth review of vectors and linear algebra, please refer [here]({% post_url 2021-02-02-Vectors-and-Scalars---Linear-Algebra-for-QC %})). We use a specific type of notation called **bra-ket** notation in quantum mechanics to represent vectors in a more condensed form. Let’s look at the most basic vectors, the “0” vector and the “1” vector, in bra-ket notation:
$$ \newcommand{\ket}[1]{\left|{#1}\right\rangle} \newcommand{\bra}[1]{\left\langle{#1}\right|} $$
<figure>
    <img src="{{ site.url }}/assets/images/1__AC5aSGtW__jRe1lNV0gfvXg.png">
    <figcaption>0 column vector and 1 column vector in bra-ket notation</figcaption>
</figure>

The symbol $$ \ket{} $$ denotes a _column vector_, and is known as a “ket”. The “bra” $$ \bra{} $$ form of a vector is just the conjugate transpose of the original, shown below:

<figure>
    <img src="{{ site.url }}/assets/images/1__V__xTW6F0lQFTKQXA0Txgvg.png">
    <figcaption>0 row vector and 1 row vector in bra-ket notation</figcaption>
</figure>

This notation comes up countless times in more advanced calculations in quantum theory, and we will continue to refer to it as we progress. Now, from our general form, we see the values “alpha” and “beta” as coefficients of the 0 and 1 states (we will use the terms “vectors” and “states” interchangeably). Why are they there? In quantum computing, when we measure/record the value of a qubit, like a bit, we actually either get only a 0 or 1. What happened the “superposition” of both values? They were, in fact, there all along, but as soon as we decided to record or merely observe the state of the qubit, it immediately reverted back to either 0 or 1, which we ended up physically measuring. This is known as the **measurement problem** of quantum mechanics, where as long as we don’t observe a quantum state, it exists in a superposition of potential values, but as soon as we measure it, we only see **one specific value**. More on this in articles to come.

Mathematicians and researchers devised a way to predict with a certain degree of accuracy what they will measure given a quantum state- they decided to assign **probabilities** of measuring either a 0 or 1. We represent these probabilities as coefficients of the 0 and 1 state-vectors. One will notice that this thus leads to a given quantum state (represented by the ket “Psi” on the left hand of the equation) which can be shown as a **linear combination** of the 0 and 1 vectors, like so:

<figure>
    <img src="{{ site.url }}/assets/images/1__Ft2uhhKsiVN0ysczsVCf__Q.png">
    <figcaption>Quantum state shown as a linear combination of 0 and 1 vector</figcaption>
</figure>

Thus, with the 0 and 1 state-vectors and their corresponding probability amplitudes, we can represent any two-level quantum state. One might recall that the sum total of the probabilities of any situation must add up to 1. If these probabilities are complex numbers, we may run into trouble (given their quirky arithmetic properties with $$i$$ being involved). However, physicist Max Born devised a namesake rule to alleviate this concern, where he chooses to _square_ and then sum them to find 1, as such:

<figure>
    <img src="{{ site.url }}/assets/images/1__PoW0cxO3qp2IfrEYP6Q0mA.png">
    <figcaption>Amplitudes squared add up to 1</figcaption>
</figure>

This is known as the **normalization constraint,** since all two-level systems must obey this quality to function as a qubit. A quick note: this notation applied to complex numbers is known as the “squared modulus”, shown here for a complex number $$z$$:

<figure>
    <img src="{{ site.url }}/assets/images/1__NTdsWqMc9HjgT85y2x6O__Q.png">
    <figcaption>Modulus properties for complex numbers</figcaption>
</figure>

The resulting equation was successfully of its complex components, leaving us with nice, positive numbers, thus proving the efficacy of the Born rule. Interestingly, setting the above squared modulus of $$z$$ equal to 1 actually provides us with a unit circle of radius 1 in the Cartesian plane! Finally, we’re starting to see the need for some type of circular/spherical representation- now let’s go into exactly how to extend our understanding of quantum states to 3 dimensions!

Let’s dive a bit deeper into these complex numbers, which are the coefficients of our basis state-vectors 0 and 1, used to represent the “amplitudes” (a term that reflects their positive and negative natures given that they’re complex) of the probability of measuring them. We recall Euler’s identity:

<figure>
    <img src="{{ site.url }}/assets/images/1____P7wGkRKjETA0CTfvBmF8w.png">
    <figcaption>Euler's identity</figcaption>
</figure>

We’ll use this formula to derive a new representation of our “quantum state” formula. Let’s use our identities for the [polar coordinates](https://en.wikipedia.org/wiki/Polar_coordinate_system#:~:text=In%20mathematics%2C%20the%20polar%20coordinate,angle%20from%20a%20reference%20direction.) of $$x$$ and $$y$$ to rewrite the complex number $$z$$ we used before in polar form, as such:

<figure>
    <img src="{{ site.url }}/assets/images/1__ckibxsiiwsrLkgAKGyXB0g.png">
    <figcaption></figcaption>
</figure>

In this form, we can see that $$r$$ is being multiplied by the right hand of Euler’s identity, so we can dramatically simplify our representation of a given complex number $$z_c$$, which has its own angle and value of $$r$$:

<figure>
    <img src="{{ site.url }}/assets/images/1__2mXEhAoP00tIA7l__2XF__mg.png">
    <figcaption></figcaption>
</figure>

Now redefining our $$ \alpha $$ and $$\beta$$ coefficients with our new polar form, we now have a _polar representation_ of our quantum state:

<figure>
    <img src="{{ site.url }}/assets/images/1__eKmyya14PX8OADqTu8DbMg.png">
    <figcaption></figcaption>
</figure>

We’re well on our way! Please remember the ultimate goal of all this: we want to find a way to visualize quantum states in a way that captures their information in a simple, quantifiable way, by algebraically manipulating their probability components. We see in this representation that our quantum state has _4 unknowns_ \- the $$r$$ and $$\theta$$ components of our coefficients $$\alpha$$ and $$\beta$$. Let’s try to reduce the number of variables involved to make visualizing quantum states a bit easier.

There is a concept in quantum computing known as “[global phase](https://en.wikipedia.org/wiki/Phase_factor)”, where if two quantum states in polar form (which we described above) differ only by a factor of some $$ e^{i\theta}$$, then they are considered indistinguishable for the time being and can be treated as the same mathematically (while it’s actually a bit more complicated, the general concept will be useful in eradicating an extra variable, as we will see).

Given that it is thus mathematically unaffected, let’s multiply our quantum state by such a global phase and see what happens. We define a new state $$\ket{\psi'}$$ where:

<figure>
    <img src="{{ site.url }}/assets/images/1__b98XlGunmJG8NYjQJgtkVg.png">
    <figcaption></figcaption>
</figure>

Evaluating this gives:

<figure>
    <img src="{{ site.url }}/assets/images/1__fMrPDhGblonmQJYH25RJ1g.png">
    <figcaption></figcaption>
</figure>

We have completely gotten rid of the $$e^{i\theta_\alpha}$$ coefficient of the 0 ket, leaving us with just 3 parameters: $$r_\alpha$$, $$r_\beta$$, and $$\theta$$.

Let’s take this a step further: remember how the squared probabilities of measuring 0 and 1 have to add up to 1? Why don’t we try that, but instead of using the current polar form of the probability coefficient of 1, let’s go back to the old, Cartesian form of a complex number: $$ z = x+ iy $$, of whose squared modulus we already derived (check above). Applying the namesake “normalization constraint” to our quantum state gives:

<figure>
    <img src="{{ site.url }}/assets/images/1__dLxWlRiEUDjR1LV2Hb2Qbg.png">
    <figcaption></figcaption>
</figure>

This last equation is just a 3d sphere in real space!

If you’ve made it this far, congrats! We have beautifully simplified our original conception of a quantum state into a nice, 3d representation. Our last steps are to come up with a general formula that now only requires 2 inputs instead of the current 3 to be able to plot two-level quantum states.

We first recall the [spherical coordinate system](https://tutorial.math.lamar.edu/classes/calciii/SphericalCoords.aspx), which defines points based on their angle relative to the $$x$$, $$y$$, and $$z$$ axes along with their distance from the origin.

<figure>
    <img src="{{ site.url }}/assets/images/1__y5mMUA3kC0XC3__8k3j5VUw.png">
    <figcaption></figcaption>
</figure>

Knowing that $$r = 1$$ (radius of a unit sphere is 1), we will represent the form of a quantum state we just derived in spherical coordinates to finally get a representation of the quantum state just in terms of its angles relative to the axis of the Bloch sphere.

With spherical coordinates defined as such:

<figure>
    <img src="{{ site.url }}/assets/images/1__TTgRhvdwpGIT7iMNDc__JRg.png">
    <figcaption></figcaption>
</figure>

Setting $$r = 1$$ which means $$r\cos(\theta) = \cos(\theta)$$, and replacing $$x$$, $$y$$ and $$z$$ in our quantum state $$\ket{\psi'}$$ we get:

<figure>
    <img src="{{ site.url }}/assets/images/1__F4I4caRLjY3WdRo0PnHp2Q.png">
    <figcaption></figcaption>
</figure>

Aha! Do you recognize Euler’s identity at the coefficient of $$\ket{1}$$, multiplied by $$\sin\theta$$? Replacing like so, we get:

<figure>
    <img src="{{ site.url }}/assets/images/1__cTRkNx2cdxNPnl3IVKkwug.png">
    <figcaption></figcaption>
</figure>

Perfect. This isn’t the full sphere, however. We need to use half angles and restrict the ranges of both of the angles such that we can now represent any state we want on the sphere.

Given the angles $$\theta$$ and $$\phi$$ restricted as such:

<figure>
    <img src="{{ site.url }}/assets/images/1__k__xmpdT92HVJ__k4OhKE6__g.png">
    <figcaption></figcaption>
</figure>

We finally get the general form of a quantum state lying in the Bloch sphere, using half angles as discussed:

<figure>
    <img src="{{ site.url }}/assets/images/1__NQPIQ__R__hEBRkDiZK1hnsQ.png">
    <figcaption></figcaption>
</figure>

Also note that we can linearly combine $$\ket{0}$$ and $$\ket{1}$$ like before using the laws of vector addition to show a quantum state vectorially:

<figure>
    <img src="{{ site.url }}/assets/images/1__B7A8BjPQgh__dj5sItqbepQ.png">
    <figcaption></figcaption>
</figure>

Let’s recap what we just did. We established the notion of quantum states as specific cases of qubits in superposition, and understood how bra-ket notation along with their probability amplitudes contribute to a general mathematical form of a quantum state. From there we applied several concepts such as Euler’s law and polar/spherical coordinates to develop an equation that, needing only two input values, allows us to determine what any normalized, two level quantum state would look like visually on a 3d sphere. And thus we have derived our Bloch sphere!

### **The Bloch Sphere In Action**

Let’s try to plot a quantum state on the Bloch sphere.

Supposed you were asked to plot the quantum state $$\ket{1}$$. As a reminder, the “1 state” is defined as follows, using bra-ket notation:

<figure>
    <img src="{{ site.url }}/assets/images/1__omAYE__UE7H2fud5kpgceEw.png">
    <figcaption></figcaption>
</figure>

We want to find the angles $$\theta$$ and $$\phi$$ which satisfy the general form of the Bloch sphere. That is,

<figure>
    <img src="{{ site.url }}/assets/images/1__5b__3fp7A7Kfv9sU27lCy6A.png">
    <figcaption></figcaption>
</figure>

Do you recall a way to find these two angles with our given information? Exactly! We need to set up a [system of equations](https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:systems-of-equations) which correlate the top and bottom values of the general Bloch vector, with the corresponding values in the vector form of our given quantum state- in this case, $$\ket{1}$$, as such:

<figure>
    <img src="{{ site.url }}/assets/images/1__LKh5PIvjhYItNZ9__pHsLog.png">
    <figcaption></figcaption>
</figure>

We begin by solving the first equation for $$\theta$$:

<figure>
    <img src="{{ site.url }}/assets/images/1__lAA5C5xY1CRFulZ__8FqXDg.png">
    <figcaption></figcaption>
</figure>

Then substituting this value of theta into the second equation, yielding $$\phi$$:

<figure>
    <img src="{{ site.url }}/assets/images/1__1pime05aq8XodiyU9Fq6bA.png">
    <figcaption></figcaption>
</figure>

Having found our values of $$/theta$$ and $$/phi$$, we plug them back into the general Bloch vector form to obtain the corresponding vector in the sphere:

<figure>
    <img src="{{ site.url }}/assets/images/1__I9RnaM9NALt1CRhdYr3iHA.png">
    <figcaption></figcaption>
</figure>

Plotting this on the Bloch sphere looks as follows:

<figure>
    <img src="{{ site.url }}/assets/images/1__27GsFM2jevNVfiVQq9kZAg.png">
    <figcaption></figcaption>
</figure>

Can you see why this makes sense? As mentioned before, the Bloch sphere is a visual representation of quantum states, based off their property of measurement, showing their degree of superposition between 0 and 1. If we consider the positive $$z$$-axis as the 0 state and negative $$z$$-axis as the 1 state, then it would make sense that absolutely no portion of the vector should lie anywhere outside of the negative $$z$$ axis, since there’s a 100% probability of measuring a “1” in this state and nothing else! Now try plotting some states on your own: how about the “0” ket? How about making both the coefficients $$\alpha$$ and $$\beta$$ set to $$1/\sqrt{2}$$? Try it out!

### Where Do I Go From Here? Next Steps…

Quantum computing’s beauty comes from its intrinsic foundations on pure mathematical logic to explain and manipulate real-world phenomena, with countless potential applications in many aspects of computation and scientific research today. The state plotted in the example above was just an extremely simple, 1 qubit state which wasn’t even in any sort of superposition. Once we start delving into multiple qubits, all of which being in different superpositions, then being arranged in diverse arrays in _quantum circuits_, which utilize the power of multiple gates to change quantum states in different ways, the level of detail simply exponentiates. However, hopefully, you as a reader have gained at least a basic intuition of how qubits work and how we represent them mathematically to gain an insight into the beautiful world of quantum mechanics and quantum computation. Congratulations on taking your first steps into this vast and diverse field!
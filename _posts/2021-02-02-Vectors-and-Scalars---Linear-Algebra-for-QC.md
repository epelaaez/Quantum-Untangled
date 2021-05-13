---
layout: post
title:  "Vectors and Scalars — Linear Algebra for QC"
author: "Emilio Peláez"
tags:   [linear-algebra,mathematics]
image: 0__Nu4R65gKOG9DfK5P.png
---

In this first article discussing linear algebra for quantum computing we are going to give you a quick introduction to vectos and scalars.

<img src="{{ site.url }}/assets/images/0__Nu4R65gKOG9DfK5P.png">

It’s no secret that linear algebra is what allows us to represent quantum computing in a much more intuitive way, abstracting some concepts of quantum mechanics that are to complicated to work with for the purpose of quantum algorithms. Because of this, it is important to have a clear understanding of the basic concepts of linear algebra and to know how to work with them.

We, Quantum Untangled, are going to give you an overview of the concepts of linear algebra that are used in quantum computing through a series of articles, this being the first article from this series. In this first article we are going to focus on exploring the very basic concepts that you will use throughout all of linear algebra — and very probably in other fields of mathematics.

One last remark before getting started. Although this series will contain a lot of information about linear algebra, it will not cover the whole subject since this is a big area in mathematics and not all of it is useful to quantum computing. If you want to gain a deeper understanding of linear algebra as a whole, I would recommend taking [18.06SC Linear Algebra](https://ocw.mit.edu/courses/mathematics/18-06sc-linear-algebra-fall-2011/index.htm) in MIT OpenCourseWare. And for a good visual representation of the concepts of linear algebra you may want to watch [Essence of linear algebra](https://youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab) by 3Blue1Brown.

Now, let’s get started.

### Vectors

<img src="{{ site.url }}/assets/images/0__ilY3YlRw__hHHhRCM.png">

The image above may seem a little daunting at first, but it really isn’t. Let’s see what is going on step by step. First, we can see that we have three axes of real numbers: $$ x $$, $$y$$ and $$z$$. These three axes make up three dimensional Euclidean space (a particular type of Hilbert space, which we will study more in depth later in the series). Along these three axis you can see that we have three vectors: $$F_x$$, $$F_y$$, and $$F_z$$ which are identified by an arrow on top of the letter. This convention of writing vectors with an arrow is really common, but not used everywhere. You can also see vectors denoted by bold letters or by context only. To avoid heavy notation, we are not going to use bold letters or an arrow or top, but we will indicate when we are talking about vectors.

You may notice that the subindex of each of these vectors is used to indicate along which axis it extends. And you can also see that we have yet another vector, this one named $$F$$ without any subindex. This vector is what we get when we add the three vectors $$F_x$$, $$F_y$$, and $$F_z$$. More technically, $$F_x$$, $$F_y$$, and $$F_z$$ are the components of the vector $$F$$.

What does this mean?

It means that to compose the vector $$F$$, you will move the length of $$F_x$$ along the $$x$$ axis, then move the length of $$F_y$$ along the $$y$$ axis and finally the length of $$F_z$$ along the $$z$$ axis. Pretty simple until now. Let’s see an example.

Suppose that you have a vector $$S$$. You know that this vector points to the point (3, 2, 5) in three dimensional space. With this information, you can define the components of the vector $$S$$ in the following way, where |X| denotes the length of a vector and the subindex the axis it extends along.
<img src="{{ site.url }}/assets/images/1__QSOqZ__X0__xl__bP0e1Upg3A.png">

More rigorously, we define each of this vectors the following way.

<img src="{{ site.url }}/assets/images/1__IrsrnI0WPZAbUsbKbgBfJA.png">

It’s important to be aware that even though we define these vectors with coordinates they are not points. The coordinate tells us which point the vectors points to, but the vector itself is not a point. Now it’s pretty easy to see that our original vector $$S$$ is composed by the sum of each of its components.

<img src="{{ site.url }}/assets/images/1__rdRg0BmQPTG8zv1jFl__hMg.png">

However, we can add even more simplicity to this. Go back and give another look at the image at the beginning of this section. You may notice that there are three red vectors we have not talked about yet. This are what are commonly reffered to as unit vectors and are denoted by the letter $$i$$, $$j$$, and $$k$$.

These unit vectors are a really powerful tool when describing other more complex vectors. I can describe them to you, but it’s easier if I show you what they mean.

<img src="{{ site.url }}/assets/images/1__FBvAP9pqZHT2K4B7gal7Tw.png">

As you can see, each of this vectors goes one unit along one axis, therefore the name unit vectors. These vectors are powerful because we can describe any other vector as a combination of these three. Let’s turn back to our example with vector $$S$$. From our previous explanation, we know that $$S$$ goes three units along the $$x$$ axis, two units along the $$y$$ axis and five units along the $$z$$ axis. Therefore, we can write it the following way.

<img src="{{ site.url }}/assets/images/1__LJ0rgPxz1Py__ndRfurlA5Q.png">

We can see that this is way simpler that having it to write as three different vectors that we need to define beforehand. You can simply multiply each unit vector times the length the vector extends along that axis and sum all the unit vectors.

Let’s see some examples.

<img src="{{ site.url }}/assets/images/1__MM4a5iURyXxmg9X32wGmFQ.png">

As you can see with the examples above, you can multiply the unit vectors by any real number to compose any vector in real three-dimensional space. By real three-dimensional space we refer to those vectors that have a real number in each of its components, i.e. no complex numbers are allowed.

But why do we bother to develop this notation if we can just write the vectors in coordinate form and we will have relatively the same?

Well, it’s easier to work with unit vectors when performing operations between vectors, specially when you start to work with dimensions higher than the three we have been talking about here. Let’s see a quick example.

Suppose you have two $$N$$-dimensional vectors $$A$$ and $$B$$ that you want to add. If you represent these two vectors as coordinates, there is no good looking way (syntax-wise) of writing their sum. But using unit vectors, we can write their sum as a sum through $$n$$ elements.

<img src="{{ site.url }}/assets/images/1__1VVRGckS9CB6vB7XTLq5hg.png">

When working with dimensions larger than three, we stop using our convention of writing the unit vectors as $$i$$, $$j$$, and $$k$$ and simply use $$x$$ with a subindex corresponding to the dimension it goes along.

As you can see, it is easier to work with unit vectors when facing problems like this. It’s also the established convention when working with vectors, so we need to learn to work with it.

### Scalars

Right now we have seen a little bit about how vectors behave. But there is another component we need to learn about, scalars. A scalar in linear algebra is a single number that does not define a vector by itself.

A scalar by itself cannot describe a vector (unless we are talking about one-dimensional vectors), but a collection of them can. Specifically, you need $$n$$ scalars to define an $$n$$-dimensional vector.

If you want to describe a vector in three dimensional space, you need to use three scalars. And you cannot choose any number you want, the scalar needs to be an element of the set of numbers that you are using to define your vector space. This last sentence may sound a little wordy and too technical, but is is saying something really simple in reality. If you are talking strictly about 3–dimensional real space, the scalars used to describe your vectors can only be real numbers. If you are talking about only the positive part of each axis in 3-dimensional real space, the scalars can only be positive real numbers.

And we’ve already seen how scalars and vectors interact with each other above, but let’s talk about it. You can multiply a vector by a scalar and you will either stretch or compress the vector, but it will stay in the same direction. Let’s take for example the vector $$i+2j+3k$$.

<img src="{{ site.url }}/assets/images/1__vAkIr1TZla1ZNqRZxi96cQ.png">

In this ilustration, the red axis is the $$x$$ axis, the green axis is the $$y$$ axis and the blue axis is the $$z$$ axis. Now, let’s take this vector and multiply by two. Using unit vector notation, we get $$2(i+2j+3k)=2i+4j+6k$$.

<img src="{{ site.url }}/assets/images/1__fBE5Adb2htT3AXSHj__T4Vg.png">

As you can see in this graph, both vectors are pointing the same way, but the black vector extends twice as far. This is what scalar-vector multiplication looks like graphically, it is really simple to see it this way and even simpler when working with unit vector notation since you can use the usual arithmetic rules.

### Dot product

There is one more concept that I would like to introduce before concluding this first article in linear algebra for quantum computing, and that is the dot product.

This operation is performed between two vectors and gives a scalar (a single number) as a result. The actual definition of the dot product is quite technical, but for our purposes we can define it as a measure of how similar or different two vectors are. If you want to get into the details of what the dot product is, I recommend starting [here](https://en.wikipedia.org/wiki/Dot_product).

The dot product (denoted as a dot, e.g. $$ A \cdot B $$) between two n-dimensional vectors $$A$$ and $$B$$ is defined as follows:

<img src="{{ site.url }}/assets/images/1__iEUWXoaEOuAi2Zuaa111Hg.png">

But how can we know how similar two vectors are only from the dot product? Well, there are some important values to remember. Suppose you have two unit — or normalized — vectors (their total length is 1) $$A$$ and $$B$$, then:

*   If $$A \cdot B = 0$$, the vectors form a 90° angle with one another, in other words they are orthogonal
*   If $$A \cdot B = 1$$, the vectors are parallel, in other words they never touch and point in the same direction
*   If $$A \cdot B = -1$$, the vectors are anti-parallel, in other words they never touch and point in opposite directions

And since the values an angle can take are continuos, anything between the three values above represent a specific angle. For example, if we get that $$A \cdot B=0.6$$, we know that the vectors are somwhere in between forming a 90° angle and being parallel, and closer to the latter option. The following image illustrates this concept.

<img src="{{ site.url }}/assets/images/1__U5lOQHgPbZwwPxGFPpV7ww.jpeg">

This concept of comparing two vectors through the dot product is extremely useful in quantum computing, specially when you want to see how similar two quantum states are and what’s the probability of your qubit collapsing to one specific state. But we will discuss this later on in the series.

Well, that was a quick introduction to vectors, scalars and the dot product. These three concepts are very important throughout the whole study of linear algebra and quantum computing, so I recommend that you get comfortable with them.

Right now it may not seem that you are going to use these when working in quantum computing, but trust me, this concepts are widely used in quantum computing and it’s important to emphasize them at an early learning stage. The only thing explained right now that will change when working with quantum computing is the notation, which is easier in quantum computing and we will introduce it soon.

With this said, I hope that you found this information useful and I encourage you to follow [Quantum Untangled](https://medium.com/quantum-untangled) to make sure you don’t miss future publications in this and more series to come!
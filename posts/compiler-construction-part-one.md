---
layout: blog
title: Compiler Construction - Part One
date: 2021-03-13T20:10:23.636Z
thumbnail: /image/compiler-construction.png
credit: Department of Computer Science UBIT.
tags: Compiler Construction
slug: compiler-construction-part-one
description: A Brief introduction into Compiler Construction.
---

### Foreword(?)

Hi there, this is meant to be a personal note of what I am learning in a course I am taking this semester on Compiler Construction and I hope that they would be of use to you.

#### Notes

- I would assume that you have some sort of background in Computer Science but I will try as much as possible to carry you along.
- I might make some mistakes along the way so feel free to [DM me on Twitter](https://twitter.com/messages/compose?recipient_id=1249996578154328066) when you spot any.

### In the Beginning...

#### Communication

Communication is a big deal in the world that we live in. You don't just communicate, you strive as much as possible to make the people you are talking to understand the idea you are trying to pass across.

This is no different when you are writing code, you try as much as possible to express a certain feature/function in such a way that the computer understands what you are trying to do.

#### Language

Language is the foundation upon which communication is built upon. It is a set of sentences over an alphabet with an associated rule of formation.

An alphabet is a finite and non-empty set of characters or symbols that we can use in a language.

The associated rule of formation is what we call grammar.

We will get back to grammar later on.

#### Programs and Computer Languages

A program is a set of instructions that are written in a special type of language, that a computer understands, for execution. This special type of language is referred to as a programming language.

There are three types of programming languages, and they are high-level language, low-level language and assembly language.

High-level languages are programming languages that are human friendly, English-like but before the computer can understand programs written in this type of language they need to go through some form of processing.

Low-level or machine language, on the other hand, refers to the programming language that the computer understands without going through some form of processing but it is not readable and human-friendly.

Assembly language is in between the first two categories but it is closer to machine language. Unlike high-level languages, you can't read and get a clear grasp of what is happening without devoting time to it.

#### Compilers and Interpreters

Depending on the type of processing that a high-level language needs before the computer can understand it, high-level languages can be classified based on whether they are compiled or interpreted.

When a high-level language is said to be compiled, it means that the source code is scanned and processed at once and then converted to an object program that the computer can execute directly. Examples of languages like this are C and C++.

When a high-level language is said to be interpreted, it means that the source code is scanned and processed into a machine-executable form that runs line by line. This line by line execution continues running until the interpreter encounters an error that halts the execution (this type of errors are referred to as runtime errors). Examples of languages like this are Ruby and Python.

#### Linkers and Loaders

Apart from Compilers and Interpreters, we have two other programs that are important to this process, they are linkers and loaders.

When you import or reference external modules in your source code, linkers do the job of running around and making sure that these modules are available before the object code is created. The job of the loader is to load this executable file into the memory and execute it, while doing this it also allocates some parts of the memory for use during the execution.

The next part would talk more in-depth about Compilers and the stages involved during compilation.

#### More Reading

- [Alphabet](https://en.wikipedia.org/wiki/Alphabet)
- [Grammar](https://en.wikipedia.org/wiki/Grammar)
- [Computer Languages](https://www.computerscience.gcse.guru/theory/high-low-level-languages)
- [Compilers and Interpreters](https://lambda.uta.edu/cse5317/notes/node3.html)
- [Linkers](<https://en.wikipedia.org/wiki/Linker_(computing)>)
- [Loaders](<https://en.wikipedia.org/wiki/Loader_(computing)>)

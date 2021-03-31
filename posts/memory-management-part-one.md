---
layout: blog
title: Memory Management - Part One
date: 2021-03-29T19:09:45.488Z
tags: Memory Management, Operating System
slug: memory-management-part-one
meta:
  title: Memory Management - Part One
  description: A brief history of memory management.
---

## Memory Management

### Introduction

Over time we have known that the performance of the system depends on the [main memory][1], how much is available and how it optimizes when jobs are being processed. Therefore the management of the main memory must be as efficient as possible.

The design on the main memory has grown and we have evolved from the main memory being a unit that we can physically see to something that is abstracted far away inside the internals of a CPU.

We will take a look at some of the attempts made at solving this problem.

### 1. Single-User Contiguous Allocation

The very first attempt at solving this problem was in a non-multiprogramming environment i.e. only one job can be work on at a given time. When jobs are ready for processing, they are executed sequentially that is it was a First-Come-First-Serve algorithm.

One visible constraint to this that the size of memory was small so a job larger than the size of the memory never gets executed.

#### Algorithm

A simplified (and abstracted) version of the algorithm.

```
1. Store the first memory location of the program into the base register (for memory protection)
2. Set program counter (it keeps track of memory space used by the program) equal to address of first memory location
3. Read the first instruction of the program
4. Increment program counter by the number of bytes in the instruction
5. Has the last instruction been reached?
     if yes, then stop loading the program
     else, then continue with step 6
6. Is the program counter greater than memory size?
     if yes, then stop loading the program
     else, then continue with step 7
7. Load instruction in memory
8. Read the next instruction of the program
9. Go to step 4
```

Step 6 handles the scenario whereby a program's size is more than the memory's size.

### 2. Fixed Partition

This attempt also took a stab at trying to allow for job processing in a multi-programming environment. Partitions are configured at the start-up and remain fixed until the system is rebooted. Partitions also helped to preserve a job's memory space.

Depending on the type, partitions can be sized equally or in varied. In a case where partition sizes are varied, it helps to reduce the occurrence of internal fragmentation.

![Internal Fragmentation!](https://media.geeksforgeeks.org/wp-content/uploads/20190924115421/Untitled-Diagram-146.png 'Internal Fragmentation Geeks for Geeks')

Internal fragmentation occurs when a job uses less than the space that is allocated to it.

This algorithm is flexible because it allows multiple jobs to run at the same time.

Some of the problems are that

1. If the sizes of the partitions are too small, larger jobs don't get processed or wait until there is a partition large enough to contain them.
2. If the sizes are too large, it increases the rate of internal fragmentation and total [turnaround time][2] for a job.
3. Jobs that are larger than the sizes of the partitions but less than the size of the memory never get processed.

#### Algorithm

```
1. Get size of the job.
2. If size of job > size of the largest partition, reject job
   else go to step 3
3. Set i = 1. // i is the counter.
4. While i <= number of partitions in memory
    if job size > memory partition size(i)
      then i = i + 1
    else
      if memory partition status(i) = ’FREE’
          then load job into memory partition(i)
            change memory partition status(i)  to ’BUSY’
            go to step 1
      else i = i + 1
5. No partition available at this time, put job in waiting queue.
6. Go to step 1 to handle next job.
```

### 3. Dynamic Partitions

This method didn't require partitions to be configured at startup but allowed jobs to take as much space as they need and this solved the issue with internal fragmentation.

Jobs can be loaded into memory based on whether they fit into the first partition available i.e. first fit or whether they fit into the partition that leads to the least amount of memory wasted i.e. best fit.

However this didn't complete solve the issue with memory wastage. External fragmentation started to occur. Some jobs began to come in and they couldn't fit into the partitions created by previous jobs 

![External Fragmentation](https://media.geeksforgeeks.org/wp-content/uploads/20200729172413/2581.png)
[1]: https://en.wikipedia.org/wiki/Computer_memory 'Computer Memory'
[2]: https://www.techopedia.com/definition/23798/turnaround-time-tat 'Turnaround Time'

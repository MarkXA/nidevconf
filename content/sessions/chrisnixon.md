+++
id = "chrisnixon"
title = "Introduction to Fuzz testing with AFL"
speakers = ["chrisnixon"]
keynote = false
lightning = false
+++

Fuzz testing is the practice of throwing random data at a program and seeing what breaks.

As you can guess if the data is truly random then this can take a very long time to explore a very small part of a program's functionality.

Previous generations of fuzzers have required extensive intervention by users in order to guide the fuzzer into interesting areas of the programs execution.


AFL instruments the target program and uses this to remember what inputs caused a change in the program execution. This allows AFL to guide itself further into the program with minimal user input.

This talk will be an intro to fuzzing and a practical demonstration of running AFL against a target application to expose otherwise tricky bugs.
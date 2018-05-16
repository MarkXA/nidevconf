+++
draft = false
title = "Gophers with Antlers"
speaker = "rogersimms"
speaker2 = "simonhewitt"
keynote = false
lightning = false
+++

Using the power of ANTLR and Go we will build a simple language allowing our users to dynamically script while simultaneously allowing our engineers to statically compile. 

Our teachers always told us that Grammar was important, but it took having to write a query language to make us realise they were right.

ANTLR is a "parser generator for reading, processing, executing, or translating structured text or binary files". Given a set of rules, or Grammar, ANTLR can generate a number of tools with which we can convert text into executable code. Released in December 2016, Version 4.6 of ANTLR included Go as a target, meaning that we could finally use Go to implement the generated parsers.

Using Open Cypher as a base, we will see how we can use the same Cypher Query to execute against Neo4J and an SQL relational database with no change to the calling code.

And just because we can, does that mean we should?
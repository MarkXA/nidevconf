+++
draft = true
title = "Petabyte-scale fast analytics with Druid. How the adtech world combined a search engine and a columnar datastore to serve you the most relevant ads."
speaker = "dylanwylie"
keynote = false
lightning = false
+++

With the advertising world’s use of data being a hot topic at the moment, come and find out about some of the technology the industry uses to understand its audience (i.e. you!).

We’ll kick off by talking through the mechanisms that result in you being chased around the internet by an ad for that George Foreman grill you clicked on by accident on Amazon.

We’ll then dive into Druid, the industry’s secret sauce, an open source, high-performance, column-oriented datastore. We’ll talk about how it stores data and the optimisations that take place that allow it to answer questions on billions (and billions) of rows of data in less than a second.

We’ll discuss how Druid stays cheap-to-run through the use of approximate algorithms, zeroing in on Hyperloglog - an approximate algorithm that allows the calculation of the number of unique values in massive data-sets in O(1) time and just kilobytes of storage.

We’ll talk about the architecture that allows Druid to scale to meet modern technology companies hunger for more and more data and what other industries are making use of it. 

Then we'll finish off by talking about the open source community that’s formed around Druid and you can contribute to more ads for all!
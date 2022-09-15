+++
id = "michael-drury"
title = "CouchDB - when, where and why?"
speakers = ["michael-drury"]
lightning = true
sessionizeId = "381605"
+++

A quick talk about the pros and cons of CouchDB, a niche but powerful when used correctly database.

CouchDB is a distributed document store which is believed by some to be one of the first major NoSQL databases to find a place in large scale enterprise deployments.

Talk will focus on experience of using CouchDB in a large scale production environment for two years now with take-aways around:
1. What has worked well, discussing data replication features, sharding, clustering, redundancy and scaling.
2. What hasn't worked well, such as trying to handle data with OLAP needs (highly query-able, very relational) with CouchDB - virtualised deployments vs bare-metal deployments and so on.
3. Discussing how CouchDB can be very query-able at scale, using search indexes based on Lucene.

Key learnings will cover what I've found CouchDB is incredibly good at, some of these putting it in a very unique position, such as deploying multi-tenant data in a very secure and segregated manner. This will be somewhat specific to our use-case at Budibase as it is a perfect example of what CouchDB is good at (a direct quote from Jan Lehnardt one of the creators of CouchDB).
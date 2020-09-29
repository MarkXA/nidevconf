+++
draft = false
title = "Event Sourcing with EventStoreDB"
provider = "Dynamic Signal"
speaker = "Jason Mitchell"
duration = "full-day"
logo = "/img/sponsors/dynamic-signal.png"
link = "https://dynamicsignal.com/"
registration = "https://www.eventbrite.co.uk/e/nidc-2020-workshop-event-sourcing-with-eventstoredb-from-dynamic-signal-tickets-123191833089"
+++

Event sourcing is an alternative approach to persisting data where rather than storing the up-to-date state of an entity each change is stored as a separate record. These records (known as events) can then be replayed to derive the latest entity state.
 
During the workshop we will dive into the event sourcing pattern, its benefits, and important things to consider when building an event sourced application. We will walk-through how to implement event sourcing from scratch using EventStoreDB to record events.
 
This workshop will contain some theory but the focus will be on hands-on exercises. We will use Test-Driven Development as a tool to help learn about event sourcing.
 
## Topics covered:

* The basics of Domain-Driven Design.
* What event sourcing is and why it is useful.
* CQRS and its relationship to event sourcing.
* How to use EventStoreDB.
* How to model an application using events.
* How to build and test event sourced applications.
* How to evolve an event sourced application in production.
 
## Who is this for?

Anyone with prior experience building applications which interface with a database. All code in workshop materials will be written in C# so familiarity with the language is recommended. As we will be writing tests throughout the workshop knowledge of a test library such as NUnit or xUnit will be beneficial.
 
## Prerequisites

The following software will be required for the workshop:

* Docker
* .NET Core 3.1 SDK
* A C# IDE such as VS Code, Visual Studio or Jetbrains Rider

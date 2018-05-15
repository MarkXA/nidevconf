+++
draft = true
title = "Be Like GitHub, Don't Use GitHub"
speaker = "leeskillen"
keynote = false
lightning = true
+++

A quick dive into the pros and cons of using GitHub Releases versus traditional Package Management for releasing code. The underlying earworm for takeaway is that GitHub doesn't use GitHub Releases for distribution of things like its Large File System support, for Linux at least, preferring instead to use Package Management repositories to leverage things like intelligent version updates (e.g. via apt update) and channels (separation into stable, unstable, etc.) So yes, even GitHub don't use GitHub, sometimes. Let's discuss why.
# CraftHub Web for Umbrel

This Umbrel app serves CraftHub Web JSON Parser from:
- https://tonyswity.github.io/JSONparser/
- https://github.com/TonySwity/JSONparser

## How it works

At container startup, the app downloads the latest `main` branch tarball from the JSONparser repository and serves it with Apache.

## Port

- Host port: `38310`
- Container port: `80`

## Upstream

- Original desktop project: https://github.com/c3n9/CraftHub
- Web adaptation: https://tonyswity.github.io/JSONparser/

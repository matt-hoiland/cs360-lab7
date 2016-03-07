# cs360-lab7

## Hosting

This server is currently hosted at [http://ec2-52-26-12-151.us-west-2.compute.amazonaws.com:3005/](http://ec2-52-26-12-151.us-west-2.compute.amazonaws.com:3005/)

## Rest Services provided

### Utah City Prefix Search

Querying `/getcity?q=` will return a json array of cities in the state of Utah filtered by the prefix provided by the `q` argument.

### Fibonacci Calculator

Querying `\fibonacci?q=` will return a json array of `q + 1` fibonacci numbers.  Example:

```json
\fibonacci?q=4
[1,1,2,3]
```
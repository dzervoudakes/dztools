# dztools

> Mono repo for various configurations to be shared across frontend applications.

## Thought Process

Over time, I've developed several frontend applications which tend to share the same code formatting and lint configurations, webpack configurations, etc.
In an effort to ensure consistency and scalability, I've decided to create a shared single source of truth for the aforementioned configurations.
Now, all consumers of these configurations can simply update a package version rather than manually updating each consuming application.
